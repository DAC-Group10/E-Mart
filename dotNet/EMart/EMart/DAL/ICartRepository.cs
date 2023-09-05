using EMart.Models;
using Microsoft.AspNetCore.Mvc;

namespace EMart.DAL
{
    public interface ICartRepository
    {
        Task<ActionResult<Cart>?> GetCarts(int Id);
        Task<ActionResult<IEnumerable<Cart>>> GetAllCart();
        Task<ActionResult<Cart>> Add(Cart cart);
        Task<Cart> Update(int id, Cart cartChanges);
        Task<Cart> Delete(int Id);
    }
}
