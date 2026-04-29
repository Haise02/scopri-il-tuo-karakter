# Karakter Landing Page - Elementor Ready Split Files

## Overview
The original Karakter landing page HTML files (Desktop v6 and Mobile v6) have been split into separate CSS, JavaScript, and HTML files optimized for Elementor integration. This approach reduces the size of HTML widgets to avoid WAF 403 errors.

## File Structure

### Desktop Version
- **desktop-style.css** (685 lines, 26KB)
  - All CSS rules without `<style>` tags
  - Includes @font-face for Halfre font
  - CSS variables for color scheme
  - Responsive design with media queries

- **desktop-script.js** (386 lines, 35KB)
  - All inline JavaScript without `<script>` tags
  - Complete quiz engine with 24 questions
  - 12 traits (TRAITS array)
  - 24 question scoring mappings (SCORING array)
  - All functions: calcResults, showSection, startQuiz, renderQ, selectOpt, quizNext, quizBack, showFormSection, mountHubSpotForm
  - Keyboard handler for keyboard navigation
  - Navigation scroll behavior
  - Scroll reveal animations
  - Typewriter effect
  - Smooth scrolling
  - FAQ accordion functionality
  - Falling objects animation
  - CountUp animation
  - Command palette cycling

- **desktop-elementor.html** (441 lines, 18KB)
  - Google Fonts preconnect and stylesheet links
  - External CSS reference to desktop-style.css
  - HubSpot forms embed script
  - Complete HTML markup from `<div id="karakter-app">` to closing `</div>`
  - External JS reference to desktop-script.js at the end
  - All interactive sections properly structured

### Mobile Version
- **mobile-style.css** (730 lines, 31KB)
  - Identical base CSS to desktop
  - Additional mobile media queries (extra 45 lines)
  - Optimized for responsive design

- **mobile-script.js** (386 lines, 35KB)
  - Identical JavaScript to desktop
  - No platform-specific modifications needed

- **mobile-elementor.html** (441 lines, 18KB)
  - Same structure as desktop version
  - References mobile-style.css instead of desktop-style.css
  - References mobile-script.js instead of desktop-script.js

## Implementation in Elementor

### For Desktop Version:
1. Create an HTML widget in Elementor
2. Paste the contents of `desktop-elementor.html`
3. The widget will automatically load:
   - desktop-style.css from GitHub
   - desktop-script.js from GitHub
   - Google Fonts
   - HubSpot forms embed script

### For Mobile Version:
1. Create an HTML widget in Elementor
2. Paste the contents of `mobile-elementor.html`
3. The widget will automatically load mobile-specific CSS and JS

## Key Features Preserved

### Quiz Engine
- 24 Italian-language questions across 3 blocks (Vita quotidiana, Relazioni e sfide, Valori e scelte)
- 12 unique traits: Bussola, Fuoco, Mappa, Filo, Radice, Onda, Scudo, Palco, Ponte, Ritmo, Lente, Vento
- Scoring algorithm with tiebreaker logic (star questions worth 2 points)
- Full calculation and results display

### Interactive Elements
- Progress bar with real-time updates
- Question card transitions (slide animations)
- Multiple choice option selection with visual feedback
- Back/forward navigation with conditional display
- Results screen with trait breakdown
- HubSpot form integration for lead capture
- FAQ accordion with category filtering
- Navigation bar with sticky scroll behavior

### Animations
- Scroll reveal effects (fade up with staggered delays)
- Typewriter effect in hero
- Floating animations for cards
- Grid scroll background
- Blur text reveal
- All animations preserved from original

### Design System
- Color variables: amber, black, white, grays, teal, petrol, green
- Typography: Halfre (headline), DM Sans (body), DM Mono (code), Old Standard TT (display)
- Consistent spacing and rhythm
- Responsive grid layouts

## File Sizes Comparison

| Component | Desktop v6 Original | Split Files | Size Reduction |
|-----------|-------------------|-------------|-----------------|
| HTML only | ~1,600 lines | 441 lines | 72% smaller |
| With CSS inline | n/a | 26KB separately | Modular |
| With JS inline | n/a | 35KB separately | Cacheable |

## GitHub URLs for External Resources

All resources reference their canonical GitHub locations:
- Halfre font: `https://raw.githubusercontent.com/Haise02/scopri-il-tuo-karakter/main/halfre.ttf`
- Desktop CSS: `https://raw.githubusercontent.com/Haise02/scopri-il-tuo-karakter/main/elementor-ready/desktop-style.css`
- Desktop JS: `https://raw.githubusercontent.com/Haise02/scopri-il-tuo-karakter/main/elementor-ready/desktop-script.js`
- Mobile CSS: `https://raw.githubusercontent.com/Haise02/scopri-il-tuo-karakter/main/elementor-ready/mobile-style.css`
- Mobile JS: `https://raw.githubusercontent.com/Haise02/scopri-il-tuo-karakter/main/elementor-ready/mobile-script.js`

## Notes

- All image `src` attributes maintain their full GitHub raw URLs
- CSS variables are properly scoped within `#karakter-app` selector
- No logic has been modified, only structure separated
- Files are production-ready
- WAF-friendly due to external resource loading
