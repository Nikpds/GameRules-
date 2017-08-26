using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GameRules.Models;
using MongoDB.Driver;

namespace GameRules.Repository
{
    public class MongoDbRepository<T> where T : Entity
    {
        protected internal IMongoCollection<T> collection;

        public IMongoCollection<T> Collection { get { return collection; } }

        public MongoDbRepository(IMongoDatabase database, string collectionName)
        {
            this.collection = database.GetCollection<T>(collectionName);
        }

          public IQueryable<T> GetQueryAll()
        {
            var documents = collection.AsQueryable();

            return documents;
        }

         public IQueryable<T> GetFilterQuery(Expression<Func<T, bool>> predicate)
        {
            return collection.AsQueryable().Where(predicate);
        }

         public virtual async Task<T> Insert(T entity)
        {
            await collection.InsertOneAsync(entity);

            return entity;
        }

            public async Task<IEnumerable<T>> GetAll()
        {
            var documents = await collection.FindAsync(x => true);
            var result = await documents.ToListAsync();

            return result;
        }
    }
}