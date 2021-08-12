using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BrightWorld.Models
{
    public class ProductImage
    {
        
        public int ID { get; set; }
        public string ImageUrl { get; set; }
        public bool IsFearture { get; set; }
    }
}