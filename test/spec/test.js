var Client = require('../../lib/node-rest-client.js').Client;
var testServer = require('../test-servers.js');



console.log('START jasmine');

describe("Test Connection API",function(){

	
	var https_proxy_XML={
		proxy:{
			host:"proxy.indra.es",
			port:8080,
			user:"aacero",
			password:"nostromo73"
		},
		isXML:true,
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

	it("should connect to HTTP site with JSON",function(done){
		var client = new Client();

		client.registerMethod("testJson", "http://localhost:4444/json", "GET");

		client.methods.testJson(function(data,response){
			expect(typeof data).toBe("object");
			expect(data.catalog).toBeDefined();
			done();
		});


		client.get("http://localhost:4444/json", function(data, response){
			expect(typeof data).toBe("object");
			expect(data.catalog).toBeDefined();
			done();
		});
		
	});
	
	
	it("should connect to HTTP site with XML",function(done){
		var client = new Client(default_config);

		client.registerMethod("testXML", "http://localhost:4444/xml", "GET");

		client.methods.testXML(function(data, response){
			expect(typeof data).toBe("object");
			expect(data.catalog).toBeDefined();
			done();
		});


		client.get("http://localhost:4444/xml", function(data, reponse){
			expect(typeof data).toBe("object");
			expect(data.catalog).toBeDefined();
			done();
		});

	});
		
	
	it("should connect to HTTP site passing path, args and headers",function(done){
		var client = new Client(default_config),
		args ={
				path:{"id":120},
				parameters:{arg1:"hello",arg2:"world"},
				headers:{"test-header":"client-api"}
			  };

		client.registerMethod("testJson", "http://localhost:4444/${id}/json", "GET");

		client.methods.testJson(args,function(data, response){
			expect(typeof data).toBe("object");
			expect(data.catalog).toBeDefined();
			done();
		});


		client.get("http://localhost:4444/${id}/json?arg1=hello&arg2=world",args, function(data){
			expect(typeof data).toBe("object");
			expect(data.catalog).toBeDefined();
			done();
		});


		args ={
				path:{"id":120,"arg1":"hello","arg2":"world"},
				parameters:{arg1:"hello",arg2:"world"},
				headers:{"test-header":"client-api"}
			  };


		client.get("http://localhost:4444/${id}/json?arg1=${arg1}&arg2=${arg2}",args, function(data){
			expect(typeof data).toBe("object");
			expect(data.catalog).toBeDefined();
			done();
		});
		
	});

	it("should connect to HTTP site and post, put data",function(done){
		var client = new Client(default_config),
		args ={
				headers:{"test-header":"client-api"},
				data:"{\"hello\":\"world\"}"
			  };

		args_json={
				headers:{"test-header":"client-api"},
				data:{"hello":"world"}
		};

		client.registerMethod("postData", "http://localhost:4444/json?post", "POST");
		client.registerMethod("putData", "http://localhost:4444/json?post", "PUT");


		client.methods.postData(args,function(data, response){
			expect(typeof data).toBe("object");
			expect(data.hello).toBeDefined();
			done();
		});


		client.post("http://localhost:4444/json?post",args, function(data){
			expect(typeof data).toBe("object");
			expect(data.hello).toBeDefined();
			done();
		});
		
		client.post("http://localhost:4444/json?post",args_json, function(data){
			expect(typeof data).toBe("object");
			expect(data.hello).toBeDefined();
			done();
		});


		client.methods.putData(args,function(data, response){
			expect(typeof data).toBe("object");
			expect(data.hello).toBeDefined();
			done();
		});


		client.put("http://localhost:4444/json?post",args, function(data){
			expect(typeof data).toBe("object");
			expect(data.hello).toBeDefined();
			done();
		});

		client.put("http://localhost:4444/json?post",args_json, function(data){
			expect(typeof data).toBe("object");
			expect(data.hello).toBeDefined();
			done();
		});

	});


	
});

/*


	
	it("should connect to HTTPS/HTTP site through proxy",function(done){

		var client = new Client(https_proxy_XML),
			args   = {red:"api"};

		client.registerMethod("allPosts", "https://api.del.icio.us/v1/posts/all", "GET");


		client.get("https://api.del.icio.us/v1/posts/all?red=api",function(data){
			should.exist(data);
			(data.length > 0).should.be.true;
		});

		client.methods.allPosts(args,function(data){
			should.exist(data);
			(data.length > 0).should.be.true;
		});

		done();
	});





	it("should process JSON response payload",function(done){
		done();
	});


	it("should process XML response payload",function(done){
		done();
	});

	it("should execute GET method",function(done){
		done();
	});
	
	it("should execute POST method",function(done){
		var client = new Client(default_config),
			args   = {red:"api"};

			
		done();
	});

	it("should execute PUT method",function(done){
		done();
	});

	it("should execute DELETE method",function(done){
		done();
	});
*/










