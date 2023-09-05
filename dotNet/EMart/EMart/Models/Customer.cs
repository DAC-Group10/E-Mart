using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMart.Models
{
    [Table("Customer")]
    public class Customer
    {
        [Key]

        public int Cust_Id { get; set; }

        public string? AddLine1 { get; set; }

        public string? AddLine2 { get; set; }

        public string? City { get; set; }

        public string? CustName { get; set; }

        public string? Email { get; set; }

        public char Gender { get; set; }

        public long PhoneNo { get; set; }

        public long? Pincode { get; set; }

        public int RedeemPoints { get; set; }

        public ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();

        public Authentication authentication { get; set; }
    }
}
