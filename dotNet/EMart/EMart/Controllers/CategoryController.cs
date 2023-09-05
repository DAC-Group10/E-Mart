using EMart.DAL;
using EMart.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _repository;

        public CategoryController(ICategoryRepository repository)
        {
            _repository = repository;

        }

        [HttpGet("{subcatid}")]
        public List<Category> GetCategoriesBySubcatId(string subcatid)
        {
            List<Category> category = _repository.GetCategories(subcatid);
            return category;
        }
    }
}
