// Use D3 to fetch data from the API endpoint
d3.json('/api/v1/race_counts').then(function(data) {
   console.log(data)
    var plotData = [{
        values: data.map(d => d.value),
        labels: data.map(d => d.category),
        type: 'pie'
    }];

    // create layout
    var layout = {
        height: 400,
        width: 500,
        title: 'Race Distribution in the study'
    };

    // create graph
    Plotly.newPlot('Race_Distribution_in_the_study', plotData, layout);
});

console.log('3333444')