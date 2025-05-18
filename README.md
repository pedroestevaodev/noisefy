# Noisefy - Image-Processing Micro-SaaS

<p style="text-align: center;">
    <a href="https://www.baraodemaua.br">
        <img src="https://res.cloudinary.com/dge3g9rcw/image/upload/v1739232898/github/mto1tierlcwn8pq4fh8r.webp" alt="Logo Centro Universitário Barão de Mauá" />
    </a>
</p>

**Noisefy** is a lightweight micro-SaaS that lets you _denoise, rasterize,_ and _sharpen_ images in seconds.  
Developed as part of an assignment for the **Programming Patterns & Paradigms** course in the **Computer Science** program at **Centro Universitário Barão de Mauá**, under the guidance of professor **Lívia Maria de Oliveira Ciabati**.

## About the Project

Modern web apps need fast, on-the-fly image tweaks. Noisefy provides an API-first workflow:

1. Upload an image (drag-and-drop)
2. Choose the operation
3. Get an optimized image back

## Tech Stack

The project was built using the following technologies and tools:

- [Next.js (App Router)](https://nextjs.org/) - React framework for web applications.
- [React](https://react.dev/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript superset for static typing.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for fast and customizable design.
- [Replicate APIs]() - All the latest models are on Replicate.
- [NextAuth v5 (Auth.js)](https://authjs.dev/) - Authentication for the Web.
- [React Hook Form](https://react-hook-form.com/) (form handling)
- [Zod](https://zod.dev/) (form validation)
- [Prisma ORM](https://www.prisma.io/) (serverless database)
- [Supabase](https://supabase.com/) (auth, storage, PostgreSQL)

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/pedroestevaodev/noisefy.git
cd noisefy
```

### 2. Install dependencies

```bash
$ npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root and configure the following variables:

```bash
DATABASE_URL="tobemodified"
DIRECT_DATABASE_URL="tobemodified"
AUTH_SECRET="tobemodified"
AUTH_URL="http://localhost:3000"
APPLICATION_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="tobemodified"
GOOGLE_CLIENT_SECRET="tobemodified"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="tobemodified"
CLOUDINARY_API_KEY="tobemodified"
CLOUDINARY_API_SECRET="tobemodified"
SMTP_EMAIL="tobemodified"
SMTP_PASSWORD="tobemodified"
STRIPE_PUBLISHABLE_KEY="tobemodified"
STRIPE_SECRET_KEY="tobemodified"
STRIPE_WEBHOOK_SECRET="tobemodified"
NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID="tobemodified"
NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID="tobemodified"
NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID="tobemodified"
NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID="tobemodified"
NEXT_PUBLIC_REPLICATE_API_TOKEN="tobemodified"
REMAINING_RATE_LIMIT="tobemodified"
REMAINING_RESET_HOUR="tobemodified"
```

### 4. Start the development server

```bash
$ npm run dev
```

Open your browser and visit `http://localhost:3000` to see the project in action.

You can start editing the homepage by modifying the `app/page.tsx` file. The browser will automatically update as you make changes to the code.

## Available Commands

| Command               | Description                         |
| --------------------- | ----------------------------------- |
| `dev`                 | Starts the development server       |
| `build`               | Builds the app for production       |
| `start`               | Runs the production build           |
| `lint`                | Runs ESLint for code quality        |
| `prisma:migrate-dev`  | Creates & applies new dev migration |
| `prisma:migrate-prod` | Applies pending prod migrations     |
| `prisma:generate`     | Generates Prisma client             |
| `prisma:reset`        | Deletes all migrations              |
| `postinstall`         | Runs setup script after install     |

## Resources

To learn more about the stack used in this project:

- [Next.js Docs](https://nextjs.org/docs) - Learn more about Next.js features and APIs.
- [Next.js Learn](https://nextjs.org/learn) - Interactive tutorial to learn Next.js.
- [React Docs](https://pt-br.react.dev/learn) - Access the official React guide.
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Learn how to use Tailwind CSS to style your application.
- [Auth.js](https://authjs.dev/) - Access the official Auth.js guide.
- [Supabase Docs](https://supabase.com/docs) - Learn how to get up and running with Supabase through tutorials, APIs and platform resources.

## Deploy

The easiest way to deploy your Next.js application is by using the [Vercel Platform](https://vercel.com/new), created by the developers of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

> Make sure to set the environment variables in Vercel > Settings > Environment Variables.

## License

This project is open source and available under the [MIT License](https://mit-license.org/).  
<br />

---

<br />

**Developed for academic purposes** 🎓
