// Lets display data on client
if (Meteor.isClient) {

  Template.myApp.helpers({
  	myOrgs: function(){
  		return Organizations.find({});
  	}

  });

  Template.myApp.events({
    'click': function () {
    }
  });
}

