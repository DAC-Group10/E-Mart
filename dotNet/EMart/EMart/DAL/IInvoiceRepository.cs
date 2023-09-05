using EMart.Models;
using Microsoft.AspNetCore.Mvc;

namespace EMart.DAL
{
    public interface IInvoiceRepository
    {
        //Task<ActionResult<Invoice>?> GetInvoice(int Id);
        Task<ActionResult<Invoice>> AddInvoice(Invoice Invoice);
        Task<ActionResult<Invoice>> GetInvoice(int invoiceId);
        // Task AddInvoice(Invoice invoice);
    }
}
