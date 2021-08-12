using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace BrightWorld.Models
{
    public partial class BrightWorldContext : DbContext
    {
        public BrightWorldContext()
            : base("name=BrightWorldContext")
        {
        }

        public virtual DbSet<Post> Posts { get; set; }
        public virtual DbSet<ProductFeature> ProductFeatures { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductImage> ProductImage { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasOptional(e => e.ProductFeature)
                .WithRequired(e => e.Product);

            //modelBuilder.Entity<Product>()
            //    .HasOptional(e => e.Products1)
            //    .WithRequired(e => e.Product1);

            //modelBuilder.Entity<Product>()
            //    .HasOptional(e => e.Products11)
            //    .WithRequired(e => e.Product2);
        }
    }
}
