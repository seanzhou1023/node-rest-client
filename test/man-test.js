var Client = require('../lib/node-rest-client.js').Client;
var testServer = require('./test-servers.js');
	var https_proxy_XML={
		proxy:{
			host:"proxy.indra.es",
			port:8080,
			user:"aacero",
			password:"nostromo73"
		},		
		user:"acero",
		password:"nostromo"
	},
	https_proxy_JSON ={
		proxy:{
			host:"proxy.indra.es",
			port:8080,
			user:"aacero",
			password:"nostromo73"
		},
		user:"acero",
		password:"nostromo"
	},
	default_config ={};

	
	var client = new Client(default_config),
		args = null;

	client.registerMethod("testJson", "http://127.0.0.1:4444/json", "GET");

	client.methods.testJson(null,null,function(data){
		console.log(data);
		
	});


	client.get("http://localhost:4444/json",null,function(data){
		console.log(data);
	});

		
		
	