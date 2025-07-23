// useEffect importing
import { useEffect } from 'react';

// useState importing
import { useState } from 'react';

// Endpoints importing
import ENDPOINTS from './constants/endpoints.js';

// FetchData function importing
import fetchData from './utils/fetchData.js';

// CardsList component importing
import CardsList from './components/CardsList/CardsList.jsx';

// App component
function App() {

  // Actors state variable
  const [actors, setActors] = useState(null);

  // Fetch data useEffect binding
  useEffect(() => fetchData(ENDPOINTS.ACTORS, setActors), []);

  return (

    <main>

      <div className="container">

        <h1 className="page-title">Cast Fetching</h1>

        <CardsList listTitle="Actors List" dataArray={actors} />

      </div>

    </main>

  )

}

export default App;