function plot_covid_box() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let hue_order = ['Remission or no evidence of disease, <5 years', 'Active and responding', 'Active and stable', 'Active and progressing']
        let names = ['Remission', 'Responding', 'Stable', 'Progressing']
        let colors = ["#169489", "#1E5F94", '#EC6433', "#a6a6a6"]
        let traces = []

        for (i in hue_order) {
            traces.push({
                x: data.filter(function(d) {
                        return d.der_cancer_status_v4 === hue_order[i]
                    })
                    .map(function(d) {
                        return d.der_age_trunc;
                    }),
                y: "",
                //boxpoints: 'all',
                name: names[i],
                marker: {
                    color: colors[i]
                },
                type: 'box',
                //boxmean: false,
                orientation: 'h'
            })
        }

        var layout = {
            title: 'Cancer Status',
            xaxis: {
                title: 'Age',
                zeroline: false
            },
            yaxis: {
                ticks: '',
                showticklabels: false
            },

            boxmode: 'group',

        };

        Plotly.newPlot('boxplot-cancer', traces, layout);
    })
}

function plot_can_box() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let hue_order = ['Mild', 'Moderate', 'Severe']
        let names = ['Mild', 'Moderate', 'Severe']
        let colors = ["#169489", "#1E5F94", '#EC6433']
        let traces = []

        for (i in hue_order) {
            traces.push({
                x: data.filter(function(d) {
                        return d.severity_of_covid_19_v2 === hue_order[i]
                    })
                    .map(function(d) {
                        return d.der_age_trunc;
                    }),
                y: "",
                //boxpoints: 'all',
                name: names[i],
                marker: {
                    color: colors[i]
                },
                type: 'box',
                //boxmean: false,
                orientation: 'h'
            })
        }

        var layout = {
            title: 'Covid Severity',
            xaxis: {
                title: 'Age',
                zeroline: false
            },
            yaxis: {
                ticks: '',
                showticklabels: false
            },

            boxmode: 'group',

        };

        Plotly.newPlot('boxplot-covid', traces, layout);
    })
}

plot_covid_box()
plot_can_box()

// Function to compute density
function kernelDensityEstimator(kernel, X) {
  return function(V) {
    return X.map(function(x) {
      return [x, d3.mean(V, function(v) { return kernel(x - v); })];
    });
  };
}
function kernelEpanechnikov(k) {
  return function(v) {
    return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
  };
}

function plot_covid_desntiy_v1() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        var x = d3.scaleLinear()
            .domain([15, 95])
            .range([0, 1000]);

        var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(60))
        var density1 = kde(data.map(function(d) {
            return d.der_age_trunc;
        }))

        var trace1 = {
            x: density1.map(function(d) {
                return d[0];
            }),
            y: density1.map(function(d) {
                return d[1];
            }),
            mode: "lines",
            name: "Fair",
            type: "scatter"
        };
        Plotly.newPlot('density', [trace1]);
    })
}
// plot_covid_desntiy()
    
    
function plot_cancer_desntiy() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let hue_order = ['Remission or no evidence of disease, <5 years', 'Active and responding', 'Active and stable', 'Active and progressing']
        let names = ['Remission', 'Responding', 'Stable', 'Progressing']
        let colors = ["#169489", "#1E5F94", '#EC6433', "#a6a6a6"]
        let traces = []

        var x = d3.scaleLinear()
            .domain([15, 95])
            .range([0, 1000]);
        
        var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(60))
        
        let density = null
        let dat = null
        for (i in hue_order) {
            dat = data
                .filter(function(d) {return d.der_cancer_status_v4 === hue_order[i]})
                .map(function(d) {return d.der_age_trunc;})
            density = kde(dat)
            traces.push({
            x: density.map(function(d) {
                return d[0];
            }),
            y: density.map(function(d) {
                return (dat.length/data.length)*d[1];
            }),
            line: {color: colors[i]}, 
            mode: "lines",
            name: names[i],
            type: "scatter"
        })
        }

        Plotly.newPlot('density-cancer', traces);
    })
}


    
function plot_covid_desntiy() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let hue_order = ['Mild', 'Moderate', 'Severe']
        let names = ['Mild', 'Moderate', 'Severe']
        let colors = ["#169489", "#1E5F94", '#EC6433']
        let traces = []

        var x = d3.scaleLinear()
            .domain([15, 95])
            .range([0, 1000]);
        
        var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(60))
        
        let density = null
        let dat = null
        for (i in hue_order) {
            dat = data
                .filter(function(d) {return d.severity_of_covid_19_v2 === hue_order[i]})
                .map(function(d) {return d.der_age_trunc;})
            density = kde(dat)
            traces.push({
            x: density.map(function(d) {
                return d[0];
            }),
            y: density.map(function(d) {
                return (dat.length/data.length)*d[1];
            }),
            line: {color: colors[i]}, 
            mode: "lines",
            name: names[i],
            type: "scatter"
        })
        }

        Plotly.newPlot('density-covid', traces);
    })
}

plot_covid_desntiy()
plot_cancer_desntiy()