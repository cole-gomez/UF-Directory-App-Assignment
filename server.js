

var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);



  if (request.method === 'GET' && request.url === '/listings') {
	//send response: status code 200 & fill data w/ listingsData
   
    	response.writeHead(200,{'Content-Type':'application/json'});
	response.write(listingData);
   	response.end();
	
  } else {
	response.writeHead(404, {'Content-Type':'text/plain'});
	response.write("Bad Gateway Error");
    response.end();
  }
};


fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
	
	if (err){
		console.log("error");
		return;
	}
	//save data:    listingsData = data?
	listingData = data;


	server = http.createServer(requestHandler);
	server.listen(8080);

	console.log('server started');
	
});















