const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Andressa",
    image: "", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Física Computacional",
    bio: "",
    email: "andressacolaco@usp.br",
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
    title: "andressacl",
    description: "Blog voltado a mini-projetos feitos na graduação.",
  },

  // CONFIG configration (required)
  link: "https://blog-andressacl.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'pt-BR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.'5479f238c3f2403da063f212a0a2da54',
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
    enable: false,
    config: {
      repo: "andressacl/blog",
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
