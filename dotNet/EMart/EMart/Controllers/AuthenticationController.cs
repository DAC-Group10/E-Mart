using EMart.DAL;
using EMart.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;

namespace EMart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationRepository _aRepository;

        public AuthenticationController(IAuthenticationRepository authenticationRepository)
        {
            _aRepository = authenticationRepository;
        }

        [HttpGet]
        public Optional<Authentication> getByUserNameAndPassword(string username, string password)
        {
            return _aRepository.getByUserNameAndPassword(username, password);
        }

        [HttpPost]
        public Task<ActionResult<Cart>> AddCustomerWithAuth(Authentication authentication)
        {
            Console.WriteLine("hello");
            _aRepository.AddCustomerWithAuth(authentication);
            return null;
        }
    }
}
