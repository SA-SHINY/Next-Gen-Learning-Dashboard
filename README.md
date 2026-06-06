# Learning Dashboard
    A modern learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack
    Next.js 16 (App Router)
    TypeScript
    Supabase
    Tailwind CSS
    Framer Motion
    Lucide React

## Architecture
    The application uses the Next.js App Router and React Server Components for data fetching.

### Server Components
    Course data is fetched from Supabase inside a Server Component (`page.tsx`) through a dedicated data-access layer (`getCourses.ts`). This allows data to be loaded securely on the server before rendering.

### Client Components   
    Interactive UI elements such as:
        Sidebar
        Mobile Navigation
        Course Cards
        Activity Chart
        Progress Bars
are implemented as Client Components because they rely on Framer Motion animations and client-side interactivity.

## Database
    The application uses a Supabase PostgreSQL database with a `courses` table.

Schema:
    * `id` (uuid, primary key)
    * `title` (text)
    * `progress` (integer)
    * `icon_name` (text)
    * `created_at` (timestamp)

Course data is dynamically fetched and rendered as Bento-style dashboard cards.

## Loading & Error Handling

### Loading States
    A `loading.tsx` file provides animated skeleton placeholders while course data is being fetched.

### Error Handling
    An `error.tsx` boundary displays a user-friendly error screen and allows retrying failed requests.

## Animations
    Framer Motion is used throughout the application:
        Staggered page-load animations
        Animated progress bars
        Hover elevation effects
        Sidebar navigation layout animations
        Activity chart animations
Spring-based transitions are used to create a natural user experience.

## Responsive Design

### Desktop (>1024px)
        Full Bento Grid layout
        Sidebar visible

### Tablet (768px–1024px)
        Sidebar collapses to icons
        Two-column Bento Grid

### Mobile (<768px)
        Mobile navigation
        Single-column layout

## Challenges Faced
    Configuring Supabase environment variables correctly within Next.js.
    Implementing dynamic icon rendering from database values.
    Creating reusable Framer Motion animation variants for staggered page transitions.
    Balancing responsiveness while maintaining the Bento Grid layout across devices.

## Running Locally

Install dependencies:

```bash
npm install
```

Create a `.env.local` file using the values from `.env.local.example`.

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
# learning-dashboard
A modern learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.
