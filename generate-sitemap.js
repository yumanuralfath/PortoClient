import { SitemapStream, streamToPromise } from "sitemap"
import { createGzip } from "zlib"
import fs from "fs"

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://www.yumana.my.id/",
  });

  // Add URLs to your sitemap
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });

  sitemap.end();

  const sitemapXML = (await streamToPromise(sitemap)).toString();
  const gzippedSitemap = createGzip();

  fs.writeFileSync("./public/sitemap.xml.gz", sitemapXML);
}

generateSitemap();
