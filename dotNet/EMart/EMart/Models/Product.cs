using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMart.Models
{
    [Table("Product")]
    public class Product
    {
        [Key]
        public int Product_Id { get; set; }
        public string? ProductName { get; set; }
        public string? ProductDescription { get; set; }
        public string? ProductImage { get; set; }
        public int MrpPrice { get; set; }
        public int CardholdersPrice { get; set;}
        public int Points_To_Be_Redeem { get; set; }

        public int Quantity { get; set; }

        public int Catmaster_Id { get; set; }
        //[ForeignKey("Catmaster_Id")]
        public Category category { get; set; }

        public Cart? cart { get; set; }

    }
}
