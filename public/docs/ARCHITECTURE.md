# 🏗️ Technical Architecture

## Current Architecture (v1.0)

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   dalat.html                          │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │   │
│  │  │  HTML    │  │  CSS     │  │   JavaScript     │   │   │
│  │  │  (UI)    │  │(Tailwind)│  │   (Logic)        │   │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ Firebase SDK
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     FIREBASE BACKEND                         │
│  ┌──────────────────┐  ┌──────────────────────────────┐    │
│  │  Authentication  │  │     Realtime Database        │    │
│  │  (Google OAuth)  │  │  trips/dalat/timeline/{id}   │    │
│  └──────────────────┘  └──────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Current Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| UI Framework | Tailwind CSS (CDN) | Styling |
| JavaScript | Vanilla ES6+ | Application logic |
| Database | Firebase Realtime DB | Data storage & sync |
| Auth | Firebase Auth | Google OAuth |
| Image Storage | Base64 in DB | Image persistence |
| Hosting | Static HTML | Single file deployment |

---

## Proposed Architecture (v2.0+)

### Modular Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    React / Vue.js                         │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────┐    │   │
│  │  │ Header  │ │ Timeline│ │ Modal   │ │ ImageViewer │    │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────────┘    │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────┐    │   │
│  │  │ Tabs    │ │EventCard│ │ Upload  │ │ UserMenu    │    │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────────┘    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    State Management                       │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │   │
│  │  │ Trip State  │  │ User State  │  │ UI State        │  │   │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    Service Layer                          │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │   │
│  │  │ TripService │  │ AuthService │  │ ImageService    │  │   │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Firebase SDK / REST API
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        FIREBASE                                  │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│  │    Auth    │ │  Firestore │ │  Storage   │ │  Functions │   │
│  │            │ │            │ │  (Images)  │ │  (API)     │   │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Models

### Current Schema (Realtime Database)

```javascript
// trips/dalat/timeline/{eventId}
{
  "day": "Sat" | "Sun" | "Mon",
  "time": "HH:MM",
  "title": "string",
  "desc": "string (may contain URL)",
  "images": ["base64string", ...]  // Limited by DB size
}
```

### Proposed Schema (Firestore)

```javascript
// Collection: trips
{
  id: "dalat-2026",
  name: "Đà Lạt 2026",
  description: "Chuyến đi Đà Lạt của Team Vinh",
  coverImage: "https://storage.../cover.jpg",
  startDate: Timestamp,
  endDate: Timestamp,
  createdBy: "userId",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  settings: {
    theme: "green",
    isPublic: false,
    allowComments: true
  },
  members: {
    "userId1": { role: "admin", joinedAt: Timestamp },
    "userId2": { role: "editor", joinedAt: Timestamp },
    "userId3": { role: "viewer", joinedAt: Timestamp }
  }
}

// Subcollection: trips/{tripId}/days
{
  id: "day-1",
  date: Timestamp,
  label: "Thứ 7 (Hội quân)",
  order: 1
}

// Subcollection: trips/{tripId}/events
{
  id: "event-1",
  dayId: "day-1",
  startTime: "08:00",
  endTime: "09:30",
  title: "Ăn sáng",
  description: "Phở Bò 123 Nguyễn Văn Cừ",
  category: "food",  // food, sightseeing, transport, rest, activity
  location: {
    name: "Phở Bò 123",
    address: "123 Nguyễn Văn Cừ, Đà Lạt",
    lat: 11.9404,
    lng: 108.4583,
    googleMapsUrl: "https://maps.google.com/..."
  },
  images: [
    {
      url: "https://storage.../image1.jpg",
      thumbnail: "https://storage.../thumb1.jpg",
      caption: "Phở ngon quá!",
      uploadedBy: "userId",
      uploadedAt: Timestamp
    }
  ],
  status: "planned" | "in_progress" | "completed" | "skipped",
  cost: {
    amount: 150000,
    currency: "VND",
    splitBetween: ["userId1", "userId2"]
  },
  createdBy: "userId",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  order: 1
}

// Subcollection: trips/{tripId}/events/{eventId}/comments
{
  id: "comment-1",
  userId: "userId",
  content: "Nhớ đặt bàn trước nhé!",
  createdAt: Timestamp,
  reactions: {
    "userId1": "👍",
    "userId2": "❤️"
  }
}

// Collection: users
{
  id: "userId",
  email: "user@gmail.com",
  displayName: "Nguyen Van A",
  photoURL: "https://...",
  trips: ["tripId1", "tripId2"],
  createdAt: Timestamp,
  settings: {
    notifications: true,
    language: "vi"
  }
}
```

---

## Component Architecture

### Core Components

```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Modal.jsx
│   │   ├── Loading.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── Toast.jsx
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Tabs.jsx
│   │   ├── Sidebar.jsx
│   │   └── Footer.jsx
│   │
│   ├── timeline/
│   │   ├── Timeline.jsx
│   │   ├── TimeGroup.jsx
│   │   ├── EventCard.jsx
│   │   ├── EventDetail.jsx
│   │   └── EventForm.jsx
│   │
│   ├── image/
│   │   ├── ImageCarousel.jsx
│   │   ├── ImageUploader.jsx
│   │   ├── ImageZoom.jsx
│   │   └── ImageGallery.jsx
│   │
│   ├── user/
│   │   ├── LoginButton.jsx
│   │   ├── UserMenu.jsx
│   │   ├── UserAvatar.jsx
│   │   └── MemberList.jsx
│   │
│   └── trip/
│       ├── TripCard.jsx
│       ├── TripForm.jsx
│       ├── TripSettings.jsx
│       └── TripDashboard.jsx
│
├── services/
│   ├── firebase.js
│   ├── tripService.js
│   ├── eventService.js
│   ├── imageService.js
│   ├── authService.js
│   └── notificationService.js
│
├── hooks/
│   ├── useTrip.js
│   ├── useEvents.js
│   ├── useAuth.js
│   ├── useImages.js
│   └── useRealtime.js
│
├── store/
│   ├── index.js
│   ├── tripSlice.js
│   ├── userSlice.js
│   └── uiSlice.js
│
├── utils/
│   ├── dateUtils.js
│   ├── imageUtils.js
│   ├── urlUtils.js
│   └── validators.js
│
└── constants/
    ├── categories.js
    ├── roles.js
    └── themes.js
```

---

## API Design

### Firebase Functions API

```javascript
// GET /api/trips - List user's trips
// GET /api/trips/:tripId - Get trip details
// POST /api/trips - Create new trip
// PUT /api/trips/:tripId - Update trip
// DELETE /api/trips/:tripId - Delete trip

// GET /api/trips/:tripId/events - List events
// POST /api/trips/:tripId/events - Create event
// PUT /api/trips/:tripId/events/:eventId - Update event
// DELETE /api/trips/:tripId/events/:eventId - Delete event

// POST /api/trips/:tripId/events/:eventId/images - Upload image
// DELETE /api/trips/:tripId/events/:eventId/images/:imageId - Delete image

// POST /api/trips/:tripId/invite - Send invite
// POST /api/trips/:tripId/join - Join trip
// DELETE /api/trips/:tripId/members/:userId - Remove member
```

---

## Security Rules

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users can only read/write their own profile
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }

    // Trip access based on membership
    match /trips/{tripId} {
      function isMember() {
        return request.auth.uid in resource.data.members;
      }

      function isAdmin() {
        return resource.data.members[request.auth.uid].role == 'admin';
      }

      function isEditor() {
        return resource.data.members[request.auth.uid].role in ['admin', 'editor'];
      }

      allow read: if isMember() || resource.data.settings.isPublic;
      allow create: if request.auth != null;
      allow update: if isEditor();
      allow delete: if isAdmin();

      // Events subcollection
      match /events/{eventId} {
        allow read: if isMember() || get(/databases/$(database)/documents/trips/$(tripId)).data.settings.isPublic;
        allow create, update: if isEditor();
        allow delete: if isAdmin();

        // Comments subcollection
        match /comments/{commentId} {
          allow read: if isMember();
          allow create: if isMember();
          allow update, delete: if request.auth.uid == resource.data.userId;
        }
      }

      // Days subcollection
      match /days/{dayId} {
        allow read: if isMember();
        allow write: if isEditor();
      }
    }
  }
}
```

### Storage Security Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /trips/{tripId}/{allPaths=**} {
      allow read: if true;  // Public read for images
      allow write: if request.auth != null
        && firestore.get(/databases/(default)/documents/trips/$(tripId))
           .data.members[request.auth.uid].role in ['admin', 'editor'];
    }
  }
}
```

---

## Performance Considerations

### Current Issues

1. **Base64 Images in DB**
   - Large payload sizes
   - Slow initial load
   - Limited by Realtime DB size limits

2. **No Caching**
   - Re-fetches all data on each load
   - No offline support

3. **Single File Architecture**
   - All code loaded upfront
   - No code splitting

### Solutions

1. **Image Optimization**
   ```javascript
   // Use Firebase Storage with thumbnails
   const uploadImage = async (file, tripId, eventId) => {
     const resized = await resizeImage(file, { width: 1200 });
     const thumbnail = await resizeImage(file, { width: 300 });

     const imagePath = `trips/${tripId}/${eventId}/${file.name}`;
     const thumbPath = `trips/${tripId}/${eventId}/thumb_${file.name}`;

     await storage.ref(imagePath).put(resized);
     await storage.ref(thumbPath).put(thumbnail);

     return {
       url: await storage.ref(imagePath).getDownloadURL(),
       thumbnail: await storage.ref(thumbPath).getDownloadURL()
     };
   };
   ```

2. **Caching Strategy**
   ```javascript
   // Service Worker for offline support
   const CACHE_NAME = 'trip-timeline-v1';
   const STATIC_ASSETS = ['/index.html', '/styles.css', '/app.js'];

   self.addEventListener('install', (event) => {
     event.waitUntil(
       caches.open(CACHE_NAME)
         .then(cache => cache.addAll(STATIC_ASSETS))
     );
   });
   ```

3. **Lazy Loading**
   ```javascript
   // React lazy loading
   const ImageGallery = React.lazy(() => import('./ImageGallery'));
   const TripSettings = React.lazy(() => import('./TripSettings'));
   ```

---

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         PRODUCTION                               │
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐  │
│  │   Vercel /   │    │   Firebase   │    │    Firebase      │  │
│  │   Netlify    │◄──►│   Functions  │◄──►│    Firestore     │  │
│  │  (Frontend)  │    │    (API)     │    │   + Storage      │  │
│  └──────────────┘    └──────────────┘    └──────────────────┘  │
│         │                                                        │
│         │            ┌──────────────┐                           │
│         └───────────►│   Firebase   │                           │
│                      │     CDN      │                           │
│                      │  (Images)    │                           │
│                      └──────────────┘                           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        DEVELOPMENT                               │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐  │
│  │   Vite Dev   │    │   Firebase   │    │    Firebase      │  │
│  │   Server     │◄──►│   Emulator   │◄──►│    Emulator      │  │
│  │              │    │  (Functions) │    │   (Firestore)    │  │
│  └──────────────┘    └──────────────┘    └──────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Monitoring & Analytics

### Key Metrics

| Metric | Tool | Purpose |
|--------|------|---------|
| Page Load Time | Web Vitals | Performance |
| Error Rate | Sentry | Reliability |
| Active Users | Firebase Analytics | Usage |
| API Latency | Cloud Monitoring | Backend health |
| Storage Usage | Firebase Console | Cost management |

### Logging

```javascript
// Structured logging
const log = {
  info: (message, data) => console.log(JSON.stringify({ level: 'INFO', message, ...data })),
  error: (message, error) => console.error(JSON.stringify({ level: 'ERROR', message, error: error.message })),
  metric: (name, value) => analytics.logEvent(name, { value })
};
```

---

## Migration Path

### Phase 1: Image Migration
1. Create Firebase Storage bucket
2. Build image upload function
3. Migrate existing base64 images
4. Update UI to use Storage URLs

### Phase 2: Database Migration
1. Set up Firestore
2. Define collections and indexes
3. Write migration script
4. Run parallel databases during transition
5. Switch to Firestore

### Phase 3: Frontend Refactor
1. Set up React/Vue project
2. Create component library
3. Implement state management
4. Build new UI incrementally
5. Deploy and test

---

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
