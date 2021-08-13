using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using BrightWorld.Models;

namespace BrightWorld.Controllers
{
    public class ProductsController : Controller
    {
        BrightWorldContext db = new BrightWorldContext();
        // GET: Products
        public ActionResult Index()
        {
            string categoryId = (Request.Params.Get("category"));
            IEnumerable<Product> products;
            if(!string.IsNullOrEmpty(categoryId))
            {
                //products = db.Products.Include(p => p.Product)
                //    .Include(p => p.)
                 products = db.Products.Include(p=>p.ProductFeature).Where(p => p.Class == categoryId);
            }
            else
            {
                products = db.Products;
            }
            return View(products);
        }
    }
}