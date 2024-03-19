// import json-server library

const jsonServer =  require('json-server')

// create server using create funtion

const mediPlayerServer = jsonServer.create()

// create path for databse server 

const router = jsonServer.router('database.json')

// create middleware to convert json into js

const middleware = jsonServer.defaults()

// connect

mediPlayerServer.use(middleware)
mediPlayerServer.use(router)

// setup port for the server

const port = 4000 || process.env.PORT 

// run the  server 

mediPlayerServer.listen(port,()=>{
    console.log('MediaPlayer server is running sucessfully');
})