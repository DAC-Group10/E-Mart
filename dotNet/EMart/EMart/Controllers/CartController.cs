using EMart.DAL;
using EMart.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EMart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository _repository;

        public CartController(ICartRepository repository)
        {
            _repository = repository;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cart>?>> GetCarts()
        {
            if (await _repository.GetAllCart() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllCart();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetById_ActionResultOfT(int id)
        {
            var cart = await _repository.GetCarts(id);
            return cart ?? NotFound();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Putcart(int id, Cart cart)
        {
            if (id != cart.cart_Id)
            {
                return BadRequest();
            }
            try
            {
                await _repository.Update(id, cart);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetCarts(id) == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        // POST: 
        [HttpPost]
        public async Task<ActionResult<Cart>> PostEmployee(Cart cart)
        {
            await _repository.Add(cart);
            return CreatedAtAction("PostCart", new { id = cart.cart_Id }, cart);

        }

        // DELETE: 
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCart(int id)
        {
            if (_repository.GetAllCart() == null)
            {
                return NotFound();
            }
            var cart = _repository.Delete(id);
            if (cart == null)
            {
                return NotFound();
            }
            await _repository.Delete(cart.Id);
            return NoContent();
        }
    }
}
