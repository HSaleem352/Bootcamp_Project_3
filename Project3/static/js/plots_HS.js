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
  var urban = response.map(d => d.urban);
  var suburban = response.map(d => d.suburban);
  var rural = response.map(d => d.rural);
  var labels = ['Mild', 'Morderate', 'Severe'];


  var trace1 = {
    x: labels,
    y: urban,
    name: 'Urban',
    type: 'bar',
    marker: {
      color: 'rgba(255, 182, 193, 0.7)' 
    }
  };

  var trace2 = {
    x: labels,
    y: suburban,
    name: 'Suburban',
    type: 'bar',
    marker: {
      color: 'rgba(143, 116, 230, 0.7)'  
    }
  };

  var trace3 = {
    x: labels,
    y: rural,
    name: 'Rural',
    type: 'bar',
    marker: {
      color: 'rgba(173, 216, 230, 0.7)'  
    }
  };

  var layout = {
    barmode: 'group',
    title: 'Covid-19 Cases for each residence type vs Severity of covid 19',
    xaxis: {
      title: 'Severity'  
    },
    yaxis: {
      title: 'Number of cases' 
    }
  };

  var data = [trace1, trace2, trace3];

  Plotly.newPlot("HS_severity_bar", data, layout);


});

