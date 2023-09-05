using EMart.Models;
using Microsoft.AspNetCore.Mvc;

namespace EMart.DAL
{
    public interface ICustomerRepository
    {
        Task<ActionResult<IEnumerable<Customer>>> GetCustomers();
        Task<ActionResult<Customer>> AddCustomer(Customer customer);
        Task<IActionResult> editCustomer(int id, Customer customer);
    }
}
