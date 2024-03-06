// This will be displayed in api call '/hamza'
const hide = el => el.style.setProperty("display", "none");
const show = el => el.style.setProperty("display", "block");

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
      color: 'cornflowerblue',
      line: {width: 1} 
    }
  };

  var trace2 = {
    x: labels,
    y: morderate,
    name: 'Moderate',
    type: 'bar',
    marker: {
      color: 'lightblue',
      line: {width: 1}  
    }
  };

  var trace3 = {
    x: labels,
    y: severe,
    name: 'Severe',
    type: 'bar',
    marker: {
      color: 'palegreen',  
      line: {width: 1}
    }
  };

  var layout = {
      barmode: 'group',
      // height: 800,
      // width: 1200,
      title: 'Severity of Covid 19 vs cases of Covid-19 for each residence type',
      font: {
          family: "'Times New Roman', Times, serif", // Set the desired font
          size: 22, // Set the font size
          color: 'black', // Set the font color
          bold: 'normal' // Set the font weight (normal or bold)
      },
      xaxis: {
          title: {
            text: 'Residence Type', 
            font: {
              size: 20 // Set the font size for the x-axis title
            }},
          tickfont: {
            size: 16 // Set the font size for the x-axis ticks
            },

          },
          yaxis: {
              title: {
                  text: 'Cases of Covid-19',
                  font: {
                    size: 20 // Set the font size for the x-axis title
                  }},
              tickfont: {
                size: 16 // Set the font size for the x-axis ticks
                },
            
          }
  }

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
    am5themes_Material.new(root)
  ]);

  // Create chart
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50),
    layout: root.horizontalLayout
  }));
  // Creating the series template
  var series1 = chart.series.push(am5percent.PieSeries.new(root, {
    name: "Cancer Status in Urban",
    valueField: "values",
    categoryField: "labels"
  }));
  // Setting the data
  series1.data.setAll(figure1)

  // Disabling labels and ticks
  series1.labels.template.set("visible", false);
  series1.ticks.template.set("visible", false);

  // Adding gradients
  series1.slices.template.set("strokeOpacity", 0);
  series1.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
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
  var legend1 = chart.children.push(am5.Legend.new(root, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    layout: root.verticalLayout
  }));
  // set value labels align to right
  legend1.valueLabels.template.setAll({ textAlign: "right" })
  // set width and max width of labels
  legend1.labels.template.setAll({ 
    maxWidth: 140,
    width: 140,
    oversizedBehavior: "wrap"
  });

  legend1.data.setAll(series1.dataItems);

  // Play initial series animation
  series1.appear(1000, 100);

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
    am5themes_Material.new(root)
  ]);

  // Create chart
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50),
    layout: root.horizontalLayout
  }));
  // Creating the series template
  var series2 = chart.series.push(am5percent.PieSeries.new(root, {
    name: "Cancer Status in SubUrban",
    valueField: "values",
    categoryField: "labels"
  }));
  // Setting the data
  series2.data.setAll(figure2)

  // Disabling labels and ticks
  series2.labels.template.set("visible", false);
  series2.ticks.template.set("visible", false);

  // Adding gradients
  series2.slices.template.set("strokeOpacity", 0);
  series2.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
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
  var legend2 = chart.children.push(am5.Legend.new(root, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    layout: root.verticalLayout
  }));
  // set value labels align to right
  legend2.valueLabels.template.setAll({ textAlign: "right" })
  // set width and max width of labels
  legend2.labels.template.setAll({ 
    maxWidth: 140,
    width: 140,
    oversizedBehavior: "wrap"
  });

  legend2.data.setAll(series2.dataItems);

  // Play initial series animation
  series2.appear(1000, 100);

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
    am5themes_Material.new(root)
  ]);

  // Create chart
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50),
    layout: root.horizontalLayout
  }));
  // Creating the series template
  var series3 = chart.series.push(am5percent.PieSeries.new(root, {
    name: "Cancer Status in Rural",
    valueField: "values",
    categoryField: "labels"
  }));
  // Setting the data
  series3.data.setAll(figure3)

  // Disabling labels and ticks
  series3.labels.template.set("visible", false);
  series3.ticks.template.set("visible", false);

  // Adding gradients
  series3.slices.template.set("strokeOpacity", 0);
  series3.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
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
  var legend3 = chart.children.push(am5.Legend.new(root, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    layout: root.verticalLayout
  }));
  // set value labels align to right
  legend3.valueLabels.template.setAll({ textAlign: "right" })
  // set width and max width of labels
  legend3.labels.template.setAll({ 
    maxWidth: 140,
    width: 140,
    oversizedBehavior: "wrap"
  });

  legend3.data.setAll(series3.dataItems);

  // Play initial series animation
  series3.appear(1000, 100);
 
});



function toggleGraph(graphNumber) {
  // Hide all graphs



  for (let i = 1; i <= 3; i++) {
      hide(document.getElementById(`g_container${i}`) );
      hide(document.getElementById(`graph${i}`) );
      hide(document.getElementById(`g${i}_title`) );
  } 

  show(document.getElementById(`g_container${graphNumber}`) );
  show(document.getElementById(`graph${graphNumber}`) );
  show(document.getElementById(`g${graphNumber}_title`) );

}

function showAll() {

  for (let i = 1; i <= 3; i++) {
    show(document.getElementById(`g_container${i}`) );
    show(document.getElementById(`graph${i}`) );
    show(document.getElementById(`g${i}_title`) );
} 

  
}



