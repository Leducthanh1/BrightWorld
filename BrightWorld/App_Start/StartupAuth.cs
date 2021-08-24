using System;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;
[assembly: OwinStartup(typeof(BrightWorld.App_Start.StartupAuth))]

namespace BrightWorld.App_Start
{
    public class StartupAuth
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/Account/Login"),
                LogoutPath = new PathString("/Account/SignOut"),
                ExpireTimeSpan = TimeSpan.FromMinutes(60)
            }) ;
        }
    }
}