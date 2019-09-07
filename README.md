## Setup - Intial Packages Required
-- install Postgresql
-- install python 3+ 
-- install nodejs
-- npm install -g @angular/cli 

## Setting/Running up individual components
Step 1: Postgresql and PgAdmin 4:  Create a table with table name: life_death_rate and name the coloumns: Year(integer), Race(character varying), Sex(character varying), Average_Life_Expectancy) and import the csv file(marking header option) located in charts-server folder in the repo into your life_death_rate table. Change the password for your postgresDB in the database.ini file 

Step 2: Packages/Commands for running server: You need to move to https://github.com/manisaisrinivask/weather_data/tree/master/charts-server on your local, then use the following commands for installing dependecies:
pip install flask, pip install flask_cors, pip install flask-restful, pip install Flask-Jsonpify, pip install psycopg2. Run the server.py file to get the server running. 

Step3: Angular: If you come across -dev @angular-devkit/build-angular error use: npm install --save-dev @angular-devkit/build-angular.
            Then navigate to https://github.com/manisaisrinivask/weather_data/tree/master/charts in your local and use: ng serve --open.
            Noe the application should load up in the browser.
 

##Cheers##
            
                                    
 
