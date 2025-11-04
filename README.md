# Nuxt + Reka UI + Storyblok

A modern, fast, and flexible website built with **Nuxt 3**, styled with **Reka UI**, and powered by **Storyblok** as a headless CMS.

## 🚀 Tech Stack

- **[Nuxt 3](https://nuxt.com/)** — Vue-based framework for SSR & static sites
- **[Reka UI](https://reka-ui.com/)** — Lightweight, accessible, and modern UI components
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS classes framework
- **[Storyblok](https://www.storyblok.com/)** — Headless CMS for structured content and visual editing

## 🛠️ Setup

```bash
# 1. Clone the repo
git clone https://github.com/elliotcln/storyblok-nuxt-root.git
cd yourproject

# 2. Install dependencies
npm install

# 3. Add your Storyblok API token
cp .env.example .env
# Then edit .env with your Storyblok access token

# 4. Run the dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app live.

## 📂 Project Structure

```
.
├── components/     # Reusable Vue components
├── pages/          # Nuxt pages (auto-routed)
├── storyblok/      # Storyblok content blocks & helpers
├── reka/           # Custom Reka UI setup/theme
├── public/         # Static assets
└── nuxt.config.ts  # Nuxt configuration
```

## 🧩 Integrations

- Dynamic content fetched from Storyblok API
- Styled components via Reka UI
- Auto-imported pages and components from Nuxt

## 🧑‍💻 Development

- Run `npm run lint` to check for code style issues
- Run `npm run build` to generate a production build

## 📄 License

This project is licensed under the [MIT License](LICENSE).
