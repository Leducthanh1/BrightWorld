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
        //public ActionResult Index()
        //{
        //    List<Data> D = new List<Data>();
        //    foreach (var X in db.Products.Include(p => p.ProductFeature))
        //    {
        //        D.Add(new Data()
        //        {
        //            Id = X.ID.ToString(),
        //            Br = X.Brand,
        //            Cl = X.Class,
        //            Name = X.Name,
        //            Price = X.Price,
        //            I1 = X.ProductFeature.Img1,
        //            I2 = X.ProductFeature.Img2,
        //            I3 = X.ProductFeature.Img3,
        //            V = X.ProductFeature.Vol,
        //            W = X.ProductFeature.Wat,
        //            Dc = X.ProductFeature.Dc,
        //            Cm1 = X.ProductFeature.Cm1,
        //            Cm2 = X.ProductFeature.Cm2,
        //            Cm3 = X.ProductFeature.Cm3,
        //            Rate = X.ProductFeature.Evalute.ToString()
        //        });
        //    }
        //    return View(D);
        //}

        public string LoadData()
        {
            string Brand = (Request.Params.Get("Brand"));
            string Category = (Request.Params.Get("Category"));
            string Price = (Request.Params.Get("Price"));
            IEnumerable<Product> brand = null;
            IEnumerable<Product> category = null;
            IEnumerable<Product> price = null;
            IEnumerable<Product> products;
            //Filter Brand
            if (!string.IsNullOrEmpty(Brand))
            {
                brand = db.Products.Include(p => p.ProductFeature).Where(p => (p.Brand == Brand));
            }
            else
            {
                brand = db.Products;
            }
            //Filter Class
            if (!string.IsNullOrEmpty(Category))
            {
                category = db.Products.Include(p => p.ProductFeature).Where(p => (p.Class == Category));
            }
            else
            {
                category = db.Products;
            }
            //Filter Price
            if (!string.IsNullOrEmpty(Price))
            {
                price = db.Products.Include(p => p.ProductFeature).Where(p => (p.Price == Price));
            }
            else
            {
                price = db.Products;
            }
            products = price.Concat(brand).Distinct().Concat(category).Distinct().Concat(price).Distinct();

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