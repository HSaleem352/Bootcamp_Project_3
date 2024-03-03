// This will be displayed in api call '/hamza'


d3.json("/api/v1/residence_counts").then(function(response) {

  // Read the Data
  var names = response.map(d => d.urban_rural);
  var count = response.map(d => d.count);
  var figure = [];

  for (let i = 0; i < names.length; i++) {
    figure.push(
    {labels: names[i], values: count[i]}
    )
  }

  //Create root element
  var root = am5.Root.new("residence_pie");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root),
  ]);

  // setting colors
  // series.get("colors").set("colors", [
  //   am5.color(0x095256),
  //   am5.color(0x087f8c),
  //   am5.color(0x5aaa95),
  //   am5.color(0x86a873),
  //   am5.color(0xbb9f06)
  // ]);

  // Create chart
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50),
    layout: root.horizontalLayout
  }));
  // Creating the series template
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    name: "Residence",
    valueField: "values",
    categoryField: "labels"
  }));
  // Setting the data
  series.data.setAll(figure)

  // Disabling labels and ticks
  series.labels.template.set("visible", false);
  series.ticks.template.set("visible", false);

  // Adding gradients
  series.slices.template.set("strokeOpacity", 0);
  series.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
    stops: [{
      brighten: -0.8
    }, {
      brighten: -0.8
    }, {
      brighten: -0.5
    }, {
      brighten: 0
    }, {
      brighten: -0.5
    }]
  }));

  // Create legend
  var legend = chart.children.push(am5.Legend.new(root, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    layout: root.verticalLayout
  }));
  // set value labels align to right
  legend.valueLabels.template.setAll({ textAlign: "right" })
  // set width and max width of labels
  legend.labels.template.setAll({ 
    maxWidth: 140,
    width: 140,
    oversizedBehavior: "wrap"
  });

  legend.data.setAll(series.dataItems);

  // // Add chart title
  // var title = chart.titles();
  // title.text = "Distribution of Patients' Residence";
  // title.fontSize = 25;
  // title.marginBottom = 30;


  // Play initial series animation
  series.appear(1000, 100);


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

    var figure1 = [];

    for (let i = 0; i < labels.length; i++) {
      figure1.push(
      {labels: labels[i], values: urban[i]}
      )
    }

    //Create root element
  var root = am5.Root.new("graph1");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root),
  ]);

  // setting colors
  // series.get("colors").set("colors", [
  //   am5.color(0x095256),
  //   am5.color(0x087f8c),
  //   am5.color(0x5aaa95),
  //   am5.color(0x86a873),
  //   am5.color(0xbb9f06)
  // ]);

  // Create chart
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50),
    layout: root.horizontalLayout
  }));
  // Creating the series template
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    name: "Cancer Status in Urban",
    valueField: "values",
    categoryField: "labels"
  }));
  // Setting the data
  series.data.setAll(figure1)

  // Disabling labels and ticks
  series.labels.template.set("visible", false);
  series.ticks.template.set("visible", false);

  // Adding gradients
  series.slices.template.set("strokeOpacity", 0);
  series.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
    stops: [{
      brighten: -0.8
    }, {
      brighten: -0.8
    }, {
      brighten: -0.5
    }, {
      brighten: 0
    }, {
      brighten: -0.5
    }]
  }));

  // Create legend
  var legend = chart.children.push(am5.Legend.new(root, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    layout: root.verticalLayout
  }));
  // set value labels align to right
  legend.valueLabels.template.setAll({ textAlign: "right" })
  // set width and max width of labels
  legend.labels.template.setAll({ 
    maxWidth: 140,
    width: 140,
    oversizedBehavior: "wrap"
  });

  legend.data.setAll(series.dataItems);

  // Play initial series animation
  series.appear(1000, 100);

  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  var figure2 = [];

    for (let i = 0; i < labels.length; i++) {
      figure2.push(
      {labels: labels[i], values: suburban[i]}
      )
    }

    //Create root element
  var root = am5.Root.new("graph2");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root),
  ]);

  // Create chart
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50),
    layout: root.horizontalLayout
  }));
  // Creating the series template
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    name: "Cancer Status in SubUrban",
    valueField: "values",
    categoryField: "labels"
  }));
  // Setting the data
  series.data.setAll(figure2)

  // Disabling labels and ticks
  series.labels.template.set("visible", false);
  series.ticks.template.set("visible", false);

  // Adding gradients
  series.slices.template.set("strokeOpacity", 0);
  series.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
    stops: [{
      brighten: -0.8
    }, {
      brighten: -0.8
    }, {
      brighten: -0.5
    }, {
      brighten: 0
    }, {
      brighten: -0.5
    }]
  }));

  // Create legend
  var legend = chart.children.push(am5.Legend.new(root, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    layout: root.verticalLayout
  }));
  // set value labels align to right
  legend.valueLabels.template.setAll({ textAlign: "right" })
  // set width and max width of labels
  legend.labels.template.setAll({ 
    maxWidth: 140,
    width: 140,
    oversizedBehavior: "wrap"
  });

  legend.data.setAll(series.dataItems);

  // Play initial series animation
  series.appear(1000, 100);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var figure3 = [];

    for (let i = 0; i < labels.length; i++) {
      figure3.push(
      {labels: labels[i], values: rural[i]}
      )
    }

    //Create root element
  var root = am5.Root.new("graph3");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root),
  ]);

  // Create chart
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50),
    layout: root.horizontalLayout
  }));
  // Creating the series template
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    name: "Cancer Status in Rural",
    valueField: "values",
    categoryField: "labels"
  }));
  // Setting the data
  series.data.setAll(figure3)

  // Disabling labels and ticks
  series.labels.template.set("visible", false);
  series.ticks.template.set("visible", false);

  // Adding gradients
  series.slices.template.set("strokeOpacity", 0);
  series.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
    stops: [{
      brighten: -0.8
    }, {
      brighten: -0.8
    }, {
      brighten: -0.5
    }, {
      brighten: 0
    }, {
      brighten: -0.5
    }]
  }));

  // Create legend
  var legend = chart.children.push(am5.Legend.new(root, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    layout: root.verticalLayout
  }));
  // set value labels align to right
  legend.valueLabels.template.setAll({ textAlign: "right" })
  // set width and max width of labels
  legend.labels.template.setAll({ 
    maxWidth: 140,
    width: 140,
    oversizedBehavior: "wrap"
  });

  legend.data.setAll(series.dataItems);

  // Play initial series animation
  series.appear(1000, 100);

 
});



function toggleGraph(graphNumber) {
  // Hide all graphs
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`graph${i}`).classList.add('hidden');
  }
  document.getElementById(`graph${graphNumber}`).classList.remove('hidden');

  // Show the selected graph
  document.getElementById(`graph${graphNumber}`).classList.remove('hidden');
}

function enlargeButton(button) {
  button.style.transform = 'scale(1.05)';
}

function resetButton(button) {
  button.style.transform = 'scale(1)';
}




// var labels = response.map(d => d.der_cancer_status_v4);
//   var urban = response.map(d => d.urban);
//   var suburban = response.map(d => d.suburban);
//   var rural = response.map(d => d.rural);

//   var trace1 = [{
//     values: urban,
//     labels: labels,
//     domain: {column: 0},
//     name: 'Urban',
//     hole: .4,
//     type: 'pie'
//   }];

//   var layout1 = {
//     title: "Cancer stages in Urban Area",

//       height: 800,
//       width: 800,
      
//     };

//     Plotly.newPlot("graph1", trace1, layout1);

//   var trace2 = [{
//     values: suburban,
//     labels: labels,
//     domain: {column: 0},
//     name: 'Suburban',
//     hole: .4,
//     type: 'pie'
//   }];

//   var layout2 = {
//     title: "Cancer stages in Suburban Area",

//       height: 800,
//       width: 800,
      
//     };

//   Plotly.newPlot("graph2", trace2, layout2);

//   var trace3 = [{
//     values: rural,
//     labels: labels,
//     domain: {column: 0},
//     name: 'Rural',
//     hole: .4,
//     type: 'pie'
//   }];

//   var layout3 = {
//     title: "Cancer stages in Rural Area",

//       height: 800,
//       width: 800,
      
//     };

//   Plotly.newPlot("graph3", trace3, layout3);
