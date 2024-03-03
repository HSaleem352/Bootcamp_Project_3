let can_hue_order = ['Remission or no evidence of disease, <5 years', 'Active and responding', 'Active and stable', 'Active and progressing']
let can_colors = ["#169489", "#1E5F94", '#EC6433', "#a6a6a6"]
let can_names = ['Remission', 'Responding', 'Stable', 'Progressing']

let cov_hue_order = ['Mild', 'Moderate', 'Severe']
let cov_names = ['Mild', 'Moderate', 'Severe']
let cov_colors = ["#169489", "#1E5F94", '#EC6433']

var x_ticks = d3.scaleLinear().domain([15, 95])
var kde = kernelDensityEstimator(kernelEpanechnikov(7), x_ticks.ticks(60))

function cancer_traces(data) {
    let traces = []
    for (i in can_hue_order) {
        traces.push({
            x: data.filter(function(d) {
                    return d.der_cancer_status_v4 === can_hue_order[i]
                })
                .map(function(d) {
                    return d.der_age_trunc;
                }),
            y: "",
            //boxpoints: 'all',
            name: can_names[i],
            marker: {
                color: can_colors[i]
            },
            type: 'box',
            //boxmean: false,
            orientation: 'h'
        })
    }
    return traces

}


function plot_cancer_box() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let traces = cancer_traces(data)
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


function plot_covid_box() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let traces = []

        for (i in cov_hue_order) {
            traces.push({
                x: data.filter(function(d) {
                        return d.severity_of_covid_19_v2 === cov_hue_order[i]
                    })
                    .map(function(d) {
                        return d.der_age_trunc;
                    }),
                y: "",
                //boxpoints: 'all',
                name: cov_names[i],
                marker: {
                    color: cov_colors[i]
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
plot_cancer_box()

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


function plot_cancer_desntiy() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let traces = []

        let density = null
        let dat = null
        for (i in can_hue_order) {
            dat = data
                .filter(function(d) {
                    return d.der_cancer_status_v4 === can_hue_order[i]
                })
                .map(function(d) {
                    return d.der_age_trunc;
                })
            density = kde(dat)
            traces.push({
                x: density.map(function(d) {
                    return d[0];
                }),
                y: density.map(function(d) {
                    return (dat.length / data.length) * d[1];
                }),
                line: {
                    color: can_colors[i]
                },
                mode: "lines",
                name: can_names[i],
                type: "scatter",
                hovermode: false
            })
        }

        Plotly.newPlot('density-cancer', traces);
    })
}

function addvector(a,b){
    return a.map((e,i) => e + b[i]);
}

function animate_joint_can_desntiy_v2() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let density = null
        let dat = null
        let y = null 
        let x = null
        let cum_sum = new Array(60).fill(0);
        for (i in can_hue_order) {
            dat = data
                .filter(function(d) {
                    return d.der_cancer_status_v4 === can_hue_order[i]
                })
                .map(function(d) {
                    return d.der_age_trunc;
                })
            density = kde(dat)
            y = density.map(function(d) {
                    return (dat.length / data.length) * d[1];
                })
            x = density.map(function(d) {
            return d[0];
        })
            cum_sum = addvector(cum_sum, y);
            // console.log(cum_sum);
           Plotly.animate('density-cancer', {
                data: [{
                    y: cum_sum,
                    x: x
                }],
                traces: [i],
                layout: {}
            }, {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            })
        }

    })
}


function animate_joint_can_desntiy() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let dat = data
            .map(function(d) {
                return d.der_age_trunc;
            })
        let density = kde(dat)
        let x_data = density.map(function(d) {
            return d[0];
        })
        let y_data = density.map(function(d) {
            return (1 / 2.5) * d[1];
        })

        for (i in can_hue_order) {
            Plotly.animate('density-cancer', {
                data: [{
                    y: y_data,
                    x: x_data
                }],
                traces: [i],
                layout: {}
            }, {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            })
        }

    })
}


function animate_disjoint_can_density() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let density = null
        let dat = null
        for (i in can_hue_order) {
            dat = data
                .filter(function(d) {
                    return d.der_cancer_status_v4 === can_hue_order[i]
                })
                .map(function(d) {
                    return d.der_age_trunc;
                })
            density = kde(dat)

            Plotly.animate('density-cancer', {
                data: [{
                    y: density.map(function(d) {
                        return (dat.length / data.length) * d[1];
                    }),
                    x: density.map(function(d) {
                        return d[0];
                    })
                }],
                traces: [i],
                layout: {}
            }, {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            })
        }
    })
}


function plot_covid_desntiy() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let traces = []

        let density = null
        let dat = null
        for (i in cov_hue_order) {
            dat = data
                .filter(function(d) {
                    return d.severity_of_covid_19_v2 === cov_hue_order[i]
                })
                .map(function(d) {
                    return d.der_age_trunc;
                })
            density = kde(dat)
            traces.push({
                x: density.map(function(d) {
                    return d[0];
                }),
                y: density.map(function(d) {
                    return (dat.length / data.length) * d[1];
                }),
                line: {
                    color: cov_colors[i]
                },
                mode: "lines",
                name: cov_names[i],
                type: "scatter"
            })
        }

        Plotly.newPlot('density-covid', traces);
    })
}


function animate_joint_cov_desntiy() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let dat = data
            .map(function(d) {
                return d.der_age_trunc;
            })
        let density = kde(dat)
        let x_data = density.map(function(d) {
            return d[0];
        })
        let y_data = density.map(function(d) {
            return (1 / 1.5) * d[1];
        })

        for (i in cov_hue_order) {
            Plotly.animate('density-covid', {
                data: [{
                    y: y_data,
                    x: x_data
                }],
                traces: [i],
                layout: {}
            }, {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            })
        }

    })
}


function animate_disjoint_cov_density() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let density = null
        let dat = null
        for (i in cov_hue_order) {
            dat = data
                .filter(function(d) {
                    return d.severity_of_covid_19_v2 === cov_hue_order[i]
                })
                .map(function(d) {
                    return d.der_age_trunc;
                })
            density = kde(dat)

            Plotly.animate('density-covid', {
                data: [{
                    y: density.map(function(d) {
                        return (dat.length / data.length) * d[1];
                    }),
                    x: density.map(function(d) {
                        return d[0];
                    })
                }],
                traces: [i],
                layout: {}
            }, {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            })
        }
    })
}


plot_covid_desntiy()
plot_cancer_desntiy()


function randomize() {
    let random_data = []
    for (let i = 0; i < x_ticks.length; i++) {
        random_data.push(Math.random() / 1000)
    }
    Plotly.animate('density-cancer', {
        data: [{
            y: random_data,
            x: x_ticks.ticks(60)
        }],
        traces: [0],
        layout: {}
    }, {
        transition: {
            duration: 500,
            easing: 'cubic-in-out'
        },
        frame: {
            duration: 500
        }
    })
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}