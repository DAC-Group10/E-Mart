using EMart.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;

namespace EMart.DAL
{
    public interface IAuthenticationRepository
    {
        Optional<Authentication> getByUserNameAndPassword(string userName, string password);
        Task<ActionResult<Cart>> AddCustomerWithAuth(Authentication authentication);
    }
}
