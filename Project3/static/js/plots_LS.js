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
        title: 'Race Distribution in the Study'
    };
    
    Plotly.newPlot('race-counts-pie-chart', trace1, layout);
});

////////////////////////////////////////////////////////

let url2 = '/api/v1/covid_severity_count_by_race'
d3.json(url2).then(function(data) {
    console.log(data);
    let trace2 = [
        {
            x: data.map(d => d.Race),
            y: data.map(d => d.Mild),
            name: 'Mild',
            type: 'bar',
            marker: {
                color: 'rgba(255, 182, 193, 0.7)' }
        },
        {
            x: data.map(d => d.Race),
            y: data.map(d => d.Moderate),
            name: 'Moderate',
            type: 'bar',
            marker: {
                color: 'rgba(143, 116, 230, 0.7)'  
              }
        },
        {
            x: data.map(d => d.Race),
            y: data.map(d => d.Severe),
            name: 'Severe',
            type: 'bar',
            marker: {
                color: 'rgba(173, 216, 230, 0.7)'  
              }
        }
    ];

    
    let layout = {
        barmode: 'group',
        title: 'COVID-19 Severity by Race',
        xaxis: {title: 'Race'},
        yaxis: {title: 'COVID-19 Severity by Race'}
    };

    
    Plotly.newPlot('covid-severity-bar-chart', trace2, layout);
});


////////////////////////////////////////////////////////
const raceToChartIdMap = {
    'Hispanic': '1',
    'Non-Hispanic AAPI': '2',
    'Non-Hispanic Black': '3',
    'Non-Hispanic White': '4',
    'Other': '5'
};

let url3 = '/api/v1/cancer_status_sum'
d3.json(url3).then(function(data) {
    let groupedData = d3.group(data, d => d.Race);

    groupedData.forEach(function(values, race) {
        let labels = values.map(d => d['Cancer Status']);
        let counts = values.map(d => d.Count);
        let chartIdSuffix = raceToChartIdMap[race]; // 获取映射的ID后缀
        if (!chartIdSuffix) {
            console.error('Unknown race category:', race);
            return; // 如果种族不在映射中，则跳过
        }

        let trace = {
            labels: labels,
            values: counts,
            type: 'pie',
            textinfo: "label+percent",
            insidetextorientation: "radial"
        };

        let layout = {
            title: `${race} Cancer Status Distribution`,
        };

        // 使用映射的ID后缀构建正确的图表ID
        let chartId = `graph${chartIdSuffix}`;

        // 绘制饼图
        Plotly.newPlot(chartId, [trace], layout);
    });
});


// let url3 = '/api/v1/cancer_status_sum'

// d3.json(url3).then(function(data) {
//     // Group data by Race
//     let groupedData = d3.group(data, d => d.Race);

//     // For each race, prepare data and plot a pie chart
//     groupedData.forEach(function(values, race) {
//         let labels = values.map(d => d['Cancer Status']);
//         let counts = values.map(d => d.Count);

//         let trace = {
//             labels: labels,
//             values: counts,
//             type: 'pie',
//             textinfo: "label+percent",
//             insidetextorientation: "radial"
//         };

//         let layout = {
//             title: `${race} Cancer Status Distribution`,
//         };

//         // Use a switch or if-else chain to determine the right div ID based on race
//         let chartId;
//         switch(race) {
//             case 'Hispanic':
//                 chartId = 'hispanic-chart';
//                 break;
//             case 'Non-Hispanic AAPI':
//                 chartId = 'aapi-chart';
//                 break;
//             case 'Non-Hispanic Black':
//                 chartId = 'black-chart';
//                 break;
//             case 'Non-Hispanic White':
//                 chartId = 'white-chart';
//                 break;
//             case 'Other':
//                 chartId = 'other-chart';
//                 break;
//             default:
//                 console.error('Unknown race category:', race);
//                 return; // Skip unknown categories
//         }

//         // Plot the pie chart for this race
//         Plotly.newPlot(chartId, [trace], layout);
//     });
// });



// let url3 = '/api/v1/cancer_status_sum'




function toggleGraph(graphNumber) {
    // Hide all graphs
  
    for (let i = 1; i <= 5; i++) {
        hide(document.getElementById(`g_container${i}`) );
        hide(document.getElementById(`graph${i}`) );
        hide(document.getElementById(`g${i}_title`) );
    } 
  
    show(document.getElementById(`g_container${graphNumber}`) );
    show(document.getElementById(`graph${graphNumber}`) );
    show(document.getElementById(`g${graphNumber}_title`) );
  
  }
  
  function show(element) {
    if (element) {
        element.style.display = 'block'; 
    }
}

function hide(element) {
    if (element) {
        element.style.display = 'none';
    }
}


function showAll() {
    for (let i = 1; i <= 5; i++) {
        show(document.getElementById(`g_container${i}`));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showAll(); // display all when launch
});