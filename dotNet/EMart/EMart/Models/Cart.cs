using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMart.Models
{
    [Table("Cart")]
    public class Cart
    {
        [Key]
        public int cart_Id { get; set; }
        public int cust_Id { get; set; }
        public int product_Id { get; set; }
        public Product? product { get; set; }
    }
}
