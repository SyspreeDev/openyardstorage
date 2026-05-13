import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { globSync } from "glob";

// BLOG DATA
import { blogs } from "../src/data/blogs.js";

const hostname = "https://openyardstorage.com";

// STATIC PAGE FILES
const pages = globSync("src/pages/**/*.jsx");

// INDUSTRY FILES
const industryFiles = globSync("src/data/industries/*.js");

// LOCATION FILES
const locationFiles = globSync("src/data/locations/*.js");

// STATIC ROUTES
const staticRoutes = pages
  .map((file) => {
    let route = file
      .replace(/^src[\/\\]pages/, "")
      .replace(/\\/g, "/")
      .replace(/index\.jsx$/, "")
      .replace(/page\.jsx$/, "")
      .replace(/\.jsx$/, "");

    if (route === "") return "/";

    return route;
  })
  .filter(
    (route) =>
      !route.includes("BlogDetail") &&
      !route.includes("thank-you")
  );

// BLOG ROUTES
const blogRoutes = blogs.map((blog) => {
  return `/blogs/${blog.slug}`;
});

// INDUSTRY ROUTES
const industryRoutes = industryFiles.map((file) => {
  const cleanFile = file
    .replace(/^src[\/\\]data[\/\\]industries[\/\\]/, "")
    .replace(/\\/g, "/")
    .replace(".js", "");

  return `/industries/${cleanFile}`;
});

// LOCATION ROUTES
const locationRoutes = locationFiles.map((file) => {
  const cleanFile = file
    .replace(/^src[\/\\]data[\/\\]locations[\/\\]/, "")
    .replace(/\\/g, "/")
    .replace(".js", "");

  return `/locations/${cleanFile}`;
});
const customRoutes = [
  "/warehousing-distribution",
  "/open-yard-storage-facility",
  "/about-us",
  "/ground-cargo",
  "/sea-freight",
  "/contacts",
  "/offshore-logistics",
  "/ship-spares-clearance",
];
// ALL ROUTES
const routes = [
  ...staticRoutes,
  ...blogRoutes,
  ...industryRoutes,
  ...locationRoutes,
  ...customRoutes,
];

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname,
  });

  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
    });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);

  writeFileSync("./public/sitemap.xml", data.toString());

  console.log("✅ Full sitemap generated successfully");
}

generateSitemap();