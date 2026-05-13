import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { globSync } from "glob";

// IMPORT BLOGS
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
  return (
    "/industries/" +
    file
      .split("/")
      .pop()
      .replace(".js", "")
  );
});

// LOCATION ROUTES
const locationRoutes = locationFiles.map((file) => {
  return (
    "/locations/" +
    file
      .split("/")
      .pop()
      .replace(".js", "")
  );
});

// ALL ROUTES
const routes = [
  ...staticRoutes,
  ...blogRoutes,
  ...industryRoutes,
  ...locationRoutes,
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