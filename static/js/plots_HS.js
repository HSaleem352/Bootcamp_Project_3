// Use D3 to fetch data from the API endpoint
url = 'http://127.0.0.1:5000/1'
d3.json(url).then(function(data) {
    console.log(data)
    Plotly.newPlot('plot', data);
  });