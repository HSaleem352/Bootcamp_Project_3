// #################################################################################################################
// ##                                                Timing                                                       ##
// #################################################################################################################

// MILD 

d3.json("/api/v1/AFR_timing_df").then(function(data) {

    var mild = data.map(x => x.Mild);
    var labels = ["point 1", "point 2", "point 3", "point 4"];
  
    var trace = {
      x: labels,
      y: mild,
      marker:{
        color: "blue"},
        type: "bar"
    };

    var data = [trace];
  
    var layout = {
      title: "Mild Covid Outcomes at Each Time Point",
      margin: {
        l: 200,
        r: 200,
        t: 200,
        b: 200,
      }
      };
  
    Plotly.newPlot("afr_mild_timing_bar", data, layout);
  
  });

// MODERATE

  d3.json("/api/v1/AFR_timing_df").then(function(data) {

    var moderate = data.map(x => x.Moderdate);
    var labels = ["point 1", "point 2", "point 3", "point 4"];
  
    var trace = {
      x: labels,
      y: moderate,
      marker:{
        color: "blue"},
        type: "bar"
    };

    var data = [trace];
  
    var layout = {
      title: "Moderate Covid Outcomes at Each Time Point",
      margin: {
        l: 200,
        r: 200,
        t: 200,
        b: 200,
      }
      };
  
    Plotly.newPlot("afr_moderate_timing_bar", data, layout);
  
  });

  // SEVERE

  d3.json("/api/v1/AFR_timing_df").then(function(data) {

    var severe = data.map(x => x.Severe);
    var labels = ["point 1", "point 2", "point 3", "point 4"];
  
    var trace = {
      x: labels,
      y: severe,
      marker:{
        color: "blue"},
        type: "bar"
    };

    var data = [trace];
  
    var layout = {
      title: "Severe Covid Outcomes at Each Time Point",
      margin: {
        l: 200,
        r: 200,
        t: 200,
        b: 200,
      }
      };
  
    Plotly.newPlot("afr_severe_timing_bar", data, layout);
  
  });

// #################################################################################################################
// ##                                                Treatment Type                                               ##
// #################################################################################################################

// MILD

d3.json("/api/v1/treatment_type_df").then(function(data) {

  var mild = data.map(x => x.Mild);
  var labels = ["treatment 1", "treatment 2", "treatment 3", "treatment 4", "treatment 5"];

  var trace = {
    x: labels,
    y: mild,
    marker:{
      color: "blue"},
      type: "bar"
  };

  var data = [trace];

  var layout = {
    title: "Mild Covid Outcomes for Each Treatment Type",
    margin: {
      l: 200,
      r: 200,
      t: 200,
      b: 200,
    }
    };

  Plotly.newPlot("afr_mild_treatment_bar", data, layout);

});

// MODERATE

d3.json("/api/v1/treatment_type_df").then(function(data) {

  var mild = data.map(x => x.Moderate);
  var labels = ["treatment 1", "treatment 2", "treatment 3", "treatment 4", "treatment 5"];

  var trace = {
    x: labels,
    y: mild,
    marker:{
      color: "blue"},
      type: "bar"
  };

  var data = [trace];

  var layout = {
    title: "Moderate Covid Outcomes for Each Treatment Type",
    margin: {
      l: 200,
      r: 200,
      t: 200,
      b: 200,
    }
    };

  Plotly.newPlot("afr_moderate_treatment_bar", data, layout);

});

// SEVERE

d3.json("/api/v1/treatment_type_df").then(function(data) {

  var severe = data.map(x => x.Severe);
  var labels = ["treatment 1", "treatment 2", "treatment 3", "treatment 4", "treatment 5"];

  var trace = {
    x: labels,
    y: severe,
    marker:{
      color: "blue"},
      type: "bar"
  };

  var data = [trace];

  var layout = {
    title: "Severe Covid Outcomes for Each Treatment Type",
    margin: {
      l: 200,
      r: 200,
      t: 200,
      b: 200,
    }
    };

  Plotly.newPlot("afr_severe_treatment_bar", data, layout);

});