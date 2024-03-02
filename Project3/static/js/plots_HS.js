d3.json("/api/v1/residence_counts").then(function(response) {

  var names = response.map(d => d.urban_rural);
  var values = response.map(d => d.count);

  var trace = [{
    values: values,
    labels: names,
    domain: {column: 0},
    hole: .4,
    type: 'pie'
  }];

  var layout = {
    title: "Distribution of Patients' residence",

      height: 600,
      width: 600,
      
    };

  Plotly.newPlot("HS_pie", trace, layout);


});


d3.json("/api/v1/severity_residence_HS").then(function(response) {

  //var names = response.map(d => d.severity_of_covid_19_v2);
  var mild = response.map(d => d.Mild);
  var morderate = response.map(d => d.Moderate);
  var severe = response.map(d => d.Severe);
  var labels = ['Urban', 'Suburban', 'Rural'];


  var trace1 = {
    x: labels,
    y: mild,
    name: 'Mild',
    type: 'bar',
    marker: {
      color: 'rgba(255, 182, 193, 0.7)' 
    }
  };

  var trace2 = {
    x: labels,
    y: morderate,
    name: 'Moderate',
    type: 'bar',
    marker: {
      color: 'rgba(143, 116, 230, 0.7)'  
    }
  };

  var trace3 = {
    x: labels,
    y: severe,
    name: 'Severe',
    type: 'bar',
    marker: {
      color: 'rgba(173, 216, 230, 0.7)'  
    }
  };

  var layout = {
    barmode: 'group',
    height: 800,
    width: 1200,
    title: 'Severity of covid 19 vs cases of Covid-19 for each residence type',
    xaxis: {
      title: 'Residence Type'  
    },
    yaxis: {
      title: 'Cases of Covid-19' 
    }
  };

  var data = [trace1, trace2, trace3];

  Plotly.newPlot("HS_severity_bar", data, layout);


});

