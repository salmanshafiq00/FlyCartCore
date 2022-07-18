using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlyCart.Models
{
    public class OptionGroup
    {
        public int OptionGroupID { get; set; }
        public string OptionGroupName { get; set; }
        public virtual List<Option> Options { get; set; }
        public virtual List<ProductOption> ProductOptions { get; set; }
    }
}
