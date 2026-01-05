# Estate Agent Property Search Application

This project is a single-page web application developed using **React** and **Vite** as part of a university coursework assignment.  
It allows users to browse, filter, sort, and save property listings, with additional features such as drag-and-drop favourites and detailed property views.

---

##  Live Deployment

The application is deployed on Netlify and available at:

https://myestateagent.netlify.app/

---

##  Technologies Used

- React (Functional Components & Hooks)
- Vite (Build Tool)
- React Router DOM (Client-side routing)
- @hello-pangea/dnd (Drag and Drop)
- CSS (Design)
- Netlify (Deployment)

---

##  Project Structure

src/
├── components/
│ ├── PropertyCard.jsx
│ ├── SafeImage.jsx
│ ├── Header.jsx
│ └── Footer.jsx
├── pages/
│ ├── SearchPage.jsx
│ └── PropertyDetails.jsx
├── context/
│ └── FavouritesContext.jsx
├── data/
│ └── properties.json
└── images/
  └──*prop's folders and images in them*

---

##  Features

- Property search and listing
- Filtering by:
  - Property type
  - Price range
  - Number of bedrooms
  - Postcode
  - Date added
- Sorting by price and bedroom count
- Detailed property view with image gallery and floor plan
- Add and remove properties from favourites
- Drag-and-drop favourites panel
- Persistent UI behaviour with React Context
- Responsive layout
- Image fallback handling
- Client-side routing

---

##  Accessibility

Accessibility considerations include:
- Semantic HTML elements
- Descriptive `alt` text for all images
- `aria-label` attributes for interactive elements
- Keyboard focus indicators for buttons and interactive components

---

##  Security Considerations

- All data is loaded from a static JSON file (read-only)
- No user-generated content is stored or rendered
- No use of `dangerouslySetInnerHTML`
- Client-side routing prevents access to invalid routes
- No API keys or secrets exposed

---

##  Testing
- Check the Testing.md for an elaborate testing documentation
### Manual Testing
- Property filtering and sorting
- Navigation between pages
- Adding/removing favourites
- Drag-and-drop interactions
- Responsive layout testing
- Image loading and fallback behaviour

### Bug Fixes
- Filtering and sorting logic issues
- Property loading errors
- Date formatting problems
- Google Maps embedding issues
- Router nesting errors
- Complex favourites state and drag-and-drop bugs
- Netlify deployment issues
- Image gallery interaction bugs

### Edge Cases
- Empty favourites list
- Invalid property IDs
- Missing or broken images
- No matching search results

---

##  Installation & Running Locally

```bash
npm install
npm run dev

## you can check the images of the website in the public/screenshots