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
6. Is the severity of COVID-19 affected if the individuals live in urban, suburban, or rural areas? - Hamza
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
## References
**Hamza**
creating postgresql engine: https://stackoverflow.com/questions/62688256/sqlalchemy-exc-nosuchmoduleerror-cant-load-plugin-sqlalchemy-dialectspostgre
listing all tables in postgres using SQLAlchemy: https://www.pythonsheets.com/notes/python-sqlalchemy.html
visual for amcharts: https://www.amcharts.com/demos/donut-with-radial-gradient/

**Mina**
-Page structures: https://getbootstrap.com/ , ChatGPT
-Uploading images from GoogleDrive to Our Team page: https://stackoverflow.com/questions/77851898/using-google-drive-link-as-img-src-on-react-app-not-working
-Home page navbar: https://tachyons.io/components/nav/logo-titles-links-centered/index.html











