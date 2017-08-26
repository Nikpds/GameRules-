using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameRules.Api.Models
{
    public class Paging<T>
    {
        public int CurrentPage { get; set; }
        public string PageSize { get; set; }
        public string OrderBy { get; set; }
        public bool Descending { get; set; }
        public int TotalCount { get; set; }
        public double TotalPages { get; set; }
        public IList<T> Data { get; set; }
        public IList<int> Pages { get; set; }
        public string SearchFilter { get; set; }

        public Paging()
        {
            this.Pages = new List<int>();
            this.Data = new List<T>();
        }
    }
}
