using EMart.DAL;
using EMart.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceRepository _repository;
        public InvoiceController(IInvoiceRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<Invoice>> GetInvoices(int invoiceId)
        {
            var invoices = await _repository.GetInvoice(invoiceId);
            if (invoices == null)
            {
                return null;
            }
            return invoices;
        }

        [HttpPost]
        public async Task<ActionResult<Invoice>> AddInvoice(Invoice invoice)
        {
            await _repository.AddInvoice(invoice);
            return null;

        }
    }
}
