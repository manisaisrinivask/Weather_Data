## Setup - Intial Packages Required
-- install Postgresql
-- install python 3+ 
-- install nodejs
-- npm install -g @angular/cli 

## Seting/Running up individual components
-- Postgresql and PgAdmin 4:  Create a table with table name: life_death_rate and name the coloumns: Year(integer), Race(character varying), Sex(character varying), Average_Life_Expectancy) and import the csv file(marking header option) in charts-server folder in the repo. Change the password for your postgresDB in the database.ini file 

-- Packages/Commands for running server: pip install flask, pip install flask_cors, pip install flask-restful, pip install Flask-Jsonpify,
                                    pip install psycopg2. Run the server.py file to get the server running. 

-- Angular: If you come across -dev @angular-devkit/build-angular error use: npm install --save-dev @angular-devkit/build-angular.
            Then navigate to the charts folder and use: ng serve --open
           
##Cheers
            
                                    
 
