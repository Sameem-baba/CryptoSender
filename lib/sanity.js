import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "exm7xgf0",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skaj9FuRrROz97rIo0p5VSsW0GjR6pDYpjHNrQ7RG7BL3HZeAxUni3fs5F384ALHTZ1e8sQkEnARKOMs5kgFFFBB7yQHpIRz8SwoFq09WyjNzW7cSTEfX9jRTAZklWWHcP2eJXBtz0C8KfI08oZ6Bm9hoOQAYsfxdcfImaJPSREKUNsk4IHm",
  useCdn: false,
});
