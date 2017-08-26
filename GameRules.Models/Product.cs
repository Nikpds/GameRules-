using System;

namespace GameRules.Models
{
      public class Product:Entity
    {
        public int Availability { get; set; }
        public SiteAvailablity SiteStock { get; set; }
        public string SiteId { get; set; }
        public string EchoStock { get; set; }
        public int KaissaStock { get; set; }
        public string KaissaId { get; set; }
        public string BlackfireId { get; set; }
        public string Title { get; set; }
        public int Quantity { get; set; }
        public double InitialPrice { get; set; }
        public double DiscountPrice { get; set; }
        public DateTime Updated { get; set; }
        public DateTime Registered { get; set; }
        public string PhotoLink { get; set; }
    }

    public enum SiteAvailablity
    {
        Available,
        Unavalaible,
        Coming_Soon,
        WeekAway,
        Unknown

    }
}
