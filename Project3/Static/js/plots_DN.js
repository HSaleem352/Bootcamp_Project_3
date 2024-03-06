let canHueOrder = ['Remission or no evidence of disease, <5 years', 'Active and responding', 'Active and stable', 'Active and progressing']
let canColors = ["#169489", "#1E5F94", '#EC6433', "#a6a6a6"]
let canNames = ['Remission', 'Responding', 'Stable', 'Progressing']

let covHueOrder = ['Mild', 'Moderate', 'Severe']
let covNames = ['Mild', 'Moderate', 'Severe']
let covColors = ["rgb(22, 148, 137)", "rgb(30, 95, 148)", 'rgb(236, 100, 51)']
let covColorsTransparent = ["rgba(22, 148, 137, .5)", "rgba(30, 95, 148, .5)", 'rgba(236, 100, 51, .5)']


var xTicks = d3.scaleLinear().domain([5, 105])
var kde = kernelDensityEstimator(kernelEpanechnikov(7), xTicks.ticks(60))


function cancerTraces(data) {
    let traces = []
    for (i in canHueOrder) {
        traces.push({
            x: data
                .filter((d) => d.der_cancer_status_v4 === canHueOrder[i])
                .map((d) => d.der_age_trunc),
            y: "",
            name: canNames[i],
            marker: {
                color: canColors[i]
            },
            type: 'box',
            boxmean: true,
            orientation: 'h'
        })
    }
    return traces

}


function plotCancerBox() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let traces = cancerTraces(data)
        var layout = {
            title: '<b>Cancer Status</b> <br>The age distribution for each cancer status is identical. Patients within each <br>cancer status each about <em>58</em> on average.',
            xaxis: {
                title: 'Age',
                zeroline: false
            },
            yaxis: {
                ticks: '',
                showticklabels: false
            },
            legend: {
                traceorder: 'reversed'
            },
            boxmode: 'group',

        };

        Plotly.newPlot('boxplot-cancer', traces, layout);
    })
}


function plotCovidBox() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let traces = []

        for (i in covHueOrder) {
            traces.push({
                x: data
                    .filter((d) => d.severity_of_covid_19_v2 === covHueOrder[i])
                    .map((d) => d.der_age_trunc),
                y: "",
                name: covNames[i],
                marker: {
                    color: covColors[i]
                },
                type: 'box',
                boxmean: true,
                orientation: 'h'
            })
        }

        var layout = {
            title: '<b>Covid Severity</b><br>Patients with Moderate and Severe COVID are <em>8-10 years older</em> on average.',
            xaxis: {
                title: 'Age',
                zeroline: false
            },
            yaxis: {
                ticks: '',
                showticklabels: false
            },

            boxmode: 'group',
            legend: {
                traceorder: 'reversed'
            }

        };

        Plotly.newPlot('boxplot-covid', traces, layout);
    })
}

plotCovidBox()
plotCancerBox()

// Function to compute density
function kernelDensityEstimator(kernel, X) {
    return function(V) {
        return X.map(function(x) {
            return [x, d3.mean(V, function(v) {
                return kernel(x - v);
            })];
        });
    };
}

function kernelEpanechnikov(k) {
    return function(v) {
        return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
    };
}


function plotCancerDensity() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let traces = []
        let density = null,
            dat = null

        for (i in canHueOrder) {
            dat = data
                .filter((d) => d.der_cancer_status_v4 === canHueOrder[i])
                .map((d) => d.der_age_trunc)
            density = kde(dat)
            traces.push({
                x: density.map((d) => d[0]),
                y: density.map((d) => 100 * (dat.length / data.length) * d[1]),
                line: {
                    color: canColors[i]
                },
                mode: "lines",
                name: canNames[i],
                type: "scatter",
                hovermode: false
            })
        }

        Plotly.newPlot('density-cancer', traces);
    })
}

function addvector(a, b) {
    return a.map((e, i) => e + b[i]);
}

function subvector(a, b) {
    return a.map((e, i) => e - b[i]);
}

function animateJointCanDesntiy() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let dat = data.map((d) => d.der_age_trunc)
        let density = kde(dat)
        let x = density.map((d) => d[0])
        let y = density.map((d) => 100 * d[1])
        let layout = {}

        for (i in canHueOrder) {
            layout = {
                hovermode: false
            }
            if (i == (canHueOrder.length - 1)) {
                layout = {
                    hovermode: false,
                    yaxis: {
                        range: [0, Math.max(...y) + .001]
                    },
                    annotations: [{
                        x: 58,
                        y: 2.52,
                        xref: 'x',
                        yref: 'y',
                        text: 'Overall Average age: 58',
                        showarrow: true,
                        arrowhead: 7,
                        ax: -10,
                        ay: -40
                    }]
                }
            }
            Plotly.animate('density-cancer', {
                data: [{
                    y: y,
                    x: x
                }],
                traces: [i],
                layout: layout
            }, {
                transition: {
                    duration: 500,
                    easing: "cubic-in-out"
                },
                frame: {
                    duration: 500
                }
            })
        }

    })
}


function animateDisjointCanDensity() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let density = null,
            dat = null
        let layout = {}
        let x = null,
            y = null
        let max_ = 0
        for (i in canHueOrder) {
            dat = data
                .filter((d) => d.der_cancer_status_v4 === canHueOrder[i])
                .map((d) => d.der_age_trunc)
            density = kde(dat)
            y = density.map((d) => 100 * (dat.length / data.length) * d[1])
            x = density.map((d) => d[0])

            max_ = Math.max(max_, Math.max(...y))
            layout = {hovermode: true}
            if (i == (canHueOrder.length - 1)) {
                layout = {
                    hovermode: true,
                    yaxis: {
                        range: [0, max_ + .001]
                    }
                }
            }
            Plotly.animate('density-cancer', {
                data: [{
                    y: y,
                    x: x
                }],
                traces: [i],
                layout: layout,
            }, {
                transition: {
                    duration: 500,
                    easing: "cubic-in-out"
                },
                frame: {
                    duration: 500.
                    
                }
            })
        }
    })
}


let covDensityMultiplier = 200
let c = 100
let cov_age_annotations = [{
    x: 58,
    y: 0.0377 * (covDensityMultiplier / 2),
    xref: 'x',
    yref: 'y',
    text: 'Average age with <br> <em>Mild</em> COVID: 58',
    font: {
        color: "white",
        size: 14
    },
    showarrow: true,
    arrowhead: 7,
    ax: +10,
    ay: +40
}, {
    x: 68,
    y: 0.0411 * (covDensityMultiplier / 2),
    xref: 'x',
    yref: 'y',
    text: 'Average age with <em>Moderate</em> COVID: 68',
    showarrow: true,
    arrowhead: 7,
    ax: 30,
    ay: -65
}, {
    x: 66,
    y: 0.0456 * (covDensityMultiplier / 2),
    xref: 'x',
    yref: 'y',
    text: 'Average age with <em>Severe</em> COVID: 66',
    showarrow: true,
    arrowhead: 7,
    ax: 30,
    ay: -65
}]

function plotCovidDensity() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let traces = []
        let density = null,
            dat = null
        let x = null,
            y = null
        let hovertemplate
        let y_last = new Array(81).fill(0);
        let max_ = 0

        for (i in covHueOrder) {
            dat = data
                .filter(function(d) {
                    return d.severity_of_covid_19_v2 === covHueOrder[i]
                })
                .map(function(d) {
                    return d.der_age_trunc;
                })
            density = kde(dat)
            x = density.map((d) => d[0])
            y = density.map((d, i) => covDensityMultiplier * (dat.length / data.length) * d[1] + y_last[i])

            hovertemplate = 'Relative:%{customdata:.3f})%<extra>%{fullData.name}</extra>'
            if (i == (covHueOrder.length - 1)) {
                hovertemplate = 'Overall Density:%{y:.3f}% | Relative:%{customdata:.3f})%<extra>%{fullData.name}</extra>'
            }
            max_ = Math.max(max_, Math.max(...y))
            traces.push({
                x: x,
                y: y,
                line: {
                    color: covColors[i],
                },
                fill: "tonexty",
                fillcolor: covColors[i],
                mode: "lines",
                name: covNames[i],
                type: "scatter",
                customdata: subvector(y, y_last),
                hovertemplate: hovertemplate,
                hoverlabel: {
                    font: {
                        color: 'white',
                        size: 18
                    }
                }
            })
            y_last = y
        }
        var layout = {
            // hovermode: false,

            yaxis: {
                range: [.0, max_],
            },
            annotations: cov_age_annotations,
        };
        Plotly.newPlot('density-covid', traces, layout);
    })
}


function getCumulativeSum(arr) {
    let sum = 0;
    let cumulativeSum = []
    arr.map((e) => {
        sum = sum + e;
        cumulativeSum.push(sum);
    })
    return cumulativeSum;
}


function animateCovCDF() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let density = null,
            dat = null
        let layout = null
        let x = null,
            y = null
        let max_ = 0

        let y_last = new Array(81).fill(0);
        for (i in covHueOrder) {
            dat = data
                .filter(function(d) {
                    return d.severity_of_covid_19_v2 === covHueOrder[i]
                })
                .map(function(d) {
                    return d.der_age_trunc;
                })
            density = kde(dat)
            x = density.map((d) => d[0])
            y = getCumulativeSum(density.map((d) => d[1]))
                .map((d, j) => 2 * (dat.length / data.length) * d + y_last[j])
            y_last = y

            layout = {
                hovermode: false
            }
            if (i == (covHueOrder.length - 1)) {
                layout = {
                    hovermode: false,
                    yaxis: {
                        range: [0, 1.001]
                    },
                }
            }
            Plotly.animate('density-covid', {
                data: [{
                    y: y,
                    x: x
                }],
                traces: [i],
                layout: layout,
            }, {
                transition: {
                    duration: 500,
                    easing: "cubic-in-out"
                },
                frame: {
                    duration: 500
                }
            })
        }
    })
}


function animateCovCDFv2() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let density = null,
            dat = null
        let layout = {}
        let x = null,
            y = null
        let max_ = 0

        let y_last = new Array(81).fill(0);
        for (i in covHueOrder) {
            dat = data
                .filter(function(d) {
                    return d.severity_of_covid_19_v2 === covHueOrder[i]
                })
                .map(function(d) {
                    return d.der_age_trunc;
                })
            density = kde(dat)
            x = density.map((d) => d[0])
            y = getCumulativeSum(density.map((d) => d[1]))
            max_ = Math.max(...y)
            y = y.map((d) => d / max_)

            layout = {}
            if (i == (covHueOrder.length - 1)) {
                layout = {
                    yaxis: {
                        range: [0, 1.001]
                    }
                }
            }
            Plotly.animate('density-covid', {
                data: [{
                    y: y,
                    x: x
                }],
                traces: [i],
                layout: layout,
            }, {
                transition: {
                    duration: 500,
                    easing: "cubic-in-out"
                },
                frame: {
                    duration: 500
                }
            })
        }
    })
}


function animateDisjointCovDensity() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let traces = []
        let density = null,
            dat = null
        let layout = {}
        let x = null,
            y = null
        let y_last = new Array(81).fill(0);
        let max_ = 0

        for (i in covHueOrder) {
            dat = data
                .filter((d) => d.severity_of_covid_19_v2 === covHueOrder[i])
                .map((d) => d.der_age_trunc)
            density = kde(dat)
            x = density.map((d) => d[0])
            y = density.map((d, i) => covDensityMultiplier * (dat.length / data.length) * d[1] + y_last[i])
            y_last = y

            max_ = Math.max(max_, Math.max(...y))
            layout = {
                hovermode: false
            }
            if (i == (covHueOrder.length - 1)) {
                layout = {
                    hovermode: false,
                    yaxis: {
                        range: [0, max_ + .001]
                    },
                    annotations: cov_age_annotations
                }
            }
            Plotly.animate('density-covid', {
                data: [{
                    y: y,
                    x: x
                }],
                traces: [i],
                layout: layout,
            }, {
                transition: {
                    duration: 500,
                    easing: "cubic-in-out"
                },
                frame: {
                    duration: 500
                }
            })
        }
    })
}


plotCovidDensity()
plotCancerDensity()

function getDividerTrace(y) {
    return {
        x: [-3, 103],
        y: [y, y],
        mode: 'lines',
        showlegend: false,
        hoverinfo: 'skip',
        line: {
            color: 'grey',
            dash: 'dot',
            width: 1
        }
    }
}

function plotDotPlot() {
    d3.json("/api/v1/outcome_rates").then(function(data) {

        var rows = ['Severe', 'Moderate', 'Covid Mild', "  ", 'Responding', 'Stable', 'Progressing', 'Cancer Remission', " ", '80+', '65-79', '50-64', '35-49', 'Ages 18-34', "", 'All patients'];

        var traceLine = getDividerTrace('')
        var traceLine2 = getDividerTrace(' ')
        var traceLine3 = getDividerTrace('  ')
        let fontSize = 18;

        var trace1 = {
            type: 'scatter',
            x: data.map((d) => d.der_deadbinary),
            y: rows,
            mode: 'markers',
            name: 'death',
            marker: {
                color: '#025951',
                line: {
                    color: '#025951',
                    width: 2,
                },
                symbol: 'circle',
                size: fontSize
            }
        };

        var trace2 = {
            x: data.map((d) => d.der_mv),
            y: rows,
            mode: 'markers',
            name: "mechanical ventilation",
            marker: {
                color: 'rgba(8, 51, 89, 0.1)',
                line: {
                    color: 'rgba(8, 51, 89, 1)',
                    width: 2,
                },
                symbol: "triangle-down",
                size: fontSize
            }
        };

        var trace3 = {
            x: data.map((d) => d.der_ICU),
            y: rows,
            mode: 'markers',
            name: "ICU",
            marker: {
                color: 'rgba(166, 33, 3, .01)',
                line: {
                    color: 'rgba(166, 33, 3, 1)',
                    width: 1,
                },
                symbol: 'circle',
                size: fontSize
            }
        };

        var trace4 = {
            x: data.map((d) => d.der_hosp),
            y: rows,
            mode: 'markers',
            name: "hospitalization",
            marker: {
                color: 'rgba(0, 0, 0, .25)',
                line: {
                    color: 'rgba(0, 0, 0, .25)',
                    width: 1,
                },
                symbol: 'circle',
                size: fontSize
            }
        };

        var data = [trace1, traceLine, traceLine2, traceLine3, trace2, trace3, trace4];

        var layout = {
            title: '<b>Probability of Severe Outcomes</b><br>Adults over the age of 35 are more likely to <i>require time in the ICU</i>, <i>require mechanical ventilation given a COVID diagnosis</span>, <br>and <i>experience higher mortality and hospitalization rates</i> with increase in age.',

            yaxis: {
                showgrid: true,
                showline: false,
                tickfont: fontSize
            },
            xaxis: {
                showgrid: false,
                showline: true,
                linecolor: 'rgb(102, 102, 102)',
                titlefont: {
                    font: {
                        color: 'rgb(204, 204, 204)'
                    }
                },
                tickfont: {
                    font: {
                        color: 'rgb(102, 102, 102)'
                    }
                },
                autotick: false,
                dtick: 20,
                ticks: 'outside',
                tickcolor: 'rgb(102, 102, 102)'
            },
            margin: {
                l: 150
            },
            legend: {
                yanchor: 'middle',
                xanchor: 'right',
                font: {
                    size: fontSize,
                },
            },
            height: 600,

            hovermode: 'closest'
        };

        Plotly.newPlot('mortality-dots', data, layout);

    })
}
plotDotPlot()