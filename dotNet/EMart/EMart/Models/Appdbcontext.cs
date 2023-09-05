using EMart.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace EMart.Models
{
    public class Appdbcontext: DbContext
    {
        public Appdbcontext() { }
        public Appdbcontext(DbContextOptions<Appdbcontext> options) : base(options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                /*  optionsBuilder.UseMySql("Server=localhost;Database=emartDB;User=root;Password=vita2023;",
                      Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.32-mysql"));*/

                optionsBuilder.UseMySQL("server=localhost;database=emartdb;user=root;password=Pady@123");
            }
        }
        public DbSet<Product> product { get; set; }
        public DbSet<Category> category { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Authentication> Authentications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Product>()
           .HasKey(p => p.Product_Id); // Set primary key for Product entity

            modelBuilder.Entity<Category>()
                .HasKey(c => c.Catmaster_Id);

            //modelBuilder.Entity<Category>()
            //  .HasMany<Prodpct>() // Category has many Products
            //  .WithOne(p => p.Category) // Product belongs to one Category
            //  .HasForeignKey(p => p.CategoryCatmaster_Id) // Foreign key property in Product entity
            //  .IsRequired();


            modelBuilder.Entity<Product>()
                .HasOne(c => c.category)
                .WithMany(p=>p.Products)
                .HasForeignKey(p => p.Catmaster_Id)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Product>()
            .HasOne(p => p.cart)
            .WithOne(a => a.product)
            .HasForeignKey<Cart>(c => c.product_Id);

            modelBuilder.Entity<Customer>()
            .HasOne(c => c.authentication)
            .WithOne(a => a.customer)
            .HasForeignKey<Authentication>(a => a.cust_Id);
        }
    }
}

