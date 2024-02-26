// Use D3 to fetch data from the API endpoint
url = '/1'
d3.json(url).then(function(data) {
    console.log(data)
  });