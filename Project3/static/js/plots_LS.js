let url = '/api/v1/race_counts';
d3.json(url).then(function(data) {
    console.log(data);
    var trace1 = [{
        values: data.map(d => d.count), 
        labels: data.map(d => d.Race), 
        type: 'pie'
    }];

    var layout = {
        height: 400,
        width: 500,
        title: 'Race Distribution in the study'
    };
    
    Plotly.newPlot('race-counts-pie-chart', trace1, layout);
});



let url2 = '/api/v1/covid_severity_count_by_race'
d3.json(url2).then(function(data) {
    console.log(data)
    let trace2 = [
        {
            x: data.map(d => d.Race),
            y: data.map(d => d.Mild),
            name: 'Mild',
            type: 'bar'
        },
        {
            x: data.map(d => d.Race),
            y: data.map(d => d.Moderate),
            name: 'Moderate',
            type: 'bar'
        },
        {
            x: data.map(d => d.Race),
            y: data.map(d => d.Severe),
            name: 'Severe',
            type: 'bar'
        }
    ];

    
    let layout = {
        barmode: 'group',
        title: 'COVID-19 Severity by Race',
        xaxis: {title: 'Race'},
        yaxis: {title: 'Number of Cases'}
    };

    
    Plotly.newPlot('covid-severity-bar-chart', trace2, layout);
});
