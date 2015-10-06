//var searchDiv = $("#search");

function Profile(nickname, description, picUrl) {
	this.nickname = nickname;
	this.description = description;
	this.picUrl = picUrl;
}

var dummyProfiles = [new Profile("Jack007", "Lorem ipsum dolor sit amet, consectetur...", "dummy.jpg"),
				new Profile("Jason", "Lorem ipsum dolor sit amet, consectetur...", "jackson.jpg"),
				new Profile("Molson", "Lorem ipsum dolor sit amet, consectetur...", "Chuck.jpeg"),
				new Profile("Lala", "Lorem ipsum dolor sit amet, consectetur...", "dummy.jpg"),
				new Profile("Lolo", "Lorem ipsum dolor sit amet, consectetur...", "carrey.jpg"),
				new Profile("President", "Lorem ipsum dolor sit amet, consectetur...", "dummy.jpg"),
				new Profile("CupCake", "Lorem ipsum dolor sit amet, consectetur...", "Chuck.jpeg"),
				new Profile("Lover", "Lorem ipsum dolor sit amet, consectetur...", "rambo.jpg")];

function filterByNick(profiles, nick) {
	console.log("filter");

	var filtered = [];
	profiles.forEach(function(item) {
		if(item.nickname.toLowerCase().indexOf(nick.toLowerCase()) >= 0) {
			filtered.push(item);
		}
	});
	return filtered;
}
function renderProfiles(profiles, renderTo) {
	console.log("render");
	profiles.forEach(function(item) {
		var data = "<li class='searchItem ui-shadow' style=\"display:none;\"> Nickname: " + item.nickname + '<br> <img src="' + item.picUrl + '">';
		$(data).prependTo(renderTo).fadeIn(1000);
	});
	
}
renderProfiles(dummyProfiles, "#profileList ul");
//$("#makeSearch").click(function() {
$("#searchField").keyup(function() {
	$("#profileList ul").empty();
	renderProfiles(filterByNick(dummyProfiles, $("#searchField").val()), "#profileList ul");
});