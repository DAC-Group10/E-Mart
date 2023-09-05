using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMart.Models
{
        [Table("Invoice")]
        public class Invoice
        {
            [Key]

            public int Invoice_Id { get; set; }

            public DateTime? InvDate { get; set; }

            public double PayableAmt { get; set; }

            public double Tax { get; set; }

            public double TotalAmt { get; set; }

            public int Cust_Id { get; set; }

        }
    
}
