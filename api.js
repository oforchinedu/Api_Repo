var http = require('http');

function getJSON(connections, cb){

	http.request(connections, function(res){
	var body = '';
	res.on('data', function(chunk){
		body += chunk;
	});

	res.on('end', function(){
		var result = JSON.parse(body);
		cb(null, result);
	});

	res.on('error', cb);

}).on('error', cb)
	.end();
}
//var url = 'states-cities.sqaure-api.com/v1/states';
var connections ={

	host: 'states-and-cities.com',
	port: 80,
	path: '/api/v1/states',
	method: 'GET'
};

getJSON(connections, function(err, result){
	if (err){
		return console.log('Error while trying to get states', err)
	}

	console.log(result);
});