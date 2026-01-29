# Dalat Trip Timeline Application

## Documentation
- [README](./docs/README.md) - Project overview and setup guide
- [ROADMAP](./docs/ROADMAP.md) - Feature development roadmap (5 phases)
- [ARCHITECTURE](./docs/ARCHITECTURE.md) - Technical architecture and data models
- [CONTRIBUTING](./docs/CONTRIBUTING.md) - Contribution guidelines

## Overview
A Vietnamese trip planning timeline web application for "Team Vinh 2026" Dalat trip. Built as a single-page HTML application with Firebase backend.

## File Structure
- `dalat.html` - Main application file (single HTML file with embedded CSS and JavaScript)

## Technology Stack
- **Frontend**: HTML5, Tailwind CSS (CDN), vanilla JavaScript
- **Backend**: Firebase Realtime Database, Firebase Authentication
- **Font**: Quicksand (Google Fonts)

## Firebase Configuration
- Database paths:
  - `trips/dalat/timeline` - Timeline events data
  - `trips/dalat/config/tabs` - Dynamic tabs configuration
- Authentication: Google OAuth (restricted to specific admin email)
- Admin email: `nguyenbavinhcntt@gmail.com`
- Rules file: `database.rules.json`

## Key Features

### Timeline Display
- Dynamic tabs loaded from Firebase config (default: Saturday, Sunday, Monday)
- Admin can add/edit/delete/reorder tabs via config modal
- Events grouped by time with horizontal scrolling for multiple options at same time
- Real-time data sync from Firebase

### Image Management
- Image upload with base64 encoding (stored directly in Firebase)
- Image compression (max width 800px, JPEG quality 0.7)
- Image carousel with navigation dots
- Zoom overlay on image click
- Thumbnail grid for image management

### Admin Features
- Google login (restricted to admin email)
- Edit mode toggle to show/hide admin controls
- Add/Edit/Delete events
- Upload/Delete images for events
- **Tabs Config** - Manage dynamic tabs (add/edit/delete/reorder days)

## Main Functions

### Data Management
- `renderTimeline(data)` - Renders timeline UI from Firebase data
- `saveEvent()` - Creates or updates an event
- `deleteEvent(id)` - Removes an event
- `showDay(day)` - Switches between day tabs

### Tabs Configuration
- `renderTabs(tabs)` - Renders dynamic tabs from config
- `updateDayDropdown(tabs)` - Updates day select options in modal
- `openTabsConfigModal()` - Opens tabs management modal
- `renderTabsList()` - Renders editable tabs list in config modal
- `addNewTab()` - Adds a new tab entry
- `deleteTab(index)` - Removes a tab
- `moveTabUp(index)` / `moveTabDown(index)` - Reorders tabs
- `saveTabsConfig()` - Saves tabs to Firebase

### Image Handling
- `compressImage(file)` - Compresses images to base64
- `uploadImagesDB()` - Uploads images to Firebase
- `deleteImage(index)` - Removes an image from event
- `renderCarousel(images)` - Creates image carousel
- `openZoom(src)` - Opens full-screen image view

### UI Functions
- `showEventDetail(id)` - Opens event popup with images
- `openAddModal()` / `openEditModal(id)` - Opens event form modal
- `toggleAdmin()` - Toggles edit mode
- `processDescription(desc)` - Processes description text and extracts map links

## CSS Classes
- `.timeline-line` - Vertical timeline with dots
- `.tab-active` - Active day tab styling
- `.has-images` - Event card with camera icon indicator
- `.admin-only` - Elements visible only in admin/edit mode
- `.is-logged-in` / `.is-admin` - Body classes for auth state

## Data Structure

### Timeline Events (`trips/dalat/timeline`)
```javascript
{
  "eventId": {
    "day": "Sat" | "Sun" | "Mon",  // Matches tab ID
    "time": "HH:MM",
    "title": "Event title",
    "desc": "Description with optional URL",
    "images": ["base64string1", "base64string2"]
  }
}
```

### Tabs Config (`trips/dalat/config/tabs`)
```javascript
[
  { "id": "Sat", "label": "T7 (Hội quân)" },
  { "id": "Sun", "label": "CN (Đám cưới)" },
  { "id": "Mon", "label": "Thứ 2 (Về)" }
]
```

## UI Components
- Sticky header with login/admin buttons
- Day tabs (sticky below header) - **dynamically loaded from config**
- Timeline with time markers and event cards
- Event detail popup with image carousel
- Add/Edit modal form
- **Tabs config modal** - Manage tabs (admin only)
- Full-screen image zoom overlay

## Styling Notes
- Green color scheme (#16a34a for primary)
- Rounded corners (rounded-xl, rounded-2xl, rounded-3xl)
- Shadow effects for depth
- Mobile-first responsive design
- Custom scrollbar hiding for horizontal scroll areas
