const http = require('http'); // import du module http
const port = 8000; // port d'écoute du serveur

/* const requestHandler = (request, response) => {  //création d'un gestionnaire de requête, avec 2 paramètres : objet request et objet response
    console.log(request.url);
    response.end('Hello Node.js Server!');
  }; */

  const requestHandler = (request, response) => {
    console.log(request.url);
    if (request.url === '/') {
      response.end('Hello Node.js Server!');
    } else if (request.url === '/about') {
      response.end('This demonstrates routing with Node.js.');
    } else {
      response.end('Default page (URLs other than / and /about)');
    }
  };

  const server = http.createServer(requestHandler); //création du serveur
  server.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`Server is listening on ${port}`);
    }
  }); //écoute du serveur sur le port 8000

  //lancer le serveur : node server.js

  // Routage
  // Jusqu'ici, le serveur répond à toutes les requêtes de la même manière. Need modification selon l'url visée. (ligne 9)

 