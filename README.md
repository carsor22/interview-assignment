# Lumina Learning Ltd - Assignment Documentation 

## User Guide 

- Start React app (cd into client folder & run react start)

- Start Node server (run node server.js)


## Method Evaluation 

#### A decision on the techologies to be used:

- It seemed that a Javascript based application would be the best way forward. The reasons for this were twofold: firstly, it would be easier to handle the data between the frontend and backend using Nodejs in concurrence with Reactjs. Furthermore, these were web technologies that I was most familiar with. The webapp is divided into an application layer and a view layer.    

#### Prioritisation of the steps towards completing the task:

- An outline of the course of action, by following the agile iterative approach, is central to the project outcome. 

        1. Most important element: set up Nodejs development environment on the back end. Create a SQLite3 database on the server to store the data objects from the sqldump file. An advantage of SQLite3 is that it serves as a stand alone database that does not require a full client-server environment: this is ideal for small projects with a small amount of data. Also setup routing endpoints for API fetch with a proxy key to manage client requests. 

        2. Access database json data from express api endpoint and render through Reactjs on client side using state management. Design the UI once favourite movie data is passed in successfully. 

        3. The next stage of the development cycle is to add the functionality option for users to add or remove the list of favourite movies. This can be done using vanilla javascript DOM manipulation. 

        4. The final step of least concern are the bonus tasks of the assignment. These include adding user authentication (login system) and deploying the application to Heroku. 

## Reflection on challenges, limitations & setbacks of initial solution:

## Reflection on next steps, improvements, and modifications:
