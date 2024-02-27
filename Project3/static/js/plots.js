//Smoker&BC_VS_Non-Smoker&BC

// Use D3 to fetch data from the API endpoint
d3.json('/api/Smoker&BC_VS_Non-Smoker&BC').then(function(data) {
  // Extract the required data for the bar graph
  var NonSmoker_BC_Count = data.map(d => d.NonSmoker_BC_Count);
  var Smoker_BC_Count = data.map(d => d.Smoker_BC_Count);
  var labels = ["Active & Responding", "Active & Stable", "Active & Progressing"];

  // Create a bar graph using Plotly
  var trace1 = {
    x: labels,
    y: NonSmoker_BC_Count,
    name: 'NonSmoker_BC_Count',
    type: 'bar',
    marker: {
      color: 'rgba(255, 182, 193, 0.7)'  // Pastel Pink (RGBA)
    }
  };

  var trace2 = {
    x: labels,
    y: Smoker_BC_Count,
    name: 'Smoker_BC_Count',
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

//Smoker_NonSmoker_Covid_DF 

// Use D3 to fetch data from the API endpoint
d3.json('/api/Smoker_NonSmoker_Covid_DF').then(function(data) {
  // Extract the required data for the bar graph
  var NonSmoker_Covid_Count = data.map(d => d.NonSmoker_Covid_Count);
  var Smoker_Covid_Count = data.map(d => d.Smoker_Covid_Count);
  var labels = ["Mild", "Moderate", "Severe"];

  // Create a bar graph using Plotly
  var trace1 = {
    x: labels,
    y: NonSmoker_Covid_Count,
    name: 'NonSmoker_Covid_Count',
    type: 'bar',
    marker: {
      color: 'rgba(152, 251, 152, 0.7)'  // Pastel Green (RGBA)
    }
  };

  var trace2 = {
    x: labels,
    y: Smoker_Covid_Count,
    name: 'Smoker_Covid_Count',
    type: 'bar',
    marker: {
      color: 'rgba(255, 201, 164, 0.7)'  // Pastel Orange (RGBA)
    }
  };

  var layout = {
    barmode: 'group',
    title: 'Smoker & COVID VS. Non-Smoker & COVID',
    xaxis: {
      title: 'Covid_Status'  // Add x-axis title
    },
    yaxis: {
      title: 'Number of Smokers_COVID & Non-Smokers_COVID'  // Add y-axis title
    }
  };

  var data = [trace1, trace2];

  Plotly.newPlot('bar-graph2', data, layout);
});

//MildCov_BC_Smoker_NonSmoker_DF

// Use D3 to fetch data from the API endpoint
d3.json('/api/MildCov_BC_Smoker_NonSmoker_DF').then(function(data) {
  // Extract the required data for the bar graph
  var NonSmoker_BC_MildCov_Count = data.map(d => d.NonSmoker_BC_MildCov_Count);
  var Smoker_BC_MildCov_Count = data.map(d => d.Smoker_BC_MildCov_Count);
  var labels = ["Mild", "Moderate", "Severe"];

  // Create a bar graph using Plotly
  var trace1 = {
    x: labels,
    y: NonSmoker_BC_MildCov_Count,
    name: 'NonSmoker_BC_MildCov_Count',
    type: 'bar',
    marker: {
      color: 'rgba(240, 128, 128, 0.7)'  // LightCoral (RGBA)
    }
  };

  var trace2 = {
    x: labels,
    y: Smoker_BC_MildCov_Count,
    name: 'Smoker_BC_MildCov_Count',
    type: 'bar',
    marker: {
      color: 'rgba(127, 255, 212, 0.7)'  // Aquamarine (RGBA)
    }
  };

  var layout = {
    barmode: 'group',
    title: 'Mild-COVID with BC & Smoker VS. Mild-COVID with BC & Non-Smoker',
    xaxis: {
      title: 'COV_BC_Status'  // Add x-axis title
    },
    yaxis: {
      title: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID'  // Add y-axis title
    }
  };

  var data = [trace1, trace2];

  Plotly.newPlot('bar-graph3', data, layout);
});

//ModerateCov_BC_Smoker_NonSmoker_DF 

// Use D3 to fetch data from the API endpoint
d3.json('/api/ModerateCov_BC_Smoker_NonSmoker_DF').then(function(data) {
  // Extract the required data for the bar graph
  var NonSmoker_BC_ModerateCov_Count = data.map(d => d.NonSmoker_BC_ModerateCov_Count);
  var Smoker_BC_ModerateCov_Count = data.map(d => d.Smoker_BC_ModerateCov_Count);
  var labels = ["Moderate COVID & Active and responding", "Moderate COVID & Active and stable", "Moderate COVID & Active and progressing"];

  // Create a bar graph using Plotly
  var trace1 = {
    x: labels,
    y: NonSmoker_BC_ModerateCov_Count,
    name: 'NonSmoker_BC_ModerateCov_Count',
    type: 'bar',
    marker: {
      color: 'rgba(240, 128, 128, 0.7)'  // LightCoral (RGBA)
    }
  };

  var trace2 = {
    x: labels,
    y: Smoker_BC_ModerateCov_Count,
    name: 'Smoker_BC_ModerateCov_Count',
    type: 'bar',
    marker: {
      color: 'rgba(127, 255, 212, 0.7)'  // Aquamarine (RGBA)
    }
  };

  var layout = {
    barmode: 'group',
    title: 'Moderate-COVID with BC & Smoker VS. Moderate-COVID with BC & Non-Smoker',
    xaxis: {
      title: 'COV_BC_Status'  // Add x-axis title
    },
    yaxis: {
      title: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID'  // Add y-axis title
    }
  };

  var data = [trace1, trace2];

  Plotly.newPlot('bar-graph4', data, layout);
});

//SevereCov_BC_Smoker_NonSmoker_DF 

// Use D3 to fetch data from the API endpoint
d3.json('/api/SevereCov_BC_Smoker_NonSmoker_DF').then(function(data) {
  // Extract the required data for the bar graph
  var NonSmoker_BC_SevereCov_Count = data.map(d => d.NonSmoker_BC_SevereCov_Count);
  var Smoker_BC_SevereCov_Count = data.map(d => d.Smoker_BC_SevereCov_Count);
  var labels = ["Severe COVID & Active and responding", "Severe COVID & Active and stable", "Severe COVID & Active and progressing"];

  // Create a bar graph using Plotly
  var trace1 = {
    x: labels,
    y: NonSmoker_BC_SevereCov_Count,
    name: 'NonSmoker_BC_SevereCov_Count',
    type: 'bar',
    marker: {
      color: 'rgba(240, 128, 128, 0.7)'  // LightCoral (RGBA)
    }
  };

  var trace2 = {
    x: labels,
    y: Smoker_BC_SevereCov_Count,
    name: 'Smoker_BC_SevereCov_Count',
    type: 'bar',
    marker: {
      color: 'rgba(127, 255, 212, 0.7)'  // Aquamarine (RGBA)
    }
  };

  var layout = {
    barmode: 'group',
    title: 'Severe-COVID with BC & Smoker VS. Severe-COVID with BC & Non-Smoker',
    xaxis: {
      title: 'COV_BC_Status'  // Add x-axis title
    },
    yaxis: {
      title: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID'  // Add y-axis title
    }
  };

  var data = [trace1, trace2];

  Plotly.newPlot('bar-graph5', data, layout);
});