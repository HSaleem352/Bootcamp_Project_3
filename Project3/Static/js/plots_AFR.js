d3.json("/api/v1/AFR_timing_df").then(function(response) {

    // Severity of COVID when treatment given between 0 and 4 weeks

    // var timing = response.der_cancer_tx_timing_v2
    let trace = {
        x: response[0],
        y: response[1],
        marker: {
            color:"blue"},
            type:"bar",
            orientation: "h",
        };

    var data = [trace];

    let layout = {
        title: "Try something",
        margin: {
            l: 200,
            r: 200,
            t: 200,
            b: 50,

        }
    };
    
    Plotly.newPlot("AFR_bar", data, layout);
  
  
  });