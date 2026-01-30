# Dalat Trip Timeline Application

## Overview
A mobile-first Vietnamese trip planning timeline web application for "Team Vinh 2026" Dalat trip. Built as a single-page HTML application with Firebase backend, offline support, and PWA capabilities.

## File Structure
- `dalat.html` - Main application file (single HTML file with embedded CSS and JavaScript)
- `sw.js` - Service Worker for offline support
- `manifest.json` - PWA manifest
- `database.rules.json` - Firebase security rules

## Technology Stack
- **Frontend**: HTML5, Tailwind CSS (CDN), vanilla JavaScript
- **Backend**: Firebase Realtime Database, Firebase Authentication
- **Font**: Quicksand (Google Fonts)
- **Offline**: Service Worker, LocalStorage caching
- **PWA**: Installable app via manifest

## Firebase Configuration
- **Database paths**:
  - `trips/dalat/timeline` - Timeline events data
  - `trips/dalat/config/tabs` - Dynamic tabs configuration
- **Authentication**: Google OAuth (restricted to specific admin email)
- **Admin email**: `nguyenbavinhcntt@gmail.com`
- **Rules file**: `database.rules.json`

## Firebase Data Structure

### Timeline Events (`trips/dalat/timeline/{eventId}`)
```javascript
{
  "day": "Sat" | "Sun" | "Mon",  // Matches tab ID
  "time": "HH:MM",
  "title": "Event title",
  "desc": "Description with optional URL",
  "images": ["base64string1", "base64string2"],  // Compressed images
  "menu": [
    {
      "category": "CATEGORY NAME",
      "items": [
        { "name": "Item name", "price": 50000, "qty": 0 }
      ]
    }
  ]
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

## Firebase Security Rules
```json
{
  "trips": {
    "dalat": {
      "config": {
        ".read": true,
        ".write": "auth != null && auth.token.email === 'nguyenbavinhcntt@gmail.com'"
      },
      "timeline": {
        ".read": true,
        ".write": "auth != null && auth.token.email === 'nguyenbavinhcntt@gmail.com'",
        "$eventId": {
          "menu": {
            "$catIdx": {
              "items": {
                "$itemIdx": {
                  "qty": {
                    ".write": true  // Anyone can update quantities
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

---

## Key Features

### 1. Timeline Display
- Dynamic tabs loaded from Firebase config (default: Saturday, Sunday, Monday)
- Events grouped by time with horizontal scrolling for multiple options at same time
- Real-time data sync from Firebase
- Admin can add/edit/delete/reorder tabs via config modal

### 2. Image Management
- Image upload with base64 encoding (stored directly in Firebase)
- Image compression (max width 800px, JPEG quality 0.7)
- Image carousel with navigation dots
- Zoom overlay on image click (double-click to zoom 2x)
- Thumbnail grid for image management

### 3. Menu System (Per-Event)
Each event can have its own menu with real-time collaborative ordering.

#### User Features:
- View menu with categories and items
- **Search**: Filter menu items by name
- **Quantity controls**: +/- buttons for easy selection
- **Real-time sync**: Quantities sync to Firebase immediately, all users see same values
- **Total calculation**: Auto-calculated total displayed at bottom
- **Bill view**: "XEM DON" button shows itemized bill

#### Admin Features:
- **LLM Prompt Template**: Copy prompt to use with Gemini/ChatGPT for extracting menu from images
- **JSON Import**: Paste JSON from LLM, merges with existing menu (no duplicates, case-insensitive)
- **Manual Add**: Add items one by one with category, name, price
- **Edit Existing**: Search and edit menu items with search filter
- **Delete Items**: Remove items from menu
- All changes saved to Firebase

#### Menu Data Flow:
1. User clicks +/- or changes input value
2. `changeQty()` or `onchange` called
3. `syncQtyToFirebase()` writes to `menu/{catIdx}/items/{itemIdx}/qty`
4. Firebase listener in `setupMenuListener()` receives update
5. `renderMenuItems()` re-renders with new quantities
6. All connected clients see the same quantities

### 4. Offline Support
- Service Worker for caching static assets
- LocalStorage for timeline data
- Offline banner when disconnected
- "Back online" toast notification
- Pull-to-refresh functionality

### 5. Authentication & Admin
- Google Sign-In via Firebase Auth
- Admin restricted to: `nguyenbavinhcntt@gmail.com`
- Admin-only UI elements hidden for regular users
- Edit mode toggle to show/hide admin controls

---

## Main Functions

### Timeline Management
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
- `compressImage(file)` - Compresses images to base64 (800px max, 70% quality)
- `uploadImagesDB()` - Uploads compressed images to Firebase
- `deleteImage(index)` - Removes an image from event
- `renderCarousel(images)` - Creates image carousel
- `renderThumbnails(images)` - Creates thumbnail grid for admin
- `openZoom(src)` - Opens full-screen image view

### Menu Functions
- `showEventMenu(eventId)` - Opens menu popup for event
- `setupMenuListener(eventId)` - Sets up real-time Firebase listener for menu
- `closeMenuPopup(e)` - Closes menu and removes listener
- `renderMenuItems(menuData)` - Renders menu with quantity controls
- `changeQty(catIdx, itemIdx, delta)` - Changes quantity and syncs to Firebase
- `syncQtyToFirebase(catIdx, itemIdx, qty)` - Syncs quantity to Firebase
- `calcMenuTotal()` - Calculates total from all quantities
- `filterMenuItems()` - Filters menu items by search query
- `showMenuBill()` - Shows itemized bill modal
- `closeMenuBill()` - Closes bill modal

### Menu Admin Functions
- `copyMenuPrompt()` - Copies LLM prompt to clipboard
- `importMenuFromJSON()` - Imports and merges JSON menu data (no duplicates)
- `addManualMenuItem()` - Adds single menu item (with duplicate check)
- `renderMenuEditList(menuData)` - Renders editable menu list
- `filterEditMenuItems()` - Filters edit list by search query
- `updateEditingMenu(catIdx, itemIdx, field, value)` - Updates item in edit mode
- `deleteEditingItem(catIdx, itemIdx)` - Deletes item from edit list
- `saveMenuChanges()` - Saves edited menu to Firebase
- `openMenuEditor(eventId)` - Opens menu in admin edit mode

### UI Functions
- `showEventDetail(id)` - Opens event popup with images
- `openAddModal()` / `openEditModal(id)` - Opens event form modal
- `toggleAdmin()` - Toggles edit mode
- `processDescription(desc)` - Processes description text and extracts map links

### Offline Functions
- `saveOfflineData(data)` - Saves to LocalStorage
- `loadOfflineData()` - Loads from LocalStorage
- `updateOnlineStatus()` - Handles online/offline state
- `refreshData()` - Force refreshes from Firebase

---

## CSS Classes

### Layout
- `.timeline-line` - Vertical timeline with dots
- `.tab-active` - Active day tab styling
- `.admin-only` - Elements visible only in admin/edit mode
- `.is-logged-in` / `.is-admin` - Body classes for auth state

### Event Cards
- `.has-images` - Event card with camera icon indicator (📷)
- `.has-menu` - Event card with menu icon indicator (🍽️)

### Image Components
- `.carousel-image` - Carousel image styling
- `.carousel-btn` - Prev/next buttons
- `.carousel-dot` - Navigation dots
- `.thumbnail-item` - Thumbnail in grid
- `.thumbnail-delete` - Delete button on thumbnail

### Menu Components
- `.menu-popup` - Full-screen menu overlay
- `.menu-popup-content` - Menu content container
- `.menu-category` - Orange category header
- `.menu-item` - Individual menu item row
- `.menu-item-info` - Item name and price container
- `.menu-item-name` - Item name text
- `.menu-item-price` - Item price text
- `.qty-controls` - Plus/minus button container
- `.qty-btn.plus` / `.qty-btn.minus` - Quantity adjustment buttons
- `.menu-item-qty` - Quantity input field
- `.menu-total-bar` - Sticky total bar at bottom
- `.menu-total-amount` - Total amount display

### Menu Admin Components
- `.menu-admin-section` - Admin section container
- `.json-textarea` - JSON input textarea
- `.prompt-box` - LLM prompt display box
- `.menu-item-edit` - Editable menu item (grid layout)
- `.menu-edit-category` - Category header in edit list
- `.menu-item-delete` - Red delete button

### Offline Components
- `.offline-banner` - Offline status banner
- `.online-toast` - Back online notification
- `.pull-to-refresh` - Pull to refresh indicator

---

## Styling Notes
- Green color scheme (#16a34a for primary)
- Orange accent for menu (#d35400, #e67e22)
- Rounded corners (rounded-xl, rounded-2xl, rounded-3xl)
- Shadow effects for depth
- Mobile-first responsive design
- Custom scrollbar hiding for horizontal scroll areas

---

## Menu JSON Format (for LLM Import)
```json
[
  {
    "category": "TEN DANH MUC",
    "items": [
      { "name": "Ten mon", "price": 50000 },
      { "name": "Ten mon 2", "price": 75000 }
    ]
  }
]
```

**Notes for LLM prompt:**
- Price is integer (VND), no commas
- If price is "Thoi gia" or "Market Price", set price = 0
- Keep Vietnamese item names
- Group items by category if available

---

## Important Notes
- All prices are in VND (Vietnamese Dong)
- "Thoi gia" (Market Price) items have price = 0
- Images are compressed before upload to reduce Firebase storage
- Menu quantities are shared across all users (collaborative ordering)
- Admin mode toggle available after login
- Duplicate detection is case-insensitive for menu items
