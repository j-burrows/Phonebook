using System.Web;
using System.Web.Optimization;

namespace Phonebook
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.UseCdn = true;

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));


            bundles.Add(new StyleBundle("~/bundles/kendo/common/css")
                   .Include("~/Content/kendo/kendo.common.min.css"));
            bundles.Add(new StyleBundle("~/bundles/kendo/default/css")
                   .Include("~/Content/kendo/kendo.default.min.css"));
            bundles.Add(new StyleBundle("~/bundles/kendo/blue/css")
                   .Include("~/Content/kendo.blueopal.min.css"));

            bundles.Add(new ScriptBundle("~/bundles/kendoall").Include(
                        "~/Scripts/kendo.all.js",
                        "~/Scripts/kendo.web.js"));
        }
    }
}