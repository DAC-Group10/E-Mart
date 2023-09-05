using EMart.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EMart.DAL
{
    public class SQLCartRepository : ICartRepository
    {
        private readonly Appdbcontext context;

        public SQLCartRepository(Appdbcontext context)
        {
            this.context = context;
        }

        public Task<ActionResult<Cart>> Add(Cart cart)
        {
            context.Carts.Add(cart);
            context.SaveChanges();
            return null;
        }

        public Task<Cart> Delete(int Id)
        {
            Cart cart = context.Carts.Find(Id);
            if (cart != null)
            {
                context.Carts.Remove(cart);
                context.SaveChangesAsync();
            }
            return null;
        }

        public async Task<ActionResult<IEnumerable<Cart>>> GetAllCart()
        {
            if (context.Carts == null)
            {
                return null;
            }
            return await context.Carts.ToListAsync();
        }

        public async Task<ActionResult<Cart>?> GetCarts(int Id)
        {
            if (context.Carts == null)
            {
                return null;
            }
            var cart = await context.Carts.FindAsync(Id);

            if (cart == null)
            {
                return null;
            }

            return cart;
        }

        public async Task<Cart> Update(int id, Cart cartChanges)
        {
            if (id != cartChanges.cart_Id)
            {
                return null;
            }

            context.Entry(cartChanges).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
            return null;

        }
                private bool CartExists(int id)
        {
            return (context.Carts?.Any(c => c.cart_Id == id)).GetValueOrDefault();
        }
    }
}
