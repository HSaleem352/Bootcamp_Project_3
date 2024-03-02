// Load data and create visualizations
function loadDataAndCreateVisualizations() {
    fetch('/obesity_age_effect')
        .then(response => response.json())
        .then(data => {
        
            createHistogram(data);
            createBarChart(data);
            createBoxplot(data);
        
            // Add more visualization functions as needed
        })
        .catch(error => console.error('Error fetching data:', error));
}


// Visualization function for COVID-19 severity distribution (Histogram)
function createHistogram(data) {
    // ...
}

// Visualization function for obesity distribution (Bar chart)
function createBarChart(data) {
    // ...
}

// Visualization function for age distribution by cancer status (Boxplot)
function createBoxplot(data) {
    // ...
}


// Call the function to load data and create visualizations
loadDataAndCreateVisualizations();

