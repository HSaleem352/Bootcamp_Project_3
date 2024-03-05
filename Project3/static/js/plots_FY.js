


d3.json("/obesity_age_effect").then(function(data) {

    var x = ["Mild", "Moderate", "Severe"];
    var y1 = data.map(d => d.mild);
    var y2 = data.map(d => d.moderate);
    var y3 = data.map(d => d.severe);

    console.log(data)

    


    var trace1 = {
        x: x,
        y: y1,
        type: 'box'
      };
      
      var trace2 = {
        x: x,
        y: y2,
        type: 'box'
      };

      var trace3 = {
        x: x,
        y: y3,
        type: 'box'
      };
      
      var data = [trace1, trace2, trace3];
    
    Plotly.newPlot('boxplot-container', data);

    

});


// Load data and create visualizations
// function loadDataAndCreateVisualizations() {
//     fetch('/obesity_age_effect')
//         .then(response => response.json())
//         .then(data => {
        
//             createHistogram(data);
//             createBarChart(data);
//             createBoxplot(data);
        
//             // Add more visualization functions as needed
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }

// d3.json("/obesity_age_effect").then(function(data) {

//     console.log(data)

//     // trace1 = createHistogram(data);
//     // trace2 = createBarChart(data);
//     // trace3 = createBoxplot(data);

//     // Plotly.newPlot("histogram-container", trace1, trace2, trace3);

// });


// // Visualization function for COVID-19 severity distribution (Histogram)
// function createHistogram(data) {
//     // ...
// }

// // Visualization function for obesity distribution (Bar chart)
// function createBarChart(data) {
//     // ...
// }

// // Visualization function for age distribution by cancer status (Boxplot)
// function createBoxplot(data) {
//     // ...
// }


// // Call the function to load data and create visualizations
// loadDataAndCreateVisualizations();

