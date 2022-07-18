using FlyCart.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlyCart
{
    public class Startup
    {
        private readonly IConfiguration configuration;

        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(options => options.EnableEndpointRouting = false);
            services.AddDbContext<FlyCartContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("FCConnection"))

            );
            services.AddCors(o => o.AddPolicy("MyPolicy", policy =>
            {
                 policy.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
        }


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            app.UseCors("MyPolicy");
            app.UseMvc();
            app.UseMvcWithDefaultRoute();
            //app.UseStaticFiles();
            app.UseHttpsRedirection();


            app.UseRouting();
        }
    }
}
