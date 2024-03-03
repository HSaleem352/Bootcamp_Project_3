// Use D3 to fetch data from the API endpoint
d3.json('/api/v1/percentage_df').then(function(data) {
    console.log(data)
})