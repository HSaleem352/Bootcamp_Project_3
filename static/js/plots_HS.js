// Use D3 to fetch data from the API endpoint

d3.json('127.0.0.1:5500').then(function(data) {
      console.log(data)
    // Plotly.newPlot('plot', data);
  });