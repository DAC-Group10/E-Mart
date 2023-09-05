using EMart.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;

namespace EMart.DAL
{
    public class SQLAuthenticationRepository : IAuthenticationRepository
    {
        private readonly Appdbcontext _context;
        public SQLAuthenticationRepository(Appdbcontext context)
        {
            _context = context;
        }

        public Task<ActionResult<Cart>> AddCustomerWithAuth(Authentication authentication)
        {
            _context.Add(authentication);
            _context.SaveChanges();
            return null;
        }

        public Optional<Authentication> getByUserNameAndPassword(string userName, string password)
        {
            return _context.Authentications.SingleOrDefault(u => u.Uname == userName && u.Pass == password);
        }
    }
}
