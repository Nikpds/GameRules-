using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GameRules.Models;
using GameRules.Api.Models;
using GameRules.Repository;
using Microsoft.AspNetCore.Mvc;
using GameRules.Logic;

namespace GameRules.Api.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private Context _db;

        public ProductController(Context db)
        {
            _db = db;
        }

        [HttpPost("paged")]
        public IActionResult GetAll([FromBody] Paging<Product> options)
        {
            try
            {
                var query = (options.SearchFilter != null && options.SearchFilter.Trim() != "") ? _db.Products.GetFilterQuery(x => x.Title.ToLowerInvariant().Contains(options.SearchFilter.ToLowerInvariant())) : _db.Products.GetQueryAll();
                options.TotalCount = query.Count();
                options.TotalPages = Math.Ceiling((double)options.TotalCount / Int32.Parse(options.PageSize));

                if (QueryHelper.PropertyExists<Product>(options.OrderBy))
                {
                    if (options.OrderBy == "Updated" || options.OrderBy == "Registered")
                    {
                        var orderByExpression = QueryHelper.GetPropertyExpressionDate<Product>(options.OrderBy);
                        query = options.Descending ? query.OrderByDescending(orderByExpression) : query.OrderBy(orderByExpression);
                    }
                    else if (options.OrderBy == "Availability" || options.OrderBy == "Quantity" || options.OrderBy == "KaissaStock")
                    {
                        var orderByExpression = QueryHelper.GetPropertyExpressionInt<Product>(options.OrderBy);
                        query = options.Descending ? query.OrderByDescending(orderByExpression) : query.OrderBy(orderByExpression);
                    }
                    else if (options.OrderBy == "InitialPrice")
                    {
                        var orderByExpression = QueryHelper.GetPropertyExpressionDouble<Product>(options.OrderBy);
                        query = options.Descending ? query.OrderByDescending(orderByExpression) : query.OrderBy(orderByExpression);
                    }
                    else
                    {
                        var orderByExpression = QueryHelper.GetPropertyExpression<Product>(options.OrderBy);
                        query = options.Descending ? query.OrderByDescending(orderByExpression) : query.OrderBy(orderByExpression);
                    }

                }
                else
                {
                    query.OrderBy(x => x.Title);
                }
                var data = query.Skip((options.CurrentPage - 1) * Int32.Parse(options.PageSize))
                                                .Take(Int32.Parse(options.PageSize))
                                                .ToList();
                options.Data = data;
                return Ok(options);
            }
            catch (Exception exc)
            {
                return this.BadRequest(exc.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Insert(Product pro)
        {
            try
            {
                pro.Title = "Game of thrones";

                var result = await _db.Products.Insert(pro);

                return Ok(result);
            }
            catch (Exception exc)
            {
                return this.BadRequest(exc.Message);
            }
        }

        [HttpGet("test")]
        public string get()
        {
            return " all good";

        }
    }
}
