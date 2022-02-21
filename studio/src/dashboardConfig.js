export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6214084621426c90fa6d1201",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4yu8qx54",
                  apiId: "10ee7bd0-0624-47d8-a7b2-34b75359804e",
                },
                {
                  buildHookId: "621408461f367b97474acbb3",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ajykzab6",
                  apiId: "edcc45fb-d143-4c97-84b7-5873dcbf75d8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/JeffBaucom/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ajykzab6.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
