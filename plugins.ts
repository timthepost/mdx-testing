
import basePath from "lume/plugins/base_path.ts";
import mdx from "lume/plugins/mdx.ts";
import prism from "lume/plugins/prism.ts";
import "lume/types.ts";

/** Configure the site */
export default function () {
  return (site: Lume.Site) => {
    site
      .use(basePath())
      .use(mdx({ extensions: [".mdx"] }))
      .use(prism({
        theme: [
          {
            name: "tomorrow",
            cssFile: "/prism.css",
          }
        ]
      }))
      .add("_includes/css", "css")
      .add([".css"])
      .add("uploads");
  };
}
