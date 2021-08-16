namespace BrightWorld.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Product
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; }

        public string Price { get; set; }

        [Required]
        [StringLength(50)]
        public string Brand { get; set; }

        [Required]
        [StringLength(50)]
        public string Class { get; set; }

        public virtual ProductFeature ProductFeature { get; set; }

        //public virtual Product Products1 { get; set; }

        //public virtual Product Product1 { get; set; }

        //public virtual Product Products11 { get; set; }

        //public virtual Product Product2 { get; set; }
        public virtual ICollection<ProductImage> ProductImages { get; set; }
    }
}
