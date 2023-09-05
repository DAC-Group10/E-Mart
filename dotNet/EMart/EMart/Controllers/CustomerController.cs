using EMart.DAL;
using EMart.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _repository;
        public CustomerController(ICustomerRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            if (await _repository.GetCustomers() == null)
            {
                return NotFound();
            }
            return await _repository.GetCustomers();
        }

        [HttpPost]
        public async Task<ActionResult<Customer>> AddCustomer(Customer customer)
        {
            await _repository.AddCustomer(customer);
            return null;

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> editCustomer(int id, Customer customer)
        {
            return await _repository.editCustomer(id, customer);
        }
    }
}
