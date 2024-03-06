// JavaScript functions for toggling hidden content
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}



// Fetch data from the Flask route for obesity distribution in people with breast cancer (active and responding)
d3.json('/obesity_distribution_active_responding').then(function(data) {

    // Extracting data for plotting the bar chart
    var labelsBarChart = data.map(d => d.der_obesity);
    var valuesBarChart = data.map(d => d.count);

    // Creating a bar chart using Plotly
    var traceBarChart = {
        x: labelsBarChart,
        y: valuesBarChart,
        type: 'bar',
        marker: {
            color: 'rgba(0, 123, 255, 0.7)'  
        },
        name: 'Obesity Distribution'
    };

    var layoutBarChart = {
        title: 'Distribution of Obesity in People with Breast Cancer (Active and Responding)',
        xaxis: {
            title: 'Obesity Status'
        },
        yaxis: {
            title: 'Number of Cases'
        }
    };

    var chartDataBarChart = [traceBarChart];

    // Create the bar chart
    Plotly.newPlot("obesity-distribution-chart-sunburst", chartDataBarChart, layoutBarChart);

    // Extracting data for plotting the sunburst chart
    var labelsSunburst = data.map(d => d.der_obesity);
    var valuesSunburst = data.map(d => d.count);

    // Creating a hierarchical structure for the sunburst chart
    var traceSunburst = {
        labels: labelsSunburst,
        parents: Array(labelsSunburst.length).fill(''),
        values: valuesSunburst,
        type: 'sunburst',
        marker: {
            colors: ['rgba(255, 0, 0, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(0, 0, 255, 0.7)']  
        },
        name: 'Obesity Distribution'
    };

    var layoutSunburst = {
        title: 'Sunburst Chart of Obesity Distribution',
    };

    var chartDataSunburst = [traceSunburst];

    // Create the sunburst chart
    Plotly.newPlot('obesity-distribution-chart-sunburst', chartDataSunburst, layoutSunburst);
});



// Fetch data from the API endpoint
d3.json("/FYcancer_status_percentage").then(function(data) {

    var labels = Object.keys(data[0]);
    var values = Object.values(data[0]);

    var trace1 = {
        labels: labels,
        values: values,
        type: 'pie',
        marker: {
            colors: ['rgba(255, 0, 0, 0.7)', 'rgba(0, 0, 255, 0.7)']  
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
