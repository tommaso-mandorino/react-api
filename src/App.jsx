// useEffect importing
import { useEffect } from 'react';

// useState importing
import { useState } from 'react';

// Endpoints importing
import endopoints from './constants/endpoints.js';

// App component
function App() {

  // Fetched data state variable
  const [fetchedData, setFetchedData] = useState(null);

  // Fetch data useEffect binding
  useEffect(() => fetchData, []);



  // Fetch data function
  function fetchData() {

    // Start fetching
    fetch(endopoints.actors)

      // Start converting response to JSON
      .then(response => response.json())

      // Use data
      .then(data => setFetchedData(data));

  }



  return (

    <main>

      <div className="container">

        <h1 className="page-title">Cast Fetching</h1>

        <section className="actors-container">

          <h2>Actors list</h2>

          <div className="actors-list">

            {

              fetchedData?.map(actor => {

                return (

                  <div key={`card-${actor.id}`} className="card">

                    <div className="image-container">
                      <img className='card-image' src={actor.image} alt={`${actor.name} photo`} />
                    </div>

                    <div className="information-container">

                      <section className="field">
                        <h2 className="field-content">{actor.name}</h2>
                      </section>

                      <section className="field">
                        <h6 className="field-name">Year of birth:</h6>
                        <span className="field-content">{actor.birth_year}</span>
                      </section>

                      <section className="field">
                        <h6 className="field-name">Nationality:</h6>
                        <span className="field-content">{actor.nationality}</span>
                      </section>

                      <section className="field">
                        <h6 className="field-name">Biography:</h6>
                        <span className="field-content">{actor.biography}</span>
                      </section>

                      <section className="field">
                        <h6 className="field-name">Awards:</h6>
                        <span className="field-content">{actor.awards.join(', ')}</span>
                      </section>

                    </div>

                  </div>

                );

              })
            
            }

          </div>

        </section>

      </div>

    </main>

  )

}

export default App;