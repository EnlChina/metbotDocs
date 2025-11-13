# 🧪 how to use

---

# 🚀 One-Click Deploy to Cloudflare Pages

You can easily deploy this project to [Cloudflare Pages](https://pages.cloudflare.com/) and get free global CDN acceleration!

Click the link below, and GitHub will automatically create a repository based on this project:

[![Use this template](https://img.shields.io/badge/Create_from_Template-3b5998?style=for-the-badge&logo=github)](https://github.com/new?template_name=rspress-template&template_owner=PBnicad)

Then follow the steps below to deploy.

1. Go to the [Cloudflare Pages Dashboard](https://dash.cloudflare.com/?to=/:account/pages)
2. Click **"Create a project"** → **"Connect to Git"**
3. Select your newly forked repository
4. Fill in the build settings:

> 💡 **Deployment settings:**
>
> - **Build command**: `pnpm install && pnpm run build`
> - **Build output directory**: `/doc_build`

5. Click **Save and Deploy**

After a few minutes, you'll have an online site like `https://your-project.pages.dev`!
