// Use D3 to fetch data from the API endpoint

d3.json("/residence").then(function(response) {

  console.log(response.count)
  dict = response.count
  names = []
  values = []

  for (let key in dict) {
    if (dict.hasOwnProperty(key)) {
      names.push(key)
      values.push(dict[key])
      // console.log("Key:", key);
      // console.log("Value:", dict[key]);
    }
  }
  console.log(names)
  console.log(values)

  var trace1 = [{
    values: values,
    labels: names,
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };


  Plotly.newPlot("plot", trace1, layout);

  });