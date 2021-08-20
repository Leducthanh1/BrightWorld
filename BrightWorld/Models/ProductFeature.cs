namespace BrightWorld.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ProductFeature
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID { get; set; }

        public int? Evalute { get; set; }

        [StringLength(50)]
        public string Vol { get; set; }

        [StringLength(50)]
        public string Wat { get; set; }

        [StringLength(50)]
        public string Img1 { get; set; }

        [StringLength(50)]
        public string Img2 { get; set; }

        [StringLength(50)]
        public string Img3 { get; set; }

        [Column(TypeName = "ntext")]
        public string Cm1 { get; set; }

        [Column(TypeName = "ntext")]
        public string Cm2 { get; set; }

        [Column(TypeName = "ntext")]
        public string Cm3 { get; set; }

        [Column(TypeName = "ntext")]
        public string Dc { get; set; }

       // [JsonIgnore]
        public virtual Product Product { get; set; }
    }
}
