
using System;
using System.Security.Authentication;
using GameRules.Models;
using MongoDB.Driver;

namespace GameRules.Repository
{
    public class Context
    {
        public IMongoDatabase Database { get; private set; }

        public MongoDbRepository<Product> Products { get; private set; }

        public Context(string connectionString)
        {
            var url = new MongoUrl(connectionString);

            MongoClientSettings settings = MongoClientSettings.FromUrl(new MongoUrl(connectionString));
            settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
            var client = new MongoClient(settings);
            if (url.DatabaseName == null)
            {
                throw new ArgumentException("Your connection string must contain a database name", connectionString);
            }
            this.Database = client.GetDatabase(url.DatabaseName);

            Products = new MongoDbRepository<Product>(this.Database, "Products");

        }
    }
}