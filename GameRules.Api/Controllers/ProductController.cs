using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GameRules.Models;
using GameRules.Repository;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var result = await _db.Products.GetAll();

                return Ok(result);
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
