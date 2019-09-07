## Setup - Intial Packages Required
-- install Postgresql
-- install python 3+ 
-- install nodejs
-- npm install -g @angular/cli 

## Seting/Running up individual components
-- Postgresql and PgAdmin 4: Create a table and name the coloumns: Year(integer), Race(character varying), Sex(character varying), Average_Life_Expectancy) and import the csv file(marking header option) in charts-server folder in the repo.

-- Angular: If you come across -dev @angular-devkit/build-angular error use: npm install --save-dev @angular-devkit/build-angular.
            Then navigate to the charts folder and use: ng serve --open command
            
-- Packages/Commands for running : pip install flask, pip install flask_cors, pip install flask-restful, pip install Flask-Jsonpify,
                                    pip install psycopg2
