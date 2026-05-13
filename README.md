# TougeMaps

TougeMaps is an Android app concept for discovering nearby touge roads, recording runs with GNSS and IMU data, and sharing times, ratings, and drive plans with friends.

It now also includes a lightweight Progressive Web App prototype in [`pwa/`](C:/Users/nicol/Documents/Coding/TougeMaps/pwa/) for quick mobile-friendly route browsing, map handoff, local ratings, and sharing.

## Current foundation

This repository now contains a starter Android app built with:

- Kotlin
- Jetpack Compose
- Material 3
- Navigation Compose

The initial app shell includes:

- Nearby tracks feed
- Run recording dashboard
- Drive booking and social planning
- Profile page with subscribed tracks, cars, and times

## PWA prototype

The web prototype lives in [`pwa/`](C:/Users/nicol/Documents/Coding/TougeMaps/pwa/) and includes:

- Route cards with hero artwork
- Mini OpenStreetMap embeds
- Buttons to open Google Maps or Apple Maps
- Local `done / not done` tracking in browser storage
- Local personal star ratings
- Share support through the Web Share API
- Manifest and service worker for install/offline basics

### Running it locally

Because service workers need HTTP rather than `file://`, serve the `pwa/` folder with any static server.

Examples:

1. `npx serve pwa`
2. `npx http-server pwa`
3. Deploy the folder directly to Netlify, Vercel, or GitHub Pages

## Deployment options

For the PWA version, the simplest deployment targets are:

1. GitHub Pages for basic static hosting
2. Netlify for easy drag-and-drop deploys and previews
3. Vercel for fast static hosting and clean HTTPS by default

## Next steps

1. Open the project in Android Studio and let it create/update the Gradle wrapper.
2. Add a real mapping SDK such as Google Maps Compose or MapLibre.
3. Replace sample data with a shared repository layer for both Android and web clients.
4. Add a cloud backend if ratings, done status, and sharing should sync across users.
5. Add runtime permission flows and foreground recording services for GNSS capture in Android.
6. Store sensor streams per run and build timing/segment analysis.

## Suggested product slices

1. Discovery: nearby touge map, filters, ratings, safety notes.
2. Recording: start/stop runs, GPS quality, IMU capture, lap/segment timing.
3. Social: invite friends, book drives, comments, track subscriptions.
4. Identity: profile, cars, personal bests, and subscribed roads.
