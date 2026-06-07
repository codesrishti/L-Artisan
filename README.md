# L'Artisan | Premium Culinary House

L'Artisan is a premium, fully responsive React-based web application representing a luxury culinary dining experience. It features high-fidelity design aesthetics, smooth micro-animations, client-side routing, and interactive state management (including a functional reservations engine and shopping cart).

---

## 🍽️ Website Flow & Navigation

The application uses dynamic client-side routing managed by `react-router-dom`. Visitors can seamlessly navigate the following sections:

1. **Home (`/`)**: 
   - Parallax Hero Banner with deep scrim overlays.
   - Interactive value propositions ("Why Choose Us") with micro-animations.
   - Teasers for signature dishes, customer testimonials, and an ambience gallery.
   - Call-to-actions (CTAs) directing to Menu and Reservations.
2. **About Us (`/about`)**: 
   - A timeline of L'Artisan's history since 1994.
   - Core culinary philosophies and accolades.
   - Profile cards of master chefs leading the kitchen.
3. **Menu (`/menu`)**:
   - Filterable menu tabs (Starters, Mains, Desserts, Beverages).
   - "Add to Cart" hooks on all signature dishes to build order selections.
4. **Gallery (`/gallery`)**:
   - Categorized image grids (All, Food, Ambience, Kitchen).
   - Dynamic lightbox popup overlay for immersive image inspection (supports keyboard dismissal and backdrop close).
5. **Events (`/events`)**:
   - Curated package listings (Private Dining, Celebrations, Corporate events).
   - Inquiry trigger points for reservation coordinates.
6. **Blog (`/blog`)**:
   - Searchable culinary articles, popular posts sidebar, and category filters.
7. **Contact Us (`/contact`)**:
   - Dynamic contact inquiry form.
   - Operating hours, bento information grid, and interactive map interface.
8. **Reservations (`/reservations`)**:
   - Step-by-step reservation form with real-time input validation.
   - Inputs for Guest Count, Date, Time, Seating Preferences, and Special Notes.
   - Dynamic reservation success summary screen upon confirmation.

---

## 🛒 Key Interactive Features

- **Shopping Cart Drawer**: Access it from the navigation bar header. It dynamically lists selected items, manages item counts (add, remove, increment, decrement), calculates the subtotal, and provides a simulated checkout checkout experience.
- **Responsive Navigation**: Sticky top navigation bar that automatically shifts from transparent to a frosted-glass solid background on scroll. Includes a slide-out mobile drawer menu.
- **Scroll Restoration**: Automatically scrolls pages back to the top whenever a route changes.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/) (fast HMR)
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6)
- **Styling & Layout**: Vanilla CSS rules coupled with utility classes from Tailwind CSS (CDN-based for fast loading).
- **Typography & Icons**: Playfair Display (headings) & Plus Jakarta Sans (body) via Google Fonts, and Google Material Symbols for clean vector icons.

---

## 🚀 Local Installation & Setup

1. **Clone or Navigate to the Directory**:
   ```bash
   cd L-Artisan
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser to the local URL (usually `http://localhost:5173`).

---
