d3.json("/api/HS/residence_counts").then(function(response) {

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

