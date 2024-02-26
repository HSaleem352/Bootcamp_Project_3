// Use D3 to fetch data from the API endpoint
d3.json('/api/Smoker_NonSmoker_Covid_DF').then(function(data) {
  // Extract the required data for the bar graph
  var NonSmoker_BC_Count = data.map(d => d.NonSmoker_BC_Count);
  var Smoker_BC_Count = data.map(d => d.Smoker_BC_Count);
  var labels = ["Active & Responding", "Active & Stable", "Active & Progressing"];

  // Create a bar graph using Plotly
  var trace1 = {
    x: labels,
    y: NonSmoker_BC_Count,
    name: 'Non-Smoker Count',
    type: 'bar',
    marker: {
      color: 'rgba(255, 182, 193, 0.7)'  // Pastel Pink (RGBA)
    }
  };

  var trace2 = {
    x: labels,
    y: Smoker_BC_Count,
    name: 'Smoker Count',
    type: 'bar',
    marker: {
      color: 'rgba(173, 216, 230, 0.7)'  // Pastel Blue (RGBA)
    }
  };

  var layout = {
    barmode: 'group',
    title: 'Non-Smoker and Smoker Breast Cancer Counts',
    xaxis: {
      title: 'BC_Status'  // Add x-axis title
    },
    yaxis: {
      title: 'Number of Smokers_BC & Non-Smokers_BC'  // Add y-axis title
    }
  };

  var data = [trace1, trace2];

  Plotly.newPlot('bar-graph1', data, layout);
}); 