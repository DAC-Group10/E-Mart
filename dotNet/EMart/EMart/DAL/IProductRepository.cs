using EMart.Models;
using Microsoft.AspNetCore.Mvc;

namespace EMart.DAL
{
    public interface IProductRepository
    {
      //  Task<ActionResult<Product>> GetProductById(int Product_Id);
        Task<ActionResult<IEnumerable<Product>>> GetAllProducts();
        List<Product> GetProducts();

        Task<List<Product>?> GetProductByCatmasterId(int catmaster_Id);
        Task<ActionResult<Product>> GetProductById(int productId);
    }
}
