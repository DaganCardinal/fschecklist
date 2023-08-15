# Flight Sim Checklist

This is designed to be a basic, usable web app for Flight Sim users to access realistic checklists for use in their home simulation.

These are NOT designed to be used in real-world flight situations and are only intended for home flight sim and entertainment use.

## Development Details

This project was initially hosted on a Google Site, utilizing Google Sheets as a sort of database, with Google Apps Script rendering the Sheets as functional checklists. However, this was not very performant, and would not work in the long-term. I finally decided to rework this as a React app, not only to make it more performant, but also to make it more extensible as I would like to add further functionality to it down the road.

This is built with Vite, using React and Typescript. Styling is handled through Tailwind, and some Flowbite React components.

In order to keep it light, all data is handled locally through JSON, there are no external API calls and no DB or SSR, it's all client side. However, I would like to add a 'Checklist Builder' at some point, which will require a DB and some kind of user auth.

## Future Feature List

- Bring back dark mode
- Better styling for completed sections
- Add user prefs to localStorage (dark mode, expand all, etc.)
- Add print functionality
- Add user auth
- Add checklist builder
