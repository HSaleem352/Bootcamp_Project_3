
// fetch('/about')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Process the data here
//   })
//   .catch(error => console.error('Error fetching data:', error));

// d3.json("/api/data").then(function(data) {
//     console.log(data);
// });

// Use D3 to fetch data from the API endpoint
d3.json('/api/data').then(function(data) {
    // Extract the required data for the bar graph
    var NonSmoker_BC_Count = data.map(d => d.NonSmoker_BC_Count);
    var Smoker_BC_Count = data.map(d => d.Smoker_BC_Count);
    var labels = data.map((d, i) => "Sample " + (i+1));
  
    // Create a bar graph using Plotly
    var trace1 = {
      x: labels,
      y: NonSmoker_BC_Count,
      name: 'Non-Smoker Count',
      type: 'bar'
    };
  
    var trace2 = {
      x: labels,
      y: Smoker_BC_Count,
      name: 'Smoker Count',
      type: 'bar'
    };
  
    var layout = {
      barmode: 'group',
      title: 'Non-Smoker and Smoker Breast Cancer Counts'
    };
  
    var data = [trace1, trace2];
  
    Plotly.newPlot('bar-graph', data, layout);
  });