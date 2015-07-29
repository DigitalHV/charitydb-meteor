// Simple Data object 
var Org = function(){
	return  {
		// from IRS data
		ein: null,
		name: null,
		city: null,
		state: null,
		country: null,
		deductibility: null,
		status: null,

		// from us
		site_url: null,
		logo_url: null,
		wiki_url: null,
		complete: false,
		verified: false,
		created: null
	}
};

// Initialize from a text record (source:IRS)
var createOrg = function (record){
	var _data = record.split("|");
	var _org = new Org();

	_org._id = _data[0];  // ein = unique
	_org.ein = _data[0];

	_org.name = _data[1];
	_org.city = _data[2];
	_org.state = _data[3];
	_org.country = _data[4];
	_org.deductibility = _data[5].split(",");

	_org.site_url = null;
	_org.logo_url = null;
	_org.wiki_url = null;
	_org.complete = false;
	_org.verified = false;
	_org.created = new Date();
	return _org;
};

// Load fixture data
var loadFixtures = function(){
	console.log("Loading initial fixtures..");
  	Assets.getText('data.txt', function(err, res){
  		if (err){
  			console.log("Error loading data!");
  		}

  		else {
  			console.log("Loaded data!");
  			var data = res.split('\r\n'),
  				org = null,
  				header = true;
  			_.each(data, function(record, index){
  				if (header) { header=false;}
  				else {
  					org = createOrg(record);
  					Organizations.insert(org);
  				}
  			})
  		}
  	});
}

// Let's read in data into Mongo on server side
if (Meteor.isServer) {
  Meteor.startup(function () {
  	if (Organizations.find().count()===0)
  		loadFixtures();
  });
}

