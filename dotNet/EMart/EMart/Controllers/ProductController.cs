using EMart.DAL;
using EMart.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EMart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
          /*  if (await _productRepository.GetAllProducts() == null)
            {
                return null;
            }
            return await _productRepository.GetAllProducts();*/
          if(_productRepository.GetProducts()==null)
            {
                return null;
            }
          return _productRepository.GetProducts();
        }



        [HttpGet("ProductbyID/{productId}")]
        public async Task<ActionResult<Product>> GetProductsById(int productId)
        {
            var products = await _productRepository.GetProductById(productId);
            if (products == null)
            {
                return null;
            }
            return products;
        }


        [HttpGet("{catmasterId}")]
        public async Task<List<Product>> GetProductsByCatmasterId(int catmasterId)
        {
            var products = await _productRepository.GetProductByCatmasterId(catmasterId);
            if (products == null)
            {
                return null;
            }
            return products;
        }
    }
}
