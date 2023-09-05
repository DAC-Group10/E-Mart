using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMart.Models
{
    [Table("Authentication")]
    public class Authentication
    {
        [Key]

        public int Auth_Id { get; set; }
        public string Uname { get; set; }
        public string Pass { get; set; }
        public int cust_Id { get; set; }
        public Customer customer { get; set; }
    }
}
