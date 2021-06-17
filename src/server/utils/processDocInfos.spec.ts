import { PostBuildData } from "../../shared/interfaces";
import { processDocInfos } from "./processDocInfos";

describe("processDocInfos", () => {
  const routesPaths: string[] = [
    "/",
    "/introduction",
    "/pluralize",
    "/404.html",
  ];

  const buildData: PostBuildData = {
    routesPaths,
    outDir: "/build",
    baseUrl: "/",
  };

  test("processDocInfos works for rootDocs", () => {
    expect(processDocInfos(buildData)).toMatchSnapshot();
  });
});
