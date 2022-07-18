using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FlyCart.Models
{
    public class ProductOption
    {
        public int ProductOptionID { get; set; }

        [ForeignKey("Product")]
        public int ProductID { get; set; }
        public virtual Product Product { get; set; }

        [ForeignKey("OptionGroup")]
        public int OptionGroupID { get; set; }
        public virtual OptionGroup OptionGroup { get; set; }
    }
}
