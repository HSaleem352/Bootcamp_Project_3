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
  
  let trace1 = {
    x: names,
    y: values,
    type: "bar"
  };

  let layout = {
    title: "residence_counts"

  };

  Plotly.newPlot("plot", trace1, layout);

  });