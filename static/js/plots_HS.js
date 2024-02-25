// Use D3 to fetch data from the API endpoint

d3.json('/1').then(function(data) {
      
    Plotly.newPlot('plot', data, layout);
  });