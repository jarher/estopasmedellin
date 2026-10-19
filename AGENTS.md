# AGENTS.md

This file provides guidance to any AI agent when working with code in this repository.

## Project Overview

This repository contains a website for Estopas Medellín, a Colombian industrial supplier of cleaning textiles (estopa and trapo) founded in 1982. The site showcases their product lines, technical specifications, industrial applications, and company history.

## Project Structure

- `index.html` - page structure and Tailwind utility classes
- `src/input.css` - Tailwind CSS entry point, theme tokens, and custom styles
- `src/main.js` - vanilla JavaScript functionality, including the mobile menu
- `dist/` - generated production assets, including minified CSS and JS bundles
- `assets/` - logos, product images, and their responsive WebP variants
- `screenshots/` - project screenshots for documentation and review
- `DESIGN.md` - design system specification
- `package.json` - Tailwind, esbuild, and build scripts
- `.gitignore` - ignores local dependencies and generated output

## Technology Stack

- HTML5
- CSS, including locally compiled Tailwind CSS 4 and custom BEM-style component classes
- JavaScript (vanilla)
- Tailwind CSS 4 (`tailwindcss` and `@tailwindcss/cli`)
- esbuild for bundling and minifying the JavaScript entry point for production builds
- Google Fonts: Newsreader (headlines) and Work Sans (body), served locally from `assets/fonts/`
- **Material Symbols Outlined icons** (for hamburger menu and other icons), served locally from `assets/fonts/`

## Development Workflow

Install the project dependencies with `npm install`. Tailwind scans the classes in
`index.html` and compiles `src/input.css` into `styles.css`. The color and font
theme is defined with Tailwind CSS 4's `@theme` directive in `src/input.css`.

- Run `npm run build` to generate the production stylesheet and minified JS bundle.
- Run `npm run build:css` to build the stylesheet directly.
- Run `npm run buildjs` to bundle and minify the JavaScript entry point.
- Run `npm run watch:css` during development to rebuild when the HTML or CSS
  source changes.
- Edit `src/input.css` rather than the generated `styles.css`; rebuild after
  changing the source.
- Serve the project root with a static web server to test the site in a browser.

## Design System Reference

Consult `DESIGN.md` for:
- Color palette specifications
- Typography guidelines (Newsreader for headlines, Work Sans for body)
- Layout and spacing rules
- Component specifications (buttons, cards, inputs, etc.)

### Responsive Design

- Desktop: 12-column grid (max-width: 1200px per design system)
- Mobile: Flexible layouts with mobile-first approach
- The mobile-specific version includes a full-height fixed drawer menu for viewport sizes below desktop.

## Recent implementation notes

- The mobile navigation has been refactored to use a fixed overlay that fills the full viewport height while preserving the sticky header behavior.
- The drawer is hidden by default with opacity/visibility transitions and becomes visible only when the toggle button is activated.
- While the menu is open, the page body locks its scroll to avoid the underlying content moving behind the overlay.
- The panel keeps a compact top spacing to improve readability without leaving a large empty gap above the first menu item.
- The build flow remains `npm run watch:css` for development and `npm run build` for production verification.

## File Naming Conventions

- HTML file is named `index.html`
- Tailwind source CSS is `src/input.css`; compiled CSS is `styles.css`
- Design documentation is in `DESIGN.md`
- JavaScript functionality is in `main.js`

## Styling Approach

- Use semantic HTML, Tailwind CSS 4 utilities, and the existing custom CSS
  patterns. Keep reusable custom component classes in `src/input.css`.
- **Custom component CSS follows BEM (Block Element Modifier) notation** for
  better organization and maintainability.
- For icons, use Material Symbols Outlined from Google Fonts (already linked in index.html)