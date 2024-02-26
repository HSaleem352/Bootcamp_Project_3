// Use D3 to fetch data from the API endpoint

d3.json("/residence").then(function(response) {
  console.log(response)
  });