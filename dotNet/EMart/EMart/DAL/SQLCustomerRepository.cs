using EMart.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace EMart.DAL
{
    public class SQLCustomerRepository : ICustomerRepository
    {
        private readonly Appdbcontext _context;

        public SQLCustomerRepository(Appdbcontext context)
        {
            _context = context;
        }

        public async Task<ActionResult<Customer>> AddCustomer(Customer customer)
        {
            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();
            return null;
        }

        public async Task<IActionResult> editCustomer(int id, Customer customer)
        {
            try
            {
                _context.Entry(customer).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return new NoContentResult();
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult("An error occurred while updating the customer.");
            }
        }

        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            return await _context.Customers.ToListAsync();
        }
    }
}
