using EMart.Models;
using Microsoft.AspNetCore.Mvc;

namespace EMart.DAL
{
    public class SQLInvoiceRepository : IInvoiceRepository
    {
        private readonly Appdbcontext context;

        public SQLInvoiceRepository(Appdbcontext context)
        {
            this.context = context;
        }

        public Task<ActionResult<Invoice>> Add(Invoice Invoice)
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResult<Invoice>> AddInvoice(Invoice invoice)
        {
            context.Invoices.Add(invoice);
            await context.SaveChangesAsync();
            return invoice;
        }

        public async Task<ActionResult<Invoice>?> GetInvoice(int Id)
        {
            if (context.Invoices == null)
            {
                return null;
            }
            var Invoice = await context.Invoices.FindAsync(Id);

            if (Invoice == null)
            {
                return null;
            }

            return Invoice;

        }
    }
}
