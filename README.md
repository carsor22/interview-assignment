# Lumina Learning Ltd - Assignment Documentation 

## User Guide 

- Start React app (cd into client folder & run react start)

- Start Node server (run node server.js)

## Method Evaluation 

#### A decision on the techologies to be used:

- It seemed that a Javascript based application would be the best way forward. The reasons for this were twofold: firstly, it would be easier to handle the data between the frontend and backend using Nodejs in concurrence with Reactjs. Furthermore, these were web technologies that I was most familiar with. The webapp is divided into an application layer and a view layer.    

#### Prioritisation of the steps towards completing the task:

- An outline of the course of action, by following the agile iterative approach, is central to the project outcome. Most important element: set up Nodejs development environment on the back end. Create a SQLite3 database on the server to store the data objects from the sqldump file. An advantage of SQLite3 is that it serves as a stand alone database that does not require a full client-server environment: this is ideal for projects with a small amount of data. Also setup routing endpoints for API fetch with a proxy key to manage client requests. 

- Access database json data from express api endpoint and render through Reactjs on client side using state management. Design the UI once favourite movie data is passed in successfully. The next stage of the development cycle is to add the functionality option for users to add or remove the list of favourite movies from a dynamic state component.  

- The final step of least concern are the bonus tasks of the assignment. These include adding user authentication (login system) and deploying the application to Heroku. 


## Reflection on challenges & comparison to initial solution:

- There were some challenges over the course of the assignment. I was able to display the movie properties on the client side and design a basic UI, however, this was done manually without fetching the data from the SQLite3 database that was created. This was a limitation as the application layer on the express server, holding the IMDBid json object, was not being targeted to then fetch the API properties (title, poster, plot) from a URL response to be passed down into a useEffect function. It was understood that the API properties from the url could be associated with the IMBDid, within the database, and passed down into the component state. This was attempted, although the logic chain was incomplete to direct the data flow within the state object. It was clear that the state object should hold the movie properties from an API call and render them into the client instead of through a manual input. 


## Reflection on next steps & improvements

- The webapp would be significantly improved if the view layer could respond to proxy requests from the express server and display the data fetched from the API calls. The client side should target the IMDBids in the database. Futhermore, each user in the database could view their own favourite movies if a login system feature was developed. It is possible to deploy the webapp to Heroku if the express server and the client side are connected and a build configuration is made. 



