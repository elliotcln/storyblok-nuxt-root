# Nuxt + shadcn + Storyblok

A modern, fast, and flexible website built with **Nuxt 4**, styled with **shadcn & TailwindCSS**, and powered by **Storyblok** as a headless CMS.

## 🚀 Tech Stack

- **[Nuxt 4](https://nuxt.com/)** — Vue-based framework for SSR & static sites
- **[shadcn](https://www.shadcn-vue.com/)** — A set of beautifully designed components that you can customize, extend, and build on
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS classes framework
- **[Storyblok](https://www.storyblok.com/)** — Headless CMS for structured content and visual editing

## 🛠️ Setup

```bash
# 1. Clone the repo
git clone https://github.com/elliotcln/storyblok-nuxt-root.git
cd yourproject

# 2. Install dependencies
npm install

# 3. Configure your project
cp nuxt.config.js
Add your Storyblok token & GA / GTM keys

# 4. Run the dev server
npm run dev
```

Visit [https://nuxt-storyblok-starter.local:3000](https://nuxt-storyblok-starter.local:3000) to see your app live.

## 📂 Project Structure

```
.
├── app/
├────assets/        # CSS files
├────components/    # Reusable Vue components
├────pages/         # Nuxt pages (auto-routed)
├────storyblok/     # Storyblok content blocks & helpers
├── public/         # Static assets
└── nuxt.config.ts  # Nuxt configuration
```

## 🧩 Integrations

- Dynamic content fetched from Storyblok API
- Styled components via shadcn
- Auto-imported pages and components from Nuxt

## 🧑‍💻 Development

- Run `npm run lint` to check for code style issues
- Run `npm run build` to generate a production build
