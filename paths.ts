import path from "path"
import { fileURLToPath } from "url"
import platforms from "platform-folders"

const gulpfilePath = fileURLToPath(import.meta.url)

const paths = {
  assets: "assets",
  buildDir: "build/",
  confPrivExample: "src/conf.priv.example",
  dirname: path.dirname(gulpfilePath),
  favicons: "assets/favicons",
  faviconsManifest: "favicons.json",
  gulpfile: path.basename(gulpfilePath),
  installDir: platforms.getConfigHome(),
  srcDir: "src",
  output: "surfingkeys",
  pkgJson: "package.json",
  readme: "README.tmpl.md",
  readmeOut: "README.md",
  screenshots: "assets/screenshots",

  sources: {
    api: "api",
    actions: "actions",
    conf: "conf",
    confPriv: "conf.priv",
    entrypoint: "index",
    keys: "keys",
    searchEngines: "search-engines",
    util: "util",
  },
}

export default paths

export const getPath = (...f) => path.join(paths.dirname, ...f)
export const getSrcPath = (...s) => getPath(paths.srcDir, ...s)
