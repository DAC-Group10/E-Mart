using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMart.Models
{
    [Table("Category")]
    public class Category
    {
        [Key]
        public int Catmaster_Id { get; set; }
        public string? CategoryName { get; set; }
        public string? Cat_Id { get; set; }
        public string? Subcat_Id { get; set; }
        public string? CatImgPath { get; set; }
        public bool? Flag { get; set; }


        public ICollection<Product> Products { get; set; }
    }
}
