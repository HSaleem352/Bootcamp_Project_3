import plotly.graph_objects as go

d3.json("/HS/residence").then(function(response) {

  var names = response.map(d => d.urban_rural);
  var values = response.map(d => d.count);

  var trace = [{
    values: values,
    labels: names,
    type: 'pie'
  }];

  var layout = {
      height: 600,
      width: 600
    };

  fig = go.Figure(data=[go.Pie(labels=names, values=values, hole=.5)])

  Plotly.newPlot("HS_pie", fig, layout);


});









  // console.log(response)
  // dict = response
  // names = []
  // values = []

  // for (let key in dict) {
  //   if (dict.hasOwnProperty(key)) {
  //     names.push(key)
  //     values.push(dict[key])
      // console.log("Key:", key);
      // console.log("Value:", dict[key]);
  //   }
  // }

  // var trace1 = [{
  //   values: values,
  //   labels: names,
  //   type: 'pie'
  // }];
  
  // var layout = {
  //   height: 400,
  //   width: 500
  // };


  // Plotly.newPlot("HS_pie", trace1, layout);

  