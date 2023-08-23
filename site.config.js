const CONFIG = {
  // profile setting (required)
  profile: {
    name: "CAIFSC",
    image: "/logo_basic_color_1080x1080 (1).jpg", 
    role: "Clube de Astronomia do IFSC",
    bio: "",
    email: "clubedeastronomiaifsc@gmail.com",
    linkedin: "",
    github: "andressacl",
    instagram: "",
  },
  projects: [
    {
    name:`Github`,
    href: "https://github.com/andressacl",
    },
  ],
  // blog setting (required)
  blog: {
    title: "caifsc",
    description: "",
  },

  // CONFIG configration (required)
  link: "https://andressacl-blog.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'pt-BR']
  ogImageGenerateURL: "/logo_basic_gray.png", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
