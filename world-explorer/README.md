# React + Vite
World Explorer, a responsive single page React app for exploring country data using the REST Countries API and landscape imagery from Unsplash, using JEST for testing, hosted on Netlify.

# To run:

# 1. Clone the repo
git clone https://github.com/NeosUnderground/World-Explorer.git

cd world-explorer/world-explorer

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev


# To run Tests:
npm test


# To build for production
npm run build


# create a .env file in the root 
This will be for storing the unsplash api key which will look like this:

VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key



# Decisions & Trade-Offs
Opted for custom CSS modules over Tailwind or Bootstrap to retain full control over component-level styles and reduce overhead (tailwind was being a pain to get configured).

Configured Jest manually to work with Vite + React. This included setting up babel-jest, customizing jest.config.js, and resolving compatibility issues with ES modules and JSX (also kind of annoying).

Chose Netlify for simplicity in deploying static frontends with environment variables support.

Added user favorites, filtering by regions, a search input, to home page for better ease of use. I also added a local terrain image from the Unsplash API to the country details page so users can see what the country might look like. 

# Improvements 
If more time were available I would finish out the remaining jest test files for the other components.

Build a Node/Express or serverless backend to manage custom features like saved searches or comments.

Implement React error boundaries to gracefully handle runtime failures.

Improve semantic structure and screen reader support and increase lighthouse score to perfect.

Use responsive typography, theming, and animation libraries for polish.

Cache and resize flag images for performance on mobile networks.
