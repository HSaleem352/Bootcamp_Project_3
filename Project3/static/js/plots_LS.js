let url = '/api/v1/race_counts'


d3.json(url).then(function(data) {
   console.log(data)
    var trace1 = [{
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
    Plotly.newPlot('race_counts', trace1, layout);
});

console.log('3333444')