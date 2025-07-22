// useEffect importing
import { useEffect } from 'react';

// Endpoints importing
import endopoints from './constants/endpoints.js';

// App component
function App() {

  // Fetch data useEffect binding
  useEffect(() => fetchData, []);

  // Fetch data function
  function fetchData() {

    // Start fetching
    fetch(endopoints.actors)

      // Start converting response to JSON
      .then(response => response.json())
      
      // Use data
      .then(data => {

        // Log data
        console.log(data);

      });

  }

  return (

    <>

      

    </>

  )

}

export default App;