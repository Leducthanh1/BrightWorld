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
        [HttpGet]
        public string LoadData()
        {
            string Category = (Request.Params.Get("Category"));
            IEnumerable<Product> products;
            if (!string.IsNullOrEmpty(Category))
            {
                products = db.Products.Include(p => p.ProductFeature).Where(p => (p.Class == Category)).ToList();
            }
            else
            {
                products = db.Products.ToList();
            }

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

        //public ActionResult Index()
        //{
        //    string Brand = (Request.Params.Get("Brand"));
        //    string Category = (Request.Params.Get("Category"));
        //    string Price = (Request.Params.Get("Price"));
        //    IEnumerable<Product> brand;
        //    IEnumerable<Product> category;
        //    IEnumerable<Product> price;
        //    IEnumerable<Product> products;
        //    //Filter Brand
        //    if (!string.IsNullOrEmpty(Brand))
        //    {
        //        brand = db.Products.Include(p => p.ProductFeature).Where(p => (p.Brand == Brand));
        //    }
        //    else
        //    { 
        //        brand = db.Products;
        //    }
        //    //Filter Class
        //    if (!string.IsNullOrEmpty(Category))
        //    {
        //        category = db.Products.Include(p => p.ProductFeature).Where(p => (p.Class == Category));
        //    }
        //    else
        //    {
        //        category = db.Products;
        //    }
        //    //Filter Price
        //    if (!string.IsNullOrEmpty(Price))
        //    {
        //        price = db.Products.Include(p => p.ProductFeature).Where(p => (p.Price == Price));
        //    }
        //    else
        //    {
        //        price = db.Products;
        //    }
        //    //string Data = JsonConvert.SerializeObject(products);
        //    return View(products);
        //}

        public ActionResult Detail(int id)
        {
            //int ProductId = int.Parse(Request.Params.Get("id"));
            IEnumerable<Product> products;
            products = db.Products.Include(p => p.ProductFeature).Where(p => p.ID == id);
            return View(products);
        }
    }
}