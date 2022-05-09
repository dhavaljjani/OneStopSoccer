//for football-data.org
let API_KEY = '95302cdd6b314a0a834875835cdd7a15'
let competitionCode = ["PL", "PD", "BL1", "FL1", "SA"];
var matchJSON;


//for MLS data
const xhttps = new XMLHttpRequest();
xhttps.addEventListener("load", function onLoad () {
	//console.log(this.responseText);
	var parser = new DOMParser();
	var htmlDoc = parser.parseFromString(this.responseText, 'text/html');
	htmlDoc.getElementsByTagName('a');
	console.log(htmlDoc);
});
xhttps.open("GET", "https://en.wikipedia.org/wiki/2022_Major_League_Soccer_season");
xhttps.send();
document.addEventListener('DOMContentLoaded', async () => {
	document.getElementById("ytlink").onclick = function () {
		chrome.tabs.create({ url: 'https://www.youtube.com/c/mls/featured' });
	};
});

//onload function adds an event listener to selection
window.onload=function(){
	//make sure it executes after DOM fully loads.
	document.getElementById("matchesButton").addEventListener("click", returnMatches);
	document.getElementById("standingsButton").addEventListener("click", returnStandings);
}

let today = new Date().toISOString().slice(0, 10)

function returnMatches(){
	//clear divs
	document.getElementById('matches').innerHTML = "";
	//document.getElementById('detailsButton').innerHTML = "";

	// Premier League, La Liga, BundesLiga, Ligue 1, Seria A codes
	
	//This code gets the value of the league selector ui and converts it to a number we can use to correspond with football data api
	var leagueCode = leagueSelect();

	//API CALL
	$.ajax({
		headers: { 'X-Auth-Token': API_KEY },
		url: "http://api.football-data.org/v2/competitions/" + competitionCode[leagueCode] + "/matches?status=FINISHED",
		dataType: 'json',
		type: 'GET',
	}).done(function(response) {
		//response is JSON-derulo type
		matchJSON = response;
		let match = "";
		let len = response.matches.length;

		//Making the small description visible
		document.getElementById('description').style.visibility = "visible";

		//for match <p> color
		colors = ["beige", "aliceblue", "antique", "azure", "bisque"];
		var colorNum = 0;
		//i = len - 5
		//zzero-indexing in js
		for (var i = len - 1; i >= len - 6 ; i--){
			match = returnBadgeHTML(response.matches[i].homeTeam.name + "");
			match += " " + response.matches[i].homeTeam.name + " played " + response.matches[i].awayTeam.name + " ";
			match += returnBadgeHTML(response.matches[i].awayTeam.name + "");
			scoreObj = response.matches[i].score.fullTime;
			match += "<br>"
			match += scoreObj.homeTeam + " - " + scoreObj.awayTeam;
			match += "<br>"
			match += "Matchday " + response.matches[i].season.currentMatchday;
			const newParagraph = document.createElement("p");
			newParagraph.id = "matchObj";
			newParagraph.innerHTML += match;
			newParagraph.style.backgroundColor = colors[colorNum];
			document.getElementById('matches').appendChild(newParagraph);
			newParagraph.innerHTML += "<br> <input type=\"button\" id=\"detailsButton\" class=\"btn btn-dark\" value=\"Details\"/> <br>";
			document.getElementById("detailsButton").addEventListener("click", returnMatchDetails(i));
			
			//cycling through the color options, reset at 5
			colorNum += 1;
			if(colorNum == 5){
				colorNum = 0;
			}
		}
	});
}

function returnMatchDetails(matchNum){
	const newParagraph = document.createElement("p");

	for(var j = 0 ; j < 6 ; j++){
		console.log(matchJSON.matches[matchNum].utcDate);
		//console.log(matchJSON.matches[matchNum].referees[j].name + " (" + matchJSON.matches[matchNum].referees[j].role + ")");
		newParagraph.innerHTML += matchJSON.matches[matchNum].referees[j].name + " (" + matchJSON.matches[matchNum].referees[j].role + ")";
	}

	//console.log(resultJSON.matches[i].referees[0].name + "");
	//document.getElementById("standings1").appendChild(newParagraph);
}

function returnStandings(){
	//clear standings1 id div:
	document.getElementById('standings1').innerHTML = "";

	let standingsTable = document.createElement("table");
	standingsTable.style = "border: 1px solid black;";
	standingsTable.id = "standingsTable";
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');


	standingsTable.appendChild(thead);
	standingsTable.appendChild(tbody);

	//let th_arr = [h1, h2, h3, h4, h5];

	let headingRow = document.createElement("tr");
	headingRow.style = "background-color: white;";
	let rank = document.createElement('th');
	let h1 = document.createElement('th');
	h1.innerHTML = "Club";
	let h2 = document.createElement('th');
	h2.innerHTML = "W";
	let h3 = document.createElement('th');
	h3.innerHTML = "D";
	let h4 = document.createElement('th');
	h4.innerHTML = "L";
	let h5 = document.createElement('th');
	h5.innerHTML = "Points";

	headingRow.appendChild(rank);
	headingRow.appendChild(h1);
	headingRow.appendChild(h2);
	headingRow.appendChild(h3);
	headingRow.appendChild(h4);
	headingRow.appendChild(h5);
	thead.appendChild(headingRow);

	var leagueCode = leagueSelect();

	$.ajax({
		headers: { 'X-Auth-Token': API_KEY },
		url: "https://api.football-data.org/v2/competitions/" + competitionCode[leagueCode] + "/standings",
		dataType: 'json',
		type: 'GET',
	}).done(function(response) {
		console.log(response);
		for(var i = 0 ; i < 20 ; i++){
			numWins = response.standings[0].table[i].won;
			numDraws  = response.standings[0].table[i].draw;
			numLosses = response.standings[0].table[i].lost;
			gamesPlayed = response.standings[0].table[i].playedGames;
			numPoints = response.standings[0].table[i].points;
			GD = response.standings[0].table[i].goalDifference;
			GA = response.standings[0].table[i].goalsAgainst;
			GFG = response.standings[0].table[i].goalsFor;
			console.log(response.standings[0].table[i].team.name + " (" + numPoints + ") : " + numWins + "-" + numDraws + "-" + numLosses);
			
			let standingsRow = document.createElement("tr");
			if(i == 0){
				standingsRow.style = "background-color: #1C9A1E;";
			} else if(i < 4){
				standingsRow.style = "background-color: #58D859;";
			} else if(i >= 17){
				standingsRow.style = "background-color: #FF0000;";
			} else {
				standingsRow.style = "background-color: white;";
			}
			let clubRank = document.createElement('th');
			let rankNum = (i + 1);
			clubRank.innerHTML = rankNum.toString();
			let s1 = document.createElement('th');
			s1.innerHTML = response.standings[0].table[i].team.name + "";
			let s2 = document.createElement('th');
			s2.innerHTML = numWins + "";
			let s3 = document.createElement('th');
			s3.innerHTML = numDraws + "";
			let s4 = document.createElement('th');
			s4.innerHTML = numLosses + "";
			let s5 = document.createElement('th');
			s5.innerHTML = numPoints + "";
			
			standingsRow.appendChild(clubRank);
			standingsRow.appendChild(s1);
			standingsRow.appendChild(s2);
			standingsRow.appendChild(s3);
			standingsRow.appendChild(s4);
			standingsRow.appendChild(s5);

			tbody.appendChild(standingsRow);
			
		}
	});
	document.getElementById("standings1").appendChild(standingsTable);
}