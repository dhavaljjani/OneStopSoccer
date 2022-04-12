//for football-data.org
let API_KEY = '95302cdd6b314a0a834875835cdd7a15'
let URL = ""

const xhttps = new XMLHttpRequest();
xhttps.addEventListener("load", function onLoad () {
	//console.log(this.responseText);
	var parser = new DOMParser();
	var htmlDoc = parser.parseFromString(this.responseText, 'text/html');
	htmlDoc.getElementsByTagName('a');
});
xhttps.open("GET", "https://en.wikipedia.org/wiki/2022_Major_League_Soccer_season");
xhttps.send();
document.addEventListener('DOMContentLoaded', async () => {
	document.getElementById("ytlink").onclick = function () {
		chrome.tabs.create({ url: 'https://www.youtube.com/c/mls/featured' });
	};
});

$.ajax({
	headers: { 'X-Auth-Token': API_KEY },
	url: "http://api.football-data.org/v2/matches?status=LIVE",
	dataType: 'json',
	type: 'GET',
  }).done(function(response) {
	// do something with the response 
	console.log(response);
	//const json = JSON.parse(response);
  });