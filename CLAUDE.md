# Website Structure Guide

## Overview
The website is now modular and organized into sections, CSS modules, and JavaScript modules.

## File Structure

### HTML Sections (`sections/`)
- `hero.html` - Header with photo and contact info
- `personal-statement.html` - Personal statement section
- `skills.html`, `experience.html`, `education.html`, `projects.html`, `publications.html`, `achievements.html`, `hobbies.html` - Content sections
- `modal.html`, `footer.html` - UI components

### CSS Modules (`css/`)
`variables.css` (theme colors) → `base.css` (typography) → `sections.css` (general sections) → `hero.css`, `skills.css`, `timeline.css`, `education.css`, `projects.css`, `publications.css`, `achievements.css`, `hobbies.css`, `modal.css`, `animations.css` → `responsive.css`

### JavaScript Modules (`js/`)
- `main-new.js` - Main entry point, loads sections dynamically
- `animations.js` - Scroll animations
- `modal.js` - Modal functionality
- `experience-data.js`, `project-data.js` - Data objects
