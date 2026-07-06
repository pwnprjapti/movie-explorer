# Movie Explorer

Movie Explorer is a lightweight React application built with Vite that allows users to search for movies and view details on a dedicated details page. The app integrates with the OMDb API for movie search and metadata, and displays embedded trailers using YouTube search results.

## Features

- Search movies by title
- Display a responsive list of movie cards
- View movie details on a separate page
- Embedded trailer playback for selected titles
- Quick access to external streaming search via Hotstar

## Tech Stack

- React
- Vite
- React Router DOM
- OMDb API
- YouTube Data API

## Getting Started

### Requirements

- Node.js 18+ (or compatible)
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local server URL shown in the terminal to view the application.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `src/main.jsx` — application entry point
- `src/App.jsx` — root component with routing
- `src/components/nav.jsx` — top navigation bar
- `src/components/search.jsx` — search input and button
- `src/components/List.jsx` — movie results list
- `src/components/MovieCard.jsx` — individual movie card display
- `src/pages/Home.jsx` — search and results page
- `src/pages/Details.jsx` — movie details page with trailer embed
- `src/App.css` — application styling

## Notes

- The app uses a public OMDb API key in source code for search requests.
- The details page also attempts to fetch trailer results from the YouTube Data API.

## Improvement Ideas

- Add error handling for failed API requests
- Improve mobile responsiveness
- Replace hard-coded API keys with environment variables
- Add pagination for search results
- Implement loading indicators for asynchronous requests
