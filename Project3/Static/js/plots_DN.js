function plot_covid_box() {
    d3.json("/api/v1/age_status_severity").then(function(data) {
        let hue_order = ['Remission or no evidence of disease, <5 years', 'Active and responding', 'Active and stable', 'Active and progressing']
        let names = ['Remission', 'Responding', 'Stable', 'Progressing']
        let colors = ["#169489", "#1E5F94", '#EC6433', "#a6a6a6"]
        let traces = []
        let x = null

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
        let x = null

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