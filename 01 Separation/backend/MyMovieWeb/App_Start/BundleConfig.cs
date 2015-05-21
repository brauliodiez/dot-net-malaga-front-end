using System.Web;
using System.Web.Optimization;

namespace MyMovieWeb
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/libs")
                .Include("~/Scripts/jquery-{version}.js")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/router.es5.js")
                );

            bundles.Add(new ScriptBundle("~/bundles/app")
                .Include("~/app/serviceModule.js")
                .Include("~/app/app.js")                
                .Include("~/app/Components/home/*.js")
                .Include("~/app/Components/movies/*.js")
                .Include("~/app/Services/*.js")
                );

               
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}
