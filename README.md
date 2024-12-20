<h1>Recipe Sharing App</h1>
<h2>Objective</h2>
<p>Build a web application where users can add, view, update, and delete recipes using React and Firebase Firestore. The app should focus on CRUD operations and seamless Firestore integration.</p>
<h2>Features</h2>
<ol>
  <li><h4><b>Recipe Management</b></h4>
    <ul>
      <li><h6>Add Recipe: A form to add a recipe with fields like:</h6>
      <ul>
        <li>Recipe Name</li>
        <li>Ingredients</li>
        <li>Instructions</li>
      </ul>
      <li><h6>View Recipes: Display all recipes on the home page.</h6></li>
      <li><h6>Edit Recipe: Allow users to edit recipes directly in the app.</h6></li>
      <li><h6>Delete Recipe: Allow users to delete recipes.</h6></li>
    </ul>
  </li>
  <li><h4><b>Firestore Integration</b></h4>
     <ul>
      <li><h6>Store recipes in Firebase Firestore.</h6></li>
     </ul>
  </li>
  <li><h4><b>UI/UX</b></h4>
    <ul>
      <li><h6>Design a user-friendly interface with proper navigation:</h6>
      <ul>
        <li>Home Page: Displays all recipes.</li>
        <li>Add Recipe Page: A form to add a new recipe.</li>
        <li>Edit Recipe Page: Pre-fill fields for editing an existing recipe.</li>
      </ul>
    </ul>
  </li>
</ol>
<h2>Tech Stack</h2>
<ul>
    <li><h6><b>Frontend</b> : React (with hooks)</h6></li>
    <li><h6><b>Backend</b> : Firebase Firestore</h6></li>
    <li><h6><b>UI Library</b> : Any CSS framework (e.g., Tailwind, Bootstrap, or Material-UI)</h6></li>
</ul>
<h2>Task Breakdown</h2>
<h3>Phase 1: Setup Firebase Firestore</h3>
<ol>
  <li> Create a Firebase project and set up Firestore.</li>
  <li> Add Firebase configuration to your React app.</li>
  <li> Create a Firestore collection (e.g., recipes) to store recipe data.</li>
</ol>
<h3>Phase 2: Recipe CRUD Operations</h3>
<ol>
  <li> Add Recipe
    <ul>
      <li><h6>Create a form with fields:</h6>
        <ul>
          <li>Recipe Name</li>
          <li>Ingredients</li>
          <li>Instructions</li>
        </ul>
      </li>
      <li><h6>Save the data to Firestore on form submission.</h6></li>
    </ul>
  </li>
  <li> View Recipes
    <ul>
      <li><h6>Fetch and display recipes from Firestore on the home page.</h6></li>
      <li><h6>Show the following details for each recipe:</h6>
        <ul>
          <li>Recipe Name</li>
          <li>Ingredients (shortened or in a tooltip)</li>
          <li>Instructions (optional in list view).</li>
        </ul>
      </li>
    </ul>
  </li>
  <li> Edit Recipe
    <ul>
      <li><h6>Implement a way to pre-fill a form with existing recipe data for editing.</h6></li>
      <li><h6>Update the recipe in Firestore when changes are saved..</h6></li>
    </ul>
  </li>
  <li> Delete Recipe
    <ul>
      <li><h6>Add a delete button for each recipe.</h6></li>
      <li><h6>Remove the selected recipe from Firestore.</h6></li>
    </ul>
  </li>
</ol>
<h3>Phase 3: UI/UX Design</h3>
<ol>
  <li>Create a navigation bar with links:
    <ul>
      <li>Home</li>
      <li>Add Recipe</li>
    </ul>
  </li>
  <li>Use a card layout to display recipes.</li>
  <li>Create a "No Recipes Found" message for an empty recipe list.</li>
</ol>
<h3>Phase 4: Advanced Features (Optional)</h3>
<ul>
  <li>Add search functionality to filter recipes by name or ingredients.</li>
  <li>Implement a "Favorite Recipe" feature (store a boolean flag in Firestore).</li>
  <li>Use React Context or Redux for state management if required.</li>
</ul>
<h2>Deliverables</h2>
<ol>
  <li>Functional Recipe Sharing App with the following features:
    <ul>
      <li>Add, View, Edit, and Delete recipes.</li>
      <li>Data persistence using Firebase Firestore.</li>
    </ul>
  </li>
  <li>Properly commented and structured code.</li>
  <li>GitHub repository with a detailed README file.</li>
  <li>Optional: Live deployment link using platforms like Vercel or Netlify.</li>
</ol>
<h2>Evaluation Criteria</h2>
<ol>
  <li>Firebase Integration: Proper Firestore CRUD operations.</li>
  <li>Code Quality: Clean and well-structured code.</li>
  <li>UI/UX: User-friendly and responsive design.</li>
  <li>Bonus: Any additional features implemented.</li>
</ol>
