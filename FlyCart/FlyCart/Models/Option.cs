using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FlyCart.Models
{
    public class Option
    {
        public int OptionID { get; set; }

        [ForeignKey("OptionGroup")]
        public int OptionGroupID { get; set; }
        public virtual OptionGroup OptionGroup { get; set; }

        public string OptionName { get; set; }
        public virtual List<ProductOption> ProductOptions { get; set; }
    }
}
