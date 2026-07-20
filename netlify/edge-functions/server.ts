import worker from "../../dist/server/index.js";

export default async (request: Request, context: any) => {
  return worker.fetch(request, Deno.env.toObject(), context);
};

export const config = {
  path: "/*",
  excludedPath: [
    "/assets/*",
    "/*.png",
    "/*.jpg",
    "/*.jpeg",
    "/*.svg",
    "/*.ico",
    "/*.webmanifest",
    "/*.txt",
    "/*.mp3"
  ]
};
