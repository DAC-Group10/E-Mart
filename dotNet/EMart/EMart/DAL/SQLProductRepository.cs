
using EMart.Models;
using EMart.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace Emart.DAL
{
    public class SQLProductRepository:IProductRepository
    {
        private readonly Appdbcontext context;

        public SQLProductRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts()
        {
            if(context.product==null)
            {
                return null;
            }
            return await context.product.ToListAsync();
        }

        public async Task<ActionResult<Product>> GetProductById(int productId)
        {
            if(context.product==null)
            {
                return null;
            }
            var products = await context.product.FindAsync(productId);
            if (products == null)
            {
                return null;
            }
            return products;

        }
        public List<Product> GetProducts()
        {
            return context.product.ToList();
        }

        public async Task<List<Product>?> GetProductByCatmasterId(int catmaster_Id)

        {
            if (context.product == null)
            {
                return null;
            }
            var products=await context.product.Where(p=>p.Catmaster_Id==catmaster_Id).ToListAsync();

            return products;

        }


    }
}
