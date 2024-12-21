# Project Title
Random Movie Picker

## Overview

The Random Movie Picker is a fast, no-fuss app that helps you pick a movie when you're feeling indecisive. With just a tap, the app generates a random movie from a cool, curated list of must-watch films. Whether you're solo or with friends, you'll have your next movie night sorted in seconds.

### Problem Space

Scrolling endlessly through streaming platforms can be exhausting, and decision fatigue is real. Random Movie Picker simplifies the process by suggesting a movie instantly, cutting down on wasted time and indecisiveness.

### User Profile

Target Users:
Gen Z movie lovers who enjoy spontaneous movie recommendations.
Groups of friends looking for quick movie night picks.
Solo viewers who want a surprise movie without overthinking.

User Flow:
Users open the app, hit "Surprise Me," and instantly receive a movie suggestion.
Swipe for new suggestions or save favorites for later viewing.

Considerations:
Must be mobile-friendly for on-the-go use.
Social sharing features to appeal to Gen Z habits.

### Features

Random Movie Generator: Users tap a button to get a random movie suggestion.
Swipe for More: Swipe left or right for new movie options if the first suggestion doesn’t fit the vibe.
Movie Details: Each movie card shows essential info—title, genre, release year, and description.
Save to Favorites: Users can save movies they love for future reference.
Shareable Links: Easily share movie picks on social media with one tap.

## Implementation

### Tech Stack

Frontend: React (React Hooks), TailwindCSS for styling, Framer Motion for animations.
Backend (Optional): Node.js with Express (if saving user data or favorites).
Libraries: Axios (data fetching), React Router (for potential navigation).

### APIs

OMDb API: Fetches movie data including titles, genres, release years, descriptions, and ratings.
IMDb-API:	API for receiving movie, serial and cast information

### Sitemap

Home Page: Main screen with "Surprise Me" button and random movie display.
Movie Details Page (Optional): Expanded view for in-depth information on selected movies.
Favorites Page: Saved movies that users can revisit.

### Mockups

https://www.figma.com/board/Iu6RCDT64vpycPzWX8K0Jo/Untitled?node-id=0-1&t=KdBiLnRdjQ0yjphM-1

Wireframes will show:

A clean home screen with a prominent "Surprise Me" button.
A simple movie card layout for random selections.
A grid or list layout for saved favorites.

### Data

  {
    "id": 2,
    "title": "Dune",
    "genre": "Sci-Fi, Adventure",
    "releaseYear": 2021,
    "description": "A young man must travel to the most dangerous planet to secure his family's future."
  }

### Endpoints

If backend is implemented:

GET /movies/random – Returns a random movie from the list.
GET /movies/{id} – Fetches details about a specific movie.
POST /favorites – Saves selected movies to user favorites.
GET /favorites – Retrieves all user-saved favorites.

## Roadmap
(including winter break)
Week 1 – Setup & Core Features
Initialize React app, set up components, and integrate the OMDb API.
Implement random movie generator functionality.

Week 2 – Design & Data
Create wireframes and design the homepage.
Integrate movie details from the API.

Week 3 – Swipe & Save Features
Implement swipe feature for new suggestions.
Develop the favorites list and save functionality.

Week 4 – Testing & Optimization
Test app across devices for responsiveness.
Add social sharing features and polish UI/UX.
Final bug fixes and performance optimization.


## Future Implementations

Dark Mode: A toggle for light/dark mode based on user preference.
Multiplayer Movie Picker: Users can sync up with friends to randomly select a movie together.
Genre Filters: Let users narrow random selections by genre (e.g., horror, comedy, drama).
Streaming Availability: Link directly to platforms where the movie is available to watch.

