using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlyCart.Models
{
    public class Category
    {
        public int? CategoryID { get; set; }
        [Required]
        [MaxLength(50)]
        [DisplayName("CategoryName")]
        public string Name { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "Do not enter more than 100 characters")]
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
