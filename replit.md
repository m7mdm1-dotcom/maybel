# MAYBEL Marketing Website

## Overview
MAYBEL is a marketing website for a managed all-in-one CRM and automation platform. The site showcases the platform's features, pricing, solutions, integrations, and includes a working contact form.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS v4 + shadcn/ui components
- **Backend**: Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: wouter (client-side)

## Pages
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, features, "done-for-you" process, dashboard preview |
| `/platform` | Platform | Detailed feature grid (CRM, Automation, Messaging, etc.) |
| `/solutions` | Solutions | Industry use cases and why businesses choose MAYBEL |
| `/pricing` | Pricing | 4 pricing tiers (Launch, Growth, Pro, Scale) |
| `/integrations` | Integrations | API-ready integration badges |
| `/about` | About | Company philosophy, mission, problem/solution |
| `/blog` | Blog | Article previews (static) |
| `/contact` | Contact | Working contact form with database persistence |
| `/privacy` | Privacy | Privacy policy |
| `/terms` | Terms | Terms of service |

## Database Schema
- `contact_submissions`: Stores contact form entries (firstName, lastName, company, email, message, createdAt)

## API Endpoints
- `POST /api/contact` — Submit a contact form (validated with Zod)

## Key Components
- `Navbar` — Fixed top navigation with all page links
- `Footer` — Site footer with links and legal summaries
- `GlobalCTA` — Reusable call-to-action block used across pages
- `ScrollToTop` — Ensures pages start at top on navigation

## Design System
- Font: Plus Jakarta Sans
- Primary color: Blue (217 91% 60%)
- Light theme with white/slate backgrounds
- Glass-panel effect on navbar
- Gradient text effect for hero headings
