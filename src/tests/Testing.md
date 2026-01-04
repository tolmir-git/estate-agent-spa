# Manual Testing Report

## Search & Filters
-  Properties load correctly
-  Filter by type
-  Filter by price range
-  Filter by bedrooms (min & max)
-  Filter by date added
-  Sorting works as expected

## Property Details Page
-  Clicking a property opens details page
-  Image gallery displays correctly
-  Floor plan is shown separately
-  Google Maps loads correct location
-  Invalid property ID handled safely

## Favourites
-  Add/remove favourites using button
-  Drag property into favourites
-  Drag property out of favourites
-  Reorder favourites via drag and drop
-  Favourites persist during navigation

## Responsive Design
-  Layout works on desktop
-  Layout adapts on smaller screens

## Error Handling
-  Missing images replaced with placeholder
-  No app crashes during invalid interactions

## Testing and Bug Fixing

During development, the application was tested continuously using manual functional testing. This involved interacting with the system as an end user would, identifying unexpected behaviour, and resolving issues as they arose. Key testing and bug-fixing examples are outlined below.

Filtering and Sorting

Test: Applied multiple filters and sorting options simultaneously.
Expected Result: Only properties matching all criteria should be displayed in the correct order.
Issue Found: Logical conditions in the filtering and sorting algorithms were incomplete.
Fix: Filtering logic was corrected and sorting conditions refined.
Outcome: Properties now display correctly based on selected criteria.

Property Data Loading

Test: Loaded property data from the JSON file.
Expected Result: All properties should render correctly on the search page.
Issue Found: Properties were not loading due to incorrect data access.
Fix: Data structure references were corrected.
Outcome: All properties load consistently.

Date Handling

Test: Filtered properties using the “Added After” date.
Expected Result: Only properties added after the selected date should appear.
Issue Found: Date combinations were incorrectly parsed.
Fix: Dates were normalised and converted to JavaScript Date objects.
Outcome: Date filtering works as expected.

Google Maps Integration

Test: Loaded Google Maps iframe on the property details page.
Expected Result: Property location map should display correctly.
Issue Found: Map failed to load due to malformed URL encoding.
Fix: Location strings were encoded correctly before being passed to the iframe.
Outcome: Maps now load reliably.

Routing and Navigation

Test: Navigated between search and property detail pages.
Expected Result: Correct pages should render without errors.
Issue Found: Router rendering errors caused incorrect page loads.
Fix: Route configuration was corrected.
Outcome: Navigation now functions correctly.

Favourites and Drag-and-Drop Functionality

Test: Added, removed, reordered, and dragged properties in and out of favourites.
Expected Result: Favourites should update dynamically without UI freezes.
Issue Found: Complex drag-and-drop interactions caused rendering conflicts.
Fix: Rendering logic was restructured to allow continuous state updates during dragging.
Outcome: Drag-and-drop now works smoothly in all scenarios.

Image Handling

Test: Loaded property images and thumbnails.
Expected Result: Images should load correctly and remain clickable.
Issue Found: Broken images and thumbnail interactions failed.
Fix: A SafeImage component with fallback handling was implemented.
Outcome: Images now load reliably and maintain functionality.

Deployment Testing

Test: Deployed the application to Netlify.
Expected Result: The application should build and run correctly online.
Issue Found: Build errors due to Node version mismatch and lock file issues.
Fix: Dependencies were reinstalled and configuration corrected.
Outcome: Successful deployment achieved.

## Evaluation
The completed web application successfully meets the core requirements of the coursework brief. The system allows users to browse, filter, sort, and view property listings, view detailed property information, manage favourites, and interact with the application through drag-and-drop functionality.

One of the main strengths of the project is its functional completeness. All required features have been implemented, including property search, filtering, sorting, favourites management, detailed property pages, image galleries, and map integration. The application also demonstrates effective use of modern React concepts such as components, context, state management, and routing.

Another strength is the user interaction design, particularly the favourites system. Users can add and remove favourites both through buttons and drag-and-drop interactions, which improves usability and provides multiple interaction methods. The use of visual feedback during dragging enhances the user experience.

The application also performs well in terms of robustness. Issues such as broken images and deployment errors were identified and resolved through testing. The introduction of a fallback image mechanism ensures that missing images do not negatively impact the interface.

However, there are some limitations. Due to the complexity of drag-and-drop behaviour in React, a significant amount of development time was spent resolving edge cases related to rendering and state updates. This reduced the time available for additional enhancements such as automated testing or more advanced accessibility features.

Additionally, while the application is responsive and usable, further improvements could be made to optimise performance for very large datasets and to enhance accessibility for users relying on assistive technologies.

Overall, the project demonstrates a solid understanding of web development principles and React-based application design, while also highlighting the challenges involved in managing complex interactive state.

## Conclusion
In conclusion, this project successfully delivers a fully functional property search web application that satisfies the coursework requirements. The application allows users to search and explore properties, view detailed information, manage favourites, and interact with listings in an intuitive and engaging way.

Throughout development, a range of technical challenges were encountered, particularly with drag-and-drop interactions, routing, and deployment. These challenges were addressed through iterative testing and debugging, resulting in a stable and reliable final product. This process provided valuable experience in problem-solving, debugging, and managing application state in React.

The project demonstrates practical application of front-end development skills, including component-based design, state management, user interaction handling, and deployment to a live environment. While there are areas for future improvement, such as enhanced accessibility and automated testing, the final system meets its objectives and provides a strong foundation for further development.