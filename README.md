# Craigslist Redesign — Human-Computer Interaction (HCI) Course Project

A modern, accessible, and trust-focused redesign of **Craigslist**, built with **Vue 3**, **TypeScript**, and **Vite** for **Human-Computer Interaction (HCI)** course.

---

## Project Overview & Scope

The project focuses on the main browsing and inquiry experience for a buyer. The final prototype demonstrates the following scenario: **A user opens Craigslist, navigates visually to a specific category, browses a grid of items, reviews a specific item's details and the seller's trust indicators, and successfully initiates a message to the seller.**

### Key Scope & Features
- **Homepage and Navigation:** A modernized landing page replacing the legacy text-link directory, featuring clear category cards, a search bar, and location context.
- **Search and Browsing Interface:** A grid or list-based results page featuring item thumbnail cards, pricing, and essential filtering or sorting controls (e.g., price, distance, condition, verified status).
- **Item Detail View:** A dedicated listing page containing an interactive image gallery, structured item description, location map, and prominent safety warnings (e.g., *"Never pay in advance"*).
- **Seller Trust Indicators:** Visual UI elements integrated into the listing to establish seller credibility, such as account age, verification badges, or typical response times.
- **Inquiry System UI:** A front-end modal or dedicated messaging interface that allows the buyer to draft and initiate contact with the seller without leaving the application context.
- **Prototype Fidelity:** A high-fidelity, interactive click-through prototype demonstrating the buyer's end-to-end journey.

> **Out of Scope:** Features such as backend database integration, payment processing, or the full seller ad-posting flow are outside the required scope. The project is evaluated primarily as a redesign of the interfaces by following user-centered design principles in HCI.

---

## HCI Research & Design Artifacts

### User Persona: Saul Goodman
- **Profile:** 38 years old | Homeowner | Accessibility-focused user | Tablet & Desktop user
- **Quote:** *"I need to easily find and contact a trustworthy local repairman without getting lost in a maze of tiny text and anonymous, sketchy listings."*
- **Goals:**
  - Quickly find reliable local plumbing services
  - Verify contractor legitimacy before contact
  - Navigate comfortably without strain or errors
- **Frustrations:**
  - Dense, tiny text requiring zoom
  - No trust signals for providers
  - Overwhelming text-based categories

---

### Primary User Flow
1. **Open Craigslist:** User lands on the redesigned platform.
2. **Select Local Services:** Inside the Home Page (`/`), the user clicks on the **Local Services** category card.
3. **Filter by Verified Providers:** On the Services page (`/services`), the user clicks the **"Verified Providers Only"** filter pill.
4. **Browse Filtered Services:** Unverified accounts are filtered out; the user browses trustworthy local service cards.
5. **Select a Service:** User clicks on a specific service listing they want to inspect.
6. **Review Service Details:** On the Provider Profile page (`/provider/:id`), the user reviews credentials, licenses, specializations, and pricing.
7. **Initiate Contact:** User clicks **"Message Provider Now"** to securely message the verified account.
8. **Compose Request:** In the Messaging view (`/messaging`), the user writes out their service request.
9. **Send Message:** User clicks **"Send Message"** to submit their inquiry.
10. **Track Inquiry Status:** The user's **"Inquiries"** tab (`/services` / `/dashboard`) updates automatically to track the provider's response.

---

## Application Routes & Pages

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `HomePage.vue` | Location-based search hero and categorized visual directory |
| `/services` | `ServicesPage.vue` | Local services directory with **"Verified Providers Only"** filter & **My Inquiries** tracker |
| `/provider/:id?` | `ProviderProfilePage.vue` | Detailed contractor profile with verification credentials, pricing, and booking CTA |
| `/messaging` | `MessagingPage.vue` | Built-in secure chat interface between homeowners and service providers |
| `/dashboard` | `DashboardPage.vue` | User dashboard for managing active listings, saved items, and inquiries |
| `/new-listing` | `ListingCreatePage.vue` | Guided multi-field form for posting a new advertisement or service listing |
| `/login` | `LoginPage.vue` | Authentication screen for signing in or registering an account |

---

## Getting Started
For the *Team*, follow these steps to set up and run the project on your local machine.

### 1. Prerequisites

Make sure you have the following installed:
- **[Node.js](https://nodejs.org/)** (v18+ or v20+ LTS recommended)
- **npm** (comes bundled with Node.js)
- **Git**

To verify your installation, run:
```bash
node -v
npm -v
```

### 2. Clone the Repository

Open your terminal (PowerShell, Command Prompt, or Git Bash) and clone the project repository:
```bash
git clone <YOUR_REPOSITORY_URL>
cd craigslist
```

### 3. Install Dependencies

Install all required Vue, Vue Router, TypeScript, and Vite packages:
```bash
npm install
```

### 4. Start the Development Server

Run the local Vite development server with hot-reload enabled:
```bash
npm run dev
```

Once started, Vite will display a local URL in your terminal (typically **`http://localhost:5173`**). Open that link in your browser to view and test the app.

---

## Available Scripts

In the project root directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with Hot Module Replacement (HMR). |
| `npm run build` | Runs TypeScript type-checking (`vue-tsc -b`) and builds the production bundle into `dist/`. |
| `npm run preview` | Locally previews the production build generated in `dist/`. |

---

## Project Structure

```text
craigslist/
├── docs/                           # HCI course diagrams (User Persona & User Flow)
├── public/                         # Static public assets (favicon, icons)
├── references/                     # Initial HTML/CSS wireframes and design references
├── src/
│   ├── assets/                     # Images and SVG assets
│   ├── components/                 # Reusable UI components
│   │   ├── AppFooter.vue           # Global footer
│   │   ├── AppNavbar.vue           # Global navigation header
│   │   ├── BaseButton.vue          # Standardized accessible button component
│   │   └── ListingCard.vue         # Service/classified listing card with trust badges
│   ├── data/
│   │   └── mockData.ts             # Mock data for categories, providers, messages, & inquiries
│   ├── pages/                      # Main route views
│   │   ├── HomePage.vue            # Step 1-2: Home & category selection
│   │   ├── ServicesPage.vue        # Step 3-5 & 10: Verified filter, browsing, & inquiries tab
│   │   ├── ProviderProfilePage.vue # Step 6-7: Provider details & "Message Provider Now"
│   │   ├── MessagingPage.vue       # Step 8-9: Composing and sending requests
│   │   ├── DashboardPage.vue       # User overview & listing management
│   │   ├── ListingCreatePage.vue   # Create new ad listing flow
│   │   └── LoginPage.vue           # Sign in / Sign up view
│   ├── router/
│   │   └── index.ts                # Vue Router configuration
│   ├── App.vue                     # Root Vue component
│   ├── main.ts                     # Application entry point
│   └── style.css                   # Global styles and design tokens
├── index.html                      # HTML entry point
├── package.json                    # Scripts and dependencies
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite bundler configuration
```

---

## Recommended IDE Setup

- **[VS Code](https://code.visualstudio.com/)** + **[Vue (Official) / Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)** extension for `.vue` Single-File Component (SFC) syntax highlighting and TypeScript intellisense.
