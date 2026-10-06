/* Stamps every local css/ and js/ file linked from index.html with ?v=<content hash>.
   GitHub Pages lets browsers keep files for 10 minutes and the file names never change,
   so without this a browser can keep running an old app.js or site.css after a deploy.
   The hash changes only when a file's content does.

   Run: npm run stamp          (rewrite index.html)
        npm run stamp -- --check   (exit 1 if any stamp is stale, change nothing) */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = path.join(__dirname, "..");
const page = path.join(root, "index.html");
const checkOnly = process.argv.includes("--check");

/* Ignore line endings so Windows (CRLF) and Linux (LF) checkouts produce the same hash. */
function hashOf(file) {
  const text = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  return crypto.createHash("sha1").update(text).digest("hex").slice(0, 8);
}

const html = fs.readFileSync(page, "utf8");
const next = html.replace(/(href|src)="((?:css|js)\/[^"?]+)(?:\?v=[^"]*)?"/g, (match, attr, rel) => {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) return match;
  return `${attr}="${rel}?v=${hashOf(file)}"`;
});

if (next === html) {
  console.log("Asset versions are current.");
} else if (checkOnly) {
  console.error("Asset versions are stale. Run: npm run stamp");
  process.exit(1);
} else {
  fs.writeFileSync(page, next);
  console.log("Updated asset versions in index.html.");
}
