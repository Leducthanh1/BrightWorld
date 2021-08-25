using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using BrightWorld.Models;
using Newtonsoft.Json;

namespace BrightWorld.Controllers
{
    public class ProductsController : Controller
    {
        BrightWorldContext db = new BrightWorldContext();
        // GET: Products
        public ActionResult Index()
        {
            return View();
        }
        public string LoadData()
        {
            string Brand = (Request.Params.Get("Brand"));
            string Category = (Request.Params.Get("Category"));
            IEnumerable<Product> products = null;

            if (!string.IsNullOrEmpty(Brand))
            {
                if (!string.IsNullOrEmpty(Category))
                {
                    products = db.Products.Include(p => p.ProductFeature).Where(p =>p.Brand == Brand && p.Class == Category);
                }
                else
                {
                    products = db.Products.Include(p => p.ProductFeature).Where(p => p.Brand == Brand);
                }
            }
            else
            {
                if (!string.IsNullOrEmpty(Category))
                {
                    products = db.Products.Include(p => p.ProductFeature).Where(p => p.Class == Category);
                }
                else
                {
                        products = db.Products.Include(p => p.ProductFeature);
                }
            }

            //Fix err when convert products to json
            var settings = new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                Error = (sender, args) =>
                {
                    args.ErrorContext.Handled = true;
                },
            };

            return JsonConvert.SerializeObject(products, settings);
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