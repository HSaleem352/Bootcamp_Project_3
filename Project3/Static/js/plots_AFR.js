// #################################################################################################################
// ##                                                Timing                                                       ##
// #################################################################################################################

// MILD 

d3.json("/api/v1/AFR_timing_df").then(function(data) {

    var mild = data.map(x => x.Mild);
    var labels = ["0-4 Weeks", "1-3 Months", "+3 Months", "Never"];
  
    var trace = {
      labels: labels,
      values: mild,
      type: "pie"
    };

    var data = [trace];
  
    var layout = {
      title: "Number of Mild Covid Outcomes at Each Time Point",
      margin: {
        l: 200,
        r: 200,
        t: 100,
        b: 100,
      }
      };
  
    Plotly.newPlot("afr_mild_timing_pie", data, layout);
  
  });

// MODERATE

  d3.json("/api/v1/AFR_timing_df").then(function(data) {

    var moderate = data.map(x => x.Moderdate);
    var labels = ["0-4 Weeks", "1-3 Months", "+3 Months", "Never"];
  
    var trace = {
      labels: labels,
      values: moderate,
      type: "pie"
    };

    var data = [trace];
  
    var layout = {
      title: "Number of Moderate Covid Outcomes at Each Time Point",
      margin: {
        l: 200,
        r: 200,
        t: 100,
        b: 100,
      }
      };
  
    Plotly.newPlot("afr_moderate_timing_pie", data, layout);
  
  });

  // SEVERE

  d3.json("/api/v1/AFR_timing_df").then(function(data) {

    var severe = data.map(x => x.Severe);
    var labels = ["0-4 Weeks", "1-3 Months", "+3 Months", "Never"];
  
    var trace = {
      labels: labels,
      values: severe,
      type: "pie"
    };

    var data = [trace];
  
    var layout = {
      title: "Number of Severe Covid Outcomes at Each Time Point",
      margin: {
        l: 200,
        r: 200,
        t: 100,
        b: 100,
      }
      };
  
    Plotly.newPlot("afr_severe_timing_pie", data, layout);
  
  });

  // COMBINED

  d3.json("/api/v1/AFR_timing_df").then(function(data) {

    var combined_mild = data.map(x => x.Mild);
    var combined_mod = data.map(x => x.Moderdate);
    var combined_sev = data.map(x => x.Severe)
    var labels = ["0-4 Weeks", "1-3 Months", "+3 Months", "Never"];
  
    var trace_mild = {
      x: labels,
      y: combined_mild,
      name: "Mild Covid Outcomes",
      marker:{
        color: "rgba(226, 173, 251, 0.8)"},
        type: "bar"
    };

    var trace_mod = {
      x: labels,
      y: combined_mod,
      name: "Moderate Covid Outcomes",
      marker:{
        color: "rgba(249, 251, 173, 0.8)"},
        type: "bar"
    };

    var trace_sev = {
      x: labels,
      y: combined_sev,
      name: "Severe Covid Outcomes",
      marker:{
        color: "rgba(173, 230, 251, 0.8)"},
        type: "bar"
    };

    var data = [trace_mild, trace_mod, trace_sev];
  
    var layout = {
      barmode: "group",
      title: "Mild, Moderate and Severe Covid Outcomes at Each Time Point",
      margin: {
        l: 200,
        r: 200,
        t: 100,
        b: 100,
      }
      };
  
    Plotly.newPlot("afr_timing_bar_grouped", data, layout);
  
  });

// #################################################################################################################
// ##                                                Treatment Type                                               ##
// #################################################################################################################

// MILD

d3.json("/api/v1/afr_treatment_type_df").then(function(data) {

  var mild = data.map(x => x.Mild);
  var labels = ["None", "Cyto", "Targeted", "Endo", "Immuno"];

  var trace = {
    labels: labels,
      values: mild,
      type: "pie"
  };

  var data = [trace];

  var layout = {
    title: "Mild Covid Outcomes for Each Treatment Type",
    margin: {
      l: 200,
      r: 200,
      t: 100,
      b: 100,
    }
    };

  Plotly.newPlot("afr_mild_treatment_pie", data, layout);

});

// MODERATE

d3.json("/api/v1/afr_treatment_type_df").then(function(data) {

  var moderate = data.map(x => x.Moderate);
  var labels = ["None", "Cyto", "Targeted", "Endo", "Immuno"];

  var trace = {
    labels: labels,
    values: moderate,
    type: "pie"
  };

  var data = [trace];

  var layout = {
    title: "Moderate Covid Outcomes for Each Treatment Type",
    margin: {
      l: 200,
      r: 200,
      t: 100,
      b: 100,
    }
    };

  Plotly.newPlot("afr_moderate_treatment_pie", data, layout);

});

// SEVERE

d3.json("/api/v1/afr_treatment_type_df").then(function(data) {

  var severe = data.map(x => x.Severe);
  var labels = ["None", "Cyto", "Targeted", "Endo", "Immuno"];

  var trace = {
    labels: labels,
    values: severe,
    type: "pie"
  };

  var data = [trace];

  var layout = {
    title: "Severe Covid Outcomes for Each Treatment Type",
    margin: {
      l: 200,
      r: 200,
      t: 100,
      b: 100,
    }
    };

  Plotly.newPlot("afr_severe_treatment_pie", data, layout);

});

// COMBINED

d3.json("/api/v1/afr_treatment_type_df").then(function(data) {

  var combined_treat_mild = data.map(x => x.Mild);
  var combined_treat_mod = data.map(x => x.Moderate);
  var combined_treat_sev = data.map(x => x.Severe)
  var labels = ["None", "Cyto", "Targeted", "Endo", "Immuno"];

  var trace_mild = {
    x: labels,
    y: combined_treat_mild,
    name: "Mild Covid Outcomes",
    marker:{
      color: "rgba(226, 173, 251, 0.8)"},
      type: "bar"
  };

  var trace_mod = {
    x: labels,
    y: combined_treat_mod,
    name: "Moderate Covid Outcomes",
    marker:{
      color: "rgba(249, 251, 173, 0.8)"},
      type: "bar"
  };

  var trace_sev = {
    x: labels,
    y: combined_treat_sev,
    name: "Severe Covid Outcomes",
    marker:{
      color: "rgba(173, 230, 251, 0.8)"},
      type: "bar"
  };

  var data = [trace_mild, trace_mod, trace_sev];

  var layout = {
    barmode: "group",
    title: "Mild, Moderate and Severe Covid Outcomes for Different Treatment Types",
    margin: {
      l: 200,
      r: 200,
      t: 100,
      b: 100,
    }
    };

  Plotly.newPlot("afr_treatment_bar_grouped", data, layout);

});