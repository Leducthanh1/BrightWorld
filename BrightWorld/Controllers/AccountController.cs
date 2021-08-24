using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BrightWorld.Models;

namespace BrightWorld.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Index()
        {
            return View("Login");
        }
        //public ActionResult Login()
        //{
        //    return View();
        //}
        [HttpPost]
        public ActionResult Login(User model)
        {
            BrightWorldContext db = new BrightWorldContext();
            string returnUrl = Request.Params["ReturnUrl"];
            var userRec = db.Users.FirstOrDefault(user => user.UserName.ToLower() == model.UserName && user.Password == model.Password);
            if(userRec != null)
            {
                SignInUser(userRec.UserName);
                if (!string.IsNullOrEmpty(returnUrl))
                {
                    return Redirect(returnUrl);
                }
                return RedirectToAction("Index", "Home");
            }
            ModelState.AddModelError("", "Invalid Username or Password");
            return View();
        }
        private void SignInUser(string username)
        {

        }

        public ActionResult Logout(User model)
        {
            return View();
        }
    }
        
}
