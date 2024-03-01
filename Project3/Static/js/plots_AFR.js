d3.json("/api/v1/AFR_timing_df").then(function(data) {

    var mild = data.mild;
    var moderate = data.moderate;
    var severe = data.severe;
    var labels = ["0-4 months", "point 2", "point 3", "point 4"]
    var x_axis = [1, 2, 3, 4]
  
    var trace = {
      x: x_axis,
      y: mild,
      text: labels,
      marker:{
        color: "blue"},
        type: "bar",
        orientation: "v",
    };

    var data = [trace];
  
    var layout = {
      title: "Mild Covid Outcomes",
  
        height: 600,
        width: 600,
        
      };
  
    Plotly.newPlot("mild_bar", data, layout);
  
  
  });
  