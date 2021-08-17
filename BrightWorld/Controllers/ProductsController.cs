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
            string FilterID = (Request.Params.Get("Filter"));
            IEnumerable<Product> products;
            if(!string.IsNullOrEmpty(FilterID))
            {
                //products = db.Products.Include(p => p.Product)
                //    .Include(p => p.)
                 products = db.Products.Include(p=>p.ProductFeature).Where(p => p.Brand == FilterID);
            }
            else
            {
                products = db.Products;
            }
            return View(products);
        }
        
        public ActionResult Detail(int id)
        {
            //int ProductId = int.Parse(Request.Params.Get("id"));
            IEnumerable<Product> products;
            products = db.Products.Include(p => p.ProductFeature).Where(p => p.ID == id);
            return View(products);
        }
    }
}