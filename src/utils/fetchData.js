  // Fetch data function
  function fetchData(url, stateSetterFunction) {

    // Start fetching
    fetch(url)

      // Start converting response to JSON
      .then(response => response.json())

      // Use data
      .then(data => stateSetterFunction(data));

  }

  export default fetchData;