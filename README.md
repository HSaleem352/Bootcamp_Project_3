# Breast Cancer Research Group

## Description of Project
Our project 3 will focus on Breast Cancer data analysis. We will be continuing with our data set from project one and performing a data visualization. Our data set will come from the COVID-19 and Cancer Consortium (CCC19) breast cancer and racial disparities outcomes study. It consists of demographic data for patients with Breast Cancer and COVID-19 and provides information on their COVID-19 outcomes.

## Questions we are asking of the data:

What are the sociodemographic and clinical factors that influence adverse outcomes: 
1. How does the timing and type of their breast cancer treatment affect their COVID-19 outcomes? - Alex
2. Is smoking a factor in severe COVID-19 for individuals with Breast Cancer? - Mina
3. Amongst all the races with different BC statuses, is smoking a factor for them to have COVID-19? - Mina
4. How does race/ethnicity affect COVID with Breast Cancer? - Shan
5. Does obesity and age have an effect on COVID-19 with Breast Cancer? - Fozia
6. Are the severity of COVID-19 and the cancer status affected if the individuals live in urban, suburban, or rural areas? - Hamza
7. What is the isolated effect of age on the risk of COVID-19 and Breast Cancer outcomes? - Dean

## Members of the group
- Hamza Saleem - @HSaleem352
- Mina Bagheri - @minalbm
- Dean Ninalga - @Ninalgad 
- Fozia - @FoziaY
- Shan Lian - @Lians03
- Alejandra - @AlejandraFeatherston

## Work Breakdown
- Finding the database: All group members
- SQL and data reading: Hamza
- Flask: All group members
- Plot creation: All group members
- Home page: Mina and Hamza
- Our Team, Limitations & References pages: Mina
- Question 1 related page: Alejandra
- Question 2 related page: Mina
- Question 3 related page: Mina
- Question 4 related page: Shan
- Question 5 related page: Fozia
- Question 6 related page: Hamza
- Question 7 related page: Dean

## Instructions on how to use and interact with the project
- Open app.py and run the application.
- open the local host server: http://127.0.0.1:5000
- Use the navigation bar to move through the webapp
- Scroll down to view the page contents
- Use the buttons in the home page to access the question pages
- Use the navigation bar to return to homepage
- Follow directions on the pages to interact with elements

## Efforts for ethical considerations made in the project

## Dataset:
Nagaraj, G., Khaki, A., & Shah, D. (2023). Covid-19 and Cancer Consortium (CCC19) breast cancer and racial disparities outcomes study. Zenodo. https://doi.org/10.5281/zenodo.7644334

## Code Snippets
**Mina**

Home page question cards animation:
```python
.card-link .card {
    transition: transform 0.3s ease-in-out;
    width: 100%; /* Set a fixed width for the card */
}

.card-link:hover .card {
    transform: scale(1.08); /* Increase the size on hover, adjust as needed */
    transition: 0.7s;
    box-shadow: 0px 0px 2px 2px darkgrey;     
}
```
Removing the blue color hyperlink:
```python
.icon-link:hover {
    color: inherit;
}
```
Flip cards:
```python
    <script>
        function flipCard(card) {
            card.classList.toggle('flipped');
        }
    </script>
//css//
.card.flipped {
    transform: rotateY(180deg);
}
```
Card click expand:
```python
    <script>
        document.querySelectorAll('.card').forEach(function(card) {
            card.addEventListener('click', function() {
                var targetCollapse = card.getAttribute('data-target');
                var isExpanded = $(targetCollapse).hasClass('show');
    
                // If the explanation is not expanded, expand it
                if (!isExpanded) {
                    $(targetCollapse).collapse('show');
                }
            });
        });
    </script>
```

**Hamza**

amCharts library was used for donut graphs,
plotli was used for bar graph,
animate.css library was used for the home page animation,
bootstrap library was used for collapse buttons.


### SQL Postgres from Render:

for writing data to the server:
with engine.connect() as connection:
    residence_counts.to_sql('api_endpoint',connection)

for reading data from the server:
with engine.connect() as connection:
        df = pd.read_sql('api_endpoint',connection)


### Gradient Donut Graph:
// Read the Data
  var names = response.map(d => d.urban_rural);
  var count = response.map(d => d.count);
  var figure = [];

  for (let i = 0; i < names.length; i++) {
    figure.push(
    {labels: names[i], values: count[i]}
    )
  }

  //Create root element
  var root = am5.Root.new("residence_pie");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root),
  ]);

  // Create chart
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50),
    layout: root.horizontalLayout
  }));
  // Creating the series template
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    name: "Residence",
    valueField: "values",
    categoryField: "labels"
  }));
  // Setting the data
  series.data.setAll(figure)

  // Disabling labels and ticks
  series.labels.template.set("visible", false);
  series.ticks.template.set("visible", false);

  // Adding gradients
  series.slices.template.set("strokeOpacity", 0);
  series.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
    stops: [{
      brighten: -0.8
    }, {
      brighten: -0.8
    }, {
      brighten: -0.5
    }, {
      brighten: 0
    }, {
      brighten: -0.5
    }]
  }));

  // Create legend
  var legend = chart.children.push(am5.Legend.new(root, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    layout: root.verticalLayout
  }));
  // set value labels align to right
  legend.valueLabels.template.setAll({ textAlign: "right" })
  // set width and max width of labels
  legend.labels.template.setAll({ 
    maxWidth: 140,
    width: 140,
    oversizedBehavior: "wrap"
  });

  legend.data.setAll(series.dataItems);


  // Play initial series animation
  series.appear(1000, 100);



## References
**Hamza**
creating postgresql engine: https://stackoverflow.com/questions/62688256/sqlalchemy-exc-nosuchmoduleerror-cant-load-plugin-sqlalchemy-dialectspostgre
listing all tables in postgres using SQLAlchemy: https://www.pythonsheets.com/notes/python-sqlalchemy.html
visual for amcharts: https://www.amcharts.com/demos/donut-with-radial-gradient/
pic for home page: https://healthcare.utah.edu/huntsmancancerinstitute/sites/g/files/zrelqx336/files/styles/freeform_phone/public/migrate_images/mammo-mask.jpg?h=bdbe9ddb&itok=VPDk9U4v
animations: https://animate.style/


**Mina**
-Page structures: https://getbootstrap.com/ , ChatGPT
-Uploading images from GoogleDrive to Our Team page: https://stackoverflow.com/questions/77851898/using-google-drive-link-as-img-src-on-react-app-not-working
-Home page navbar: https://tachyons.io/components/nav/logo-titles-links-centered/index.html











