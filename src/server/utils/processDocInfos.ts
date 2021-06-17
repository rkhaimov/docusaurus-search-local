import path from "path";
import { DocInfoWithFilePath, PostBuildData } from "../../shared/interfaces";

export function processDocInfos({
  routesPaths,
  outDir,
  baseUrl,
}: PostBuildData) {
  return routesPaths.reduce((accumulated, url) => {
    const route = url.substr(baseUrl.length);

    if (route === "404.html") {
      return accumulated;
    }

    accumulated.push({
      filePath: path.join(outDir, route, "index.html"),
      url,
      type: "docs",
    });

    return accumulated;
  }, [] as DocInfoWithFilePath[]);
}
