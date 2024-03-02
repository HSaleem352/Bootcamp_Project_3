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

d3.json("/api/v1/cancer_residence_HS").then(function(response) {

  var labels = response.map(d => d.der_cancer_status_v4);
  var urban = response.map(d => d.urban);
  var suburban = response.map(d => d.suburban);
  var rural = response.map(d => d.rural);

  var trace1 = [{
    values: urban,
    labels: labels,
    domain: {column: 0},
    name: 'Urban',
    hole: .4,
    type: 'pie'
  }];

  var layout1 = {
    title: "Cancer stages in Urban Area",

      height: 800,
      width: 800,
      
    };

    Plotly.newPlot("HS_cancer_urban", trace1, layout1);

  var trace2 = [{
    values: suburban,
    labels: labels,
    domain: {column: 0},
    name: 'Suburban',
    hole: .4,
    type: 'pie'
  }];

  var layout2 = {
    title: "Cancer stages in Suburban Area",

      height: 800,
      width: 800,
      
    };

  Plotly.newPlot("HS_cancer_suburban", trace2, layout2);

  var trace3 = [{
    values: rural,
    labels: labels,
    domain: {column: 0},
    name: 'Rural',
    hole: .4,
    type: 'pie'
  }];

  var layout3 = {
    title: "Cancer stages in Rural Area",

      height: 800,
      width: 800,
      
    };

  Plotly.newPlot("HS_cancer_rural", trace3, layout3);



});

