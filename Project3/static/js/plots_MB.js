//Smoker&BC_VS_Non-Smoker&BC

// Use D3 to fetch data from the API endpoint
d3.json('/api/v1/Smoker&BC_VS_Non-Smoker&BC').then(function(data) {
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
d3.json('/api/v1/Smoker_NonSmoker_Covid_DF').then(function(data) {
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
d3.json('/api/v1/MildCov_BC_Smoker_NonSmoker_DF').then(function(data) {
  // Extract the required data for the bar graph
  var NonSmoker_BC_MildCov_Count = data.map(d => d.NonSmoker_BC_MildCov_Count);
  var Smoker_BC_MildCov_Count = data.map(d => d.Smoker_BC_MildCov_Count);
  var labels = ["Mild COVID & Active and responding", "Mild COVID & Active and stable", "Mild COVID & Active and progressing"];

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
    titlefont: {
      size: 14  // Adjust the title font size
    },
    xaxis: {
      title: 'COV_BC_Status',  // Add x-axis title
      tickfont: {
        size: 6  // Adjust the label font size
    }
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
d3.json('/api/v1/ModerateCov_BC_Smoker_NonSmoker_DF').then(function(data) {
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
    titlefont: {
      size: 14  // Adjust the title font size
    },
    xaxis: {
      title: 'COV_BC_Status', // Add x-axis title
      tickfont: {
        size: 6  // Adjust the label font size
    }
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
d3.json('/api/v1/SevereCov_BC_Smoker_NonSmoker_DF').then(function(data) {
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
    titlefont: {
      size: 14  // Adjust the title font size as needed
    },
    xaxis: {
      title: 'COV_BC_Status',  // Add x-axis title
      tickfont: {
        size: 6  // Adjust the label font size as needed
    }
    },
    yaxis: {
      title: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID'  // Add y-axis title
    }
  };

  var data = [trace1, trace2];

  Plotly.newPlot('bar-graph5', data, layout);
});

//A_Res_BC_Smoker_NonSmoker_DF

d3.json('/api/v1/A_Res_BC_Smoker_NonSmoker_DF').then(function(data) {
  
  var Race_Ethnicity = ["NHW", "Black", "Hispanic", "AAPI", "Others"];
  // Extract data for each entry
  var labels = Race_Ethnicity;
  var values1 = data.map(item => item.Smoker_A_Res_Count);
  var values2 = data.map(item => item.NonSmoker_A_Res_Count);

  // Create Pie Chart 1
  var trace1 = {
      labels: labels,
      values: values1,
      type: 'pie',
      marker: {
          colors: ["mediumaquamarine", "silver", "steelblue", "lightcoral", "lemonchiffon"],
          line: {
              color: 'black',
              width: 1.25
          }
      },
      hole: 0.3,  // hole size adjustment
  };

  var layout1 = {
      title: 'Active and Responding BC & Smoker VS. Race/Ethnicity',
      legend: {
        title: {
            text: 'Race/Ethnicity',  // Set the title above the legend
          },
        y: 0.5  // Set the y position to be centered
      },
      annotations: [{
        text: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID',
        showarrow: false,
        font: {
            size: 10,
            color: '#000000'
        },
        x: 0,  // Set the x position to be on the left side
        xref: 'paper',  // Reference the x position to the paper (entire plot)
        y: 0.5,  // Set the y position to be in the middle vertically
        yref: 'paper',  // Reference the y position to the paper (entire plot)
        textangle: -90  // Set the text angle to make it vertical
    }]
  };

  Plotly.newPlot('pie-chart1', [trace1], layout1);

  // Create Pie Chart 2
  var trace2 = {
      labels: labels,
      values: values2,
      type: 'pie',
      marker: {
          colors: ["mediumaquamarine", "silver", "steelblue", "lightcoral", "lemonchiffon"],
          line: {
              color: 'black',
              width: 1.25
          }
      },
      hole: 0.3,  // hole size adjustment
  };

  var layout2 = {
      title: 'Active and Responding BC & Non-Smoker VS. Race/Ethnicity',
      legend: {
        title: {
            text: 'Race/Ethnicity',  // Set the title above the legend
          },
        y: 0.5  // Set the y position to be centered
      },
      annotations: [{
        text: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID',
        showarrow: false,
        font: {
            size: 10,
            color: '#000000'
        },
        x: 0,  // Set the x position to be on the left side
        xref: 'paper',  // Reference the x position to the paper (entire plot)
        y: 0.5,  // Set the y position to be in the middle vertically
        yref: 'paper',  // Reference the y position to the paper (entire plot)
        textangle: -90  // Set the text angle to make it vertical
    }]
  };

  Plotly.newPlot('pie-chart2', [trace2], layout2);
}).catch(function(error) {
  console.error('Error fetching data:', error);
});

//A_St_BC_Smoker_NonSmoker_DF

d3.json('/api/v1/A_St_BC_Smoker_NonSmoker_DF').then(function(data) {
  
  var Race_Ethnicity = ["NHW", "Black", "Hispanic", "AAPI", "Others"];
  // Extract data for each entry
  var labels = Race_Ethnicity;
  var values1 = data.map(item => item.Smoker_A_St_Count);
  var values2 = data.map(item => item.NonSmoker_A_St_Count);

  // Create Pie Chart 3
  var trace1 = {
      labels: labels,
      values: values1,
      type: 'pie',
      marker: {
          colors: ["mediumaquamarine", "silver", "steelblue", "lightcoral", "lemonchiffon"],
          line: {
              color: 'black',
              width: 1.25
          }
      },
      hole: 0.3,  // hole size adjustment
  };

  var layout1 = {
      title: 'Active and Stable BC & Smoker VS. Race/Ethnicity',
      legend: {
        title: {
            text: 'Race/Ethnicity',  // Set the title above the legend
          },
        y: 0.5  // Set the y position to be centered
      },
      annotations: [{
        text: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID',
        showarrow: false,
        font: {
            size: 10,
            color: '#000000'
        },
        x: 0,  // Set the x position to be on the left side
        xref: 'paper',  // Reference the x position to the paper (entire plot)
        y: 0.5,  // Set the y position to be in the middle vertically
        yref: 'paper',  // Reference the y position to the paper (entire plot)
        textangle: -90  // Set the text angle to make it vertical
    }]
  };

  Plotly.newPlot('pie-chart3', [trace1], layout1);

  // Create Pie Chart 4
  var trace2 = {
      labels: labels,
      values: values2,
      type: 'pie',
      marker: {
          colors: ["mediumaquamarine", "silver", "steelblue", "lightcoral", "lemonchiffon"],
          line: {
              color: 'black',
              width: 1.25
          }
      },
      hole: 0.3,  // hole size adjustment
  };

  var layout2 = {
      title: 'Active and Stable BC & Non-Smoker VS. Race/Ethnicity',
      legend: {
        title: {
            text: 'Race/Ethnicity',  // Set the title above the legend
          },
        y: 0.5  // Set the y position to be centered
      },
      annotations: [{
        text: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID',
        showarrow: false,
        font: {
            size: 10,
            color: '#000000'
        },
        x: 0,  // Set the x position to be on the left side
        xref: 'paper',  // Reference the x position to the paper (entire plot)
        y: 0.5,  // Set the y position to be in the middle vertically
        yref: 'paper',  // Reference the y position to the paper (entire plot)
        textangle: -90  // Set the text angle to make it vertical
    }]
  };

  Plotly.newPlot('pie-chart4', [trace2], layout2);
}).catch(function(error) {
  console.error('Error fetching data:', error);
});

//A_Prog_BC_Smoker_NonSmoker_DF

d3.json('/api/v1/A_Prog_BC_Smoker_NonSmoker_DF').then(function(data) {
  
  var Race_Ethnicity = ["NHW", "Black", "Hispanic", "AAPI", "Others"];
  // Extract data for each entry
  var labels = Race_Ethnicity;
  var values1 = data.map(item => item.Smoker_A_Prog_Count);
  var values2 = data.map(item => item.NonSmoker_A_Prog_Count);

  // Create Pie Chart 5
  var trace1 = {
      labels: labels,
      values: values1,
      type: 'pie',
      marker: {
          colors: ["mediumaquamarine", "silver", "steelblue", "lightcoral", "lemonchiffon"],
          line: {
              color: 'black',
              width: 1.25
          }
      },
      hole: 0.3,  // hole size adjustment
  };

  var layout1 = {
      title: 'Active and Progressing BC & Smoker VS. Race/Ethnicity',
      legend: {
        title: {
            text: 'Race/Ethnicity',  // Set the title above the legend
          },
        y: 0.5  // Set the y position to be centered
      },
      annotations: [{
        text: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID',
        showarrow: false,
        font: {
            size: 10,
            color: '#000000'
        },
        x: 0,  // Set the x position to be on the left side
        xref: 'paper',  // Reference the x position to the paper (entire plot)
        y: 0.5,  // Set the y position to be in the middle vertically
        yref: 'paper',  // Reference the y position to the paper (entire plot)
        textangle: -90  // Set the text angle to make it vertical
    }]
  };

  Plotly.newPlot('pie-chart5', [trace1], layout1);

  // Create Pie Chart 6
  var trace2 = {
      labels: labels,
      values: values2,
      type: 'pie',
      marker: {
          colors: ["mediumaquamarine", "silver", "steelblue", "lightcoral", "lemonchiffon"],
          line: {
              color: 'black',
              width: 1.25
          }
      },
      hole: 0.3,  // hole size adjustment
  };

  var layout2 = {
      title: 'Active and Progressing BC & Non-Smoker VS. Race/Ethnicity',
      legend: {
        title: {
            text: 'Race/Ethnicity',  // Set the title above the legend
          },
        y: 0.5  // Set the y position to be centered
      },
      annotations: [{
        text: 'Number of Smokers_BC_COVID & Non-Smokers_BC_COVID',
        showarrow: false,
        font: {
            size: 10,
            color: '#000000'
        },
        x: 0,  // Set the x position to be on the left side
        xref: 'paper',  // Reference the x position to the paper (entire plot)
        y: 0.5,  // Set the y position to be in the middle vertically
        yref: 'paper',  // Reference the y position to the paper (entire plot)
        textangle: -90  // Set the text angle to make it vertical
    }]
  };

  Plotly.newPlot('pie-chart6', [trace2], layout2);
}).catch(function(error) {
  console.error('Error fetching data:', error);
});