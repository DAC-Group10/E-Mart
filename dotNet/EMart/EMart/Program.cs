
using Emart.DAL;
using EMart.DAL;
using EMart.Models;
using Microsoft.EntityFrameworkCore;

namespace EMart
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyAllowSpecificOrigins",builder =>
                    {
                        builder.WithOrigins("*")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                    });
            });

            builder.Services.AddSwaggerGen();
            builder.Services.AddTransient<ICategoryRepository, SQLCategoryRepository>();
            builder.Services.AddTransient<IProductRepository, SQLProductRepository>();
            builder.Services.AddTransient<ICartRepository, SQLCartRepository>();
            builder.Services.AddTransient<ICustomerRepository, SQLCustomerRepository>();
            builder.Services.AddTransient<IInvoiceRepository, SQLInvoiceRepository>();
            builder.Services.AddTransient<IAuthenticationRepository, SQLAuthenticationRepository>();

            builder.Services.AddDbContext<Appdbcontext>(
                option => option.UseMySQL(builder.Configuration.GetConnectionString("EmartDBConnection")));


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors("MyAllowSpecificOrigins");

            app.MapControllers();

            app.Run();
        }
    }
}