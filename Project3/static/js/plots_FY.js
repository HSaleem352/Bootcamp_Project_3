


d3.json("/obesity_age_effect").then(function(data) {

    var y = ["Mild", "Moderate", "Severe"];
    var x1 = data.map(d => d.mild);
    var x2 = data.map(d => d.moderate);
    var x3 = data.map(d => d.severe);

    console.log(data);

    var trace1 = {
        y: y,
        x: x1,
        type: 'bar',
        orientation: 'h', // Set orientation to horizontal
        name: 'Mild'
    };

    var trace2 = {
        y: y,
        x: x2,
        type: 'bar',
        orientation: 'h', // Set orientation to horizontal
        name: 'Moderate'
    };

    var trace3 = {
        y: y,
        x: x3,
        type: 'bar',
        orientation: 'h', // Set orientation to horizontal
        name: 'Severe'
    };

    var layout = {
        barmode: 'group',
        title: 'Effect of Obesity and Age on COVID-19 Severity',
        xaxis: {
            title: 'Count'
        },
        yaxis: {
            title: 'Severity'
        }
    };

    var data = [trace1, trace2, trace3];

    Plotly.newPlot('boxplot-container', data, layout);

});



// Fetch data from the API endpoint
d3.json("/FYcancer_status_percentage").then(function(data) {
    // Assuming data is [{"cancer_percentage": 24.907, "no_cancer_percentage": 60.31042}]
    var labels = Object.keys(data[0]);
    var values = Object.values(data[0]);

    var trace1 = {
        labels: labels,
        values: values,
        type: 'pie',
        marker: {
            colors: ['rgba(255, 0, 0, 0.7)', 'rgba(0, 0, 255, 0.7)']  // Custom colors (red and blue)
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Distribution of Cancer Status Percentage',
    };

    Plotly.newPlot('cancer-status-chart-container', data, layout);
});



d3.json("/obesity_distribution").then(function(data) {
    var labels = data.map(d => d.der_obesity);
    var values = data.map(d => d.count);
  
    var trace = {
        labels: labels,
        values: values,
        type: 'pie'
    };
  
    var data = [trace];
  
    var layout = {
        title: 'Distribution of Obesity in the Dataset'
    };
  
    Plotly.newPlot('obesity-distribution-chart-container', data, layout);
  });
  



d3.json("/covid_severity_distribution").then(function(data) {
  // Extract unique obesity statuses and severity levels
  var obesityStatuses = [...new Set(data.map(d => d.der_obesity))];
  var severityLevels = [...new Set(data.map(d => d.severity_of_covid_19_v2))];

  // Create traces for each severity level
  var traces = severityLevels.map(severity => {
      return {
          x: obesityStatuses,
          y: data.filter(d => d.severity_of_covid_19_v2 === severity).map(d => d.count),
          type: 'bar',
          name: severity
      };
  });

  var layout = {
      barmode: 'group',
      title: 'Distribution of COVID-19 Severity Levels by Obesity Status',
      xaxis: {
          title: 'Obesity Status'
      },
      yaxis: {
          title: 'Count'
      }
  };

  Plotly.newPlot('covid-severity-distribution-chart-container', traces, layout);
});




//Fetch data from the API endpoint
d3.json('/age_distribution_by_covid_severity').then(function(data) {

    // Extract unique severity levels
    var severityLevels = [...new Set(data.map(d => d.severity_of_covid_19_v2))];

    // Prepare data for the box plot
    var ageDistribution = severityLevels.map(function(severity) {
        return {
            y: data.filter(entry => entry.severity_of_covid_19_v2 === severity).map(entry => entry.der_age_trunc),
            type: 'box',
            name: severity
        };
    });

    // Create a box plot using Plotly
    var layout = {
        title: 'Age Distribution by COVID Severity',
        yaxis: {
            title: 'Age'
        }
    };

    Plotly.newPlot('age-distribution-boxplot', ageDistribution, layout);
});