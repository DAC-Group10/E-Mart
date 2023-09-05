using EMart.Models;

namespace EMart.DAL
{
    
        public interface ICategoryRepository
        {
            List<Category> GetCategories(string subcatid);
       }
    
}
