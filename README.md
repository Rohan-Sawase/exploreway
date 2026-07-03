# ExploreWay Travels

A complete, responsive travel agency business website built with React, Vite, Tailwind CSS,
React Router DOM, EmailJS, and WhatsApp click-to-chat links. This is a frontend-only project —
no backend, no database, no admin panel.

## Features

- Home, Packages, Package Details, Services, Gallery, About, Contact, and 404 pages
- Dynamic package details route (`/packages/:id`)
- Package search and category filtering
- Gallery filtering by category
- Enquiry form on the package details page and the contact page, both wired to EmailJS
- WhatsApp click-to-chat buttons with pre-filled messages across the site
- Call and email buttons using `tel:` and `mailto:` links
- Sticky responsive navbar with a mobile hamburger menu
- Floating WhatsApp button
- Fully responsive design (mobile, tablet, laptop, desktop)
- Vercel-ready deployment configuration

## Tech Stack

- React.js (Vite)
- Tailwind CSS
- React Router DOM
- EmailJS (`emailjs-com`)
- Lucide React icons
- Static JavaScript data files (no backend/database)

## Project Structure

```
src/
  assets/
  components/
    Navbar.jsx
    Footer.jsx
    Hero.jsx
    PackageCard.jsx
    ServiceCard.jsx
    TestimonialCard.jsx
    SectionTitle.jsx
    WhatsAppButton.jsx
    ScrollToTop.jsx
    CTASection.jsx
  pages/
    Home.jsx
    Packages.jsx
    PackageDetails.jsx
    Services.jsx
    Gallery.jsx
    About.jsx
    Contact.jsx
    NotFound.jsx
  data/
    packages.js
    services.js
    gallery.js
    testimonials.js
  App.jsx
  main.jsx
  index.css
```

## Installation & Local Development

```bash
npm install
npm run dev
```

The site will run at `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

## Setting Up EmailJS

The enquiry forms on the **Package Details** page and the **Contact** page use EmailJS.

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an **Email Service** (e.g. Gmail) and note the **Service ID**.
3. Create an **Email Template** with fields like `name`, `email`, `phone`, `destination`,
   `travelDate`, `people`, `message`, and `packageName`, and note the **Template ID**.
4. Copy your **Public Key** from the EmailJS dashboard's Account section.
5. Open `src/pages/PackageDetails.jsx` and `src/pages/Contact.jsx`, then replace:

```js
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";
```

with your real values from EmailJS.

## Changing the WhatsApp Number

Open `src/components/WhatsAppButton.jsx` and update:

```js
export const WHATSAPP_NUMBER = "919604878587";
```

Use the full number with country code and no `+`, spaces, or dashes.

Also update the `tel:` and `mailto:` links in `src/components/Footer.jsx` and
`src/pages/Contact.jsx` if you change the business phone number or email address.

## Adding or Editing Packages

Open `src/data/packages.js` and add a new object to the array, following the existing structure
(`id`, `title`, `location`, `category`, `duration`, `price`, `rating`, `image`, `description`,
`overview`, `itinerary`, `inclusions`, `exclusions`, `hotelInfo`, `bestFor`, `featured`). Make
sure every `id` is unique — it is used in the `/packages/:id` route.

Gallery images live in `src/data/gallery.js`, services in `src/data/services.js`, and
testimonials in `src/data/testimonials.js`. Each follows the same "add an object to the array"
pattern.

## Deploying on Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. The included `vercel.json` handles client-side routing rewrites so all routes
   (like `/packages/3`) work correctly on refresh.

You can also deploy from the CLI:

```bash
npm install -g vercel
vercel
```

## Common Errors and Fixes

- **Blank page after `npm run dev`**: make sure `npm install` completed without errors and that
  you're using Node.js 18 or newer.
- **Tailwind styles not applying**: confirm `tailwind.config.js` `content` paths match your file
  locations and that `index.css` includes the three `@tailwind` directives.
- **EmailJS "user ID is invalid"**: you're still using the placeholder credentials — follow the
  EmailJS setup steps above.
- **WhatsApp button not opening chat**: double-check `WHATSAPP_NUMBER` includes the country code
  with no leading `+`.
- **404 on page refresh after deploying**: make sure `vercel.json` is present in the project root
  so Vercel rewrites all routes to `index.html`.
