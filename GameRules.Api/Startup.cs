using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GameRules.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace GameRules.Api
{
    public class Startup
    {
        private string dbConectionString { get; }
        private MongoUrl mongoUrl { get; }
        private Context context { get; }

        public Startup(IHostingEnvironment env)
        {
            // var builder = new ConfigurationBuilder()
            //     .SetBasePath(env.ContentRootPath)
            //     .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
            // Configuration = builder.Build();

            // dbConectionString = Configuration.GetConnectionString("DefaultConnection");
            dbConectionString = "mongodb://localhost";
            mongoUrl = new MongoUrl(dbConectionString);

            context = new Context(dbConectionString);
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
