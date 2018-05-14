// Initialize Firebase
var config = {
	apiKey: "AIzaSyBnTBa6_CuWTULREWsu5q4Lgu_mqGxJGTU",
	authDomain: "live-clickdown-hm.firebaseapp.com",
	databaseURL: "https://live-clickdown-hm.firebaseio.com",
	projectId: "live-clickdown-hm",
	storageBucket: "live-clickdown-hm.appspot.com",
	messagingSenderId: "470929280749"
	};

firebase.initializeApp(config);



var database = firebase.database();

var connectionRef = database.ref("/connections");

var connectedRef = database.ref(".info/connected");

connectedRef.on("value" , function(snap) {
	if (snap.val()) 
		var con = connectionsRef.push(true);

		con.onDisconnect().remove().
	
});

connections.on("value", function(snap) {
	$("#watchers").html(snap.numChildren());
});

var initalValue = 100;
var clickCounter = initalValue;

database.ref("/click").on("value", function(snapshot) {
	console.log(snapshot.val());
	clickCounter = snapshot.val().clickCount;
	console.log(clickCounter);
	$("click-value").html(snapshot.val().clickCount);
	$("#click-value").html(clickCounter);
}, function(errorObject) {
	console.log("The read failed: " + errorObject.code);
});


$('click-button').on("click", function() {
	clickCounter --;

	if (clickCounter === 0) {
		alert("Phew! You made it! That sure was a lot of clicking.");
		clickCounter = initialValue;

	}

	database.ref('/clicks').set({
		clickCount: clickCounter
	});

	console.log(clickCounter);
});


$('#restart-button').on("click", function() {
	clickCounter = intialValue;

	database.ref('/clicks').set ({
		clickCount: clickCounter
	});

	console.log(clickCounter);

	$('#click-value').html(clickCounter);
	
});




