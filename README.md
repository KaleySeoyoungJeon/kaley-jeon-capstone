### Project Title

Simple Gym Todo List Tracker

### Overview

The Gym Todo List Tracker is a streamlined app that helps fitness enthusiasts plan and complete their workouts effectively. It allows users to create workout-specific todo lists, break them into micro-goals (sets), and track their progress in real time. The app is designed to helping users accomplish their daily workout routine easily by breaking it down into smaller goals, which allows them to keep motivated during the workout.

### Problem Space

In the current market, workout apps for gym goers are overwhelming and packed with lots of details, which can be overwhelming before even starting workout, and many people struggle with  goal tracking. Traditional tools lack the granularity to manage workout specifics like sets. This app solves this by enabling users to organize workouts effectively, with an intuitive way to track and mark off progress.

### User Profile

**Target Users:**

- Fitness enthusiasts looking for a simple tool to plan and track workouts.
- Beginners who need structured guidance to stay on track.
- Advanced gym-goers who want to break down routines into measurable goals.

**User Flow:**

1. Users select a workout type on the landing page: Lower Body, Upper Body, or Full Body.
2. Add specific workout todo lists (e.g., "Squats", “Leg curls”).
3. Add sets (micro-goals) to each todo list.
4. Mark sets as done during the workout; todo list is automatically marked complete once all sets are done.

**Considerations:**

- Must display the current date and time (updated in real-time, no seconds).
- A clean, mobile-friendly UI to allow quick interactions in gym environments.

### Features

**Landing Page:**

- Three prominent buttons for workout types: Lower Body, Upper Body, Full Body.

**Todo List Management:**

- Add new gym workout lists with customizable titles.
- Add sets to each list, including the number of reps or notes.
- Automatically mark the workout as done once all sets are completed, which forces user to finish micro-goals first.

**Real-Time Clock:**

- Display the current date and time prominently at the top of the app (no seconds).

**Progress Tracker:**

- Visual indicators for completed sets and workouts.

**Additional Features (Stretch goals):**

- Option to add their name to personalize the experience e.g. Welcome Kaley!
- Option to save completed workouts for historical tracking.
- Integration with fitness APIs for motivational quote or music e.g. Spotify API

### Implementation

**Tech Stack**

- **Frontend:** React , CSS for styling.
- Data persists locally until user refreshes the page. It will use users browser’s local storage or Session storage

**Sitemap**

1. **Landing Page:** Users select Lower Body, Upper Body, or Full Body.
2. **Workout Tracker Page:** Users create and track gym todo lists and sets.

### Mockups

**Landing Page:**

- Three buttons with engaging graphics for Lower Body, Upper Body, Full Body.

**Workout Tracker:**

- Real-time date and time at the top.
- Add/mark/delete workout lists and sets with a progress bar for visual tracking.

### Roadmap

### **Week of  6th Jan**

- Create workout and sets management logic.
- Initialize React app and set up core components.
- Style the app using SCSS.
- Implement landing page with buttons for workout types.
- Add the real-time date and time display.

### **Week of 13th Jan – Testing & Optimization**

- Add automatic "done" marking for completed lists.
- Optimize user experience and polish UI.

### **Week of 20th Jan – Testing & Optimization**

- Test across devices for responsiveness.
- Code freeze & Prepare presentation.

### Future Implementations

- **Workout History:** Save and view past workout records.
- **Social Features:** Share completed workouts with friends.
- **Fitness Suggestions:** Pre-loaded workout templates for different fitness levels.

Mockups or wireframes for landing page and tracker page can be created in Figma upon request.