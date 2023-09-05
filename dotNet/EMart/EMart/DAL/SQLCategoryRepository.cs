using EMart.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EMart.DAL
{
    public class SQLCategoryRepository : ICategoryRepository
    {
        private readonly Appdbcontext context;
        public SQLCategoryRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public List<Category> GetCategories(string subcatid)
        {
            if(context.category == null)
            {
                return null;
            }
            List<Category> categorylist = context.category.Where(e => e.Subcat_Id == subcatid).ToList();

            if (categorylist == null)
            {
                return null;
            }

            return categorylist;
        }
    }
}
