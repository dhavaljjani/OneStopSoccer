//for football-data.org
let API_KEY = '95302cdd6b314a0a834875835cdd7a15'
let competitionCode = ["PL", "PD", "BL1", "FL1", "SA", "DED", "CL"];

var referees = [];
var matchDates = [];
var matchInd = 0;

document.addEventListener('DOMContentLoaded', async () => {
	document.getElementById("ytlink").onclick = function () {
		var leagueName = document.getElementById("leagues-select").value;
		switch (leagueName){
			case("MLS"):
				chrome.tabs.create({ url: 'https://www.youtube.com/c/mls/videos' });
				break;
			case("premier-league"):
				chrome.tabs.create({ url: 'https://www.youtube.com/c/premierleague/videos'});
				break;
			case("la-liga"):
				chrome.tabs.create({ url: 'https://www.youtube.com/c/LaLiga/videos'});
				break;
			case("bundesliga"):
				chrome.tabs.create({ url: 'https://www.youtube.com/bundesligatv/videos'});
				break;
			case("ligue-1"):
				chrome.tabs.create({ url: 'https://www.youtube.com/ligue1/videos'});
				break;
			case("serie-a"):
				chrome.tabs.create({ url: 'https://www.youtube.com/c/seriea/videos'});
				break;
			case("eredivisie"):
				chrome.tabs.create({ url: 'https://www.youtube.com/user/eredivisie/videos'});
				break;
			case("cl"):
				chrome.tabs.create({ url: 'https://www.youtube.com/uefatv/videos'});
				break;
		}
	};
});

//onload function adds an event listener to selection
window.onload=function(){
	//make sure it executes after DOM fully loads.
	document.getElementById("matchesButton").addEventListener("click", returnMatches);
	document.getElementById("standingsButton").addEventListener("click", returnStandings);
}

function makeWikipediaLink(teamName){
	var url = "https://www.wikipedia.com/wiki/";
	for (var i = 0 ; i < teamName.length ; i++){
		if (teamName.charAt(i) == ' '){
			url += "_";
		} else {
			url += teamName.charAt(i);
		}
	}
	return url;
}

function returnMatches(){
	//clear divs
	document.getElementById('matches').innerHTML = "";
		
	//This code gets the value of the league selector ui and converts it to a number we can use to correspond with football data api
	var leagueCode = leagueSelect();
	var numMatchesToDisplay = document.getElementById("numMatches").value;

	if (leagueCode == -1){
		const matchAlert = document.createElement("p");
		matchAlert.style.backgroundColor = "#212529";
		matchAlert.style.color = "white";
		matchAlert.innerHTML = "MLS Match Data coming soon!";

		document.getElementById('matches').appendChild(matchAlert);
		return;
	}

	//API CALL
	$.ajax({
		headers: { 'X-Auth-Token': API_KEY },
		url: "http://api.football-data.org/v2/competitions/" + competitionCode[leagueCode] + "/matches?status=FINISHED",
		dataType: 'json',
		type: 'GET',
	}).done(function(response) {
		//response is JSON-derulo type
		let match = "";
		let len = response.matches.length;

		//Making the small description visible
		document.getElementById('description').style.visibility = "visible";

		//for match <p> color
		colors = ["beige", "aliceblue", "antique", "azure", "bisque"];
		var colorNum = 0;
		//i = len - 5
		//zero-indexing in js
		for (var i = len - 1; i > (len - numMatchesToDisplay - 1) ; i--){
			match = returnBadgeHTML(response.matches[i].homeTeam.name + "");
			match +=  "<a href=\"" + makeWikipediaLink(response.matches[i].homeTeam.name) + "\">" + response.matches[i].homeTeam.name + "</a>";
			match += " played ";
			match += "<a href=\"" + makeWikipediaLink(response.matches[i].awayTeam.name) + "\">" + response.matches[i].awayTeam.name + "</a>";
			
			match += returnBadgeHTML(response.matches[i].awayTeam.name + "");
			scoreObj = response.matches[i].score.fullTime;
			match += "<br>"
			match += scoreObj.homeTeam + " - " + scoreObj.awayTeam;
			if (leagueCode != 6){
				match += "<br>"
				match += "Matchday " + response.matches[i].matchday;
			}
			const newParagraph = document.createElement("p");
			newParagraph.id = "matchObj" + i;
			newParagraph.innerHTML += match;
			newParagraph.style.backgroundColor = colors[colorNum];

			var detailsButton = document.createElement("input");
			detailsButton.type = "button";
			detailsButton.style.backgroundColor = "#212529";
			detailsButton.style.color = "white";
			detailsButton.style.borderRadius = "5%";
			detailsButton.value = "Details";
			detailsButton.id = "detailsButton" + i;

			newParagraph.innerHTML += "<br>";
			newParagraph.appendChild(detailsButton);
			newParagraph.innerHTML += "<br>";

			matchDates.push(response.matches[i].utcDate.substring(0, 10));
			referees.push(response.matches[i].referees[0].name);

			document.getElementById('matches').appendChild(newParagraph);
			//document.getElementById("detailsButton" + i).addEventListener("click", returnMatchDetails(i));
			document.getElementById("detailsButton" + i).onclick = function(){
				newParagraph.innerHTML += "<br>" + matchDates[matchInd] + "<br>";
				newParagraph.innerHTML += "Referee: " + referees[matchInd] + "<br>";
				matchInd += 1;
			}
			
			//cycling through the color options, reset at 5
			colorNum += 1;
			if(colorNum == 5){
				colorNum = 0;
			}
		}
	});
}

function returnStandings(){
	//clear standings1 id div:
	document.getElementById('standings1').innerHTML = "";

	var leagueCode = leagueSelect();
	if(leagueCode == -1){
		//for MLS data
		const xhttps = new XMLHttpRequest();
		xhttps.addEventListener("load", function onLoad () {
			var parser = new DOMParser();
			var htmlDoc = parser.parseFromString(this.responseText, 'text/html');

			htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(1) > th:nth-child(2)").innerHTML = "";

			table = htmlDoc.getElementsByClassName('wikitable')[0]; //only table in page (index 0 of HTML Collection)

			var color = "";
			for(var standingIndex = 2 ; standingIndex <= table.rows.length ; standingIndex++){
				if (standingIndex == 2){
					color = "background-color: #1C9A1E;";
				} else if(standingIndex <= 8){
					color = "background-color: #58D859;";
				} else {
					color = "background-color: white;";
				}
				htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(" + standingIndex + ") > th > a").removeAttribute("href");
				for(var td = 1 ; td <= 11 ; td++){
					if(td == 2){
						htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(" + standingIndex + ") > th").style = color;
					} else if(td == 11){
						if(standingIndex == 2 || standingIndex == 3){
							htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(" + standingIndex + ") > td:nth-child(" + td + ")").style = color;
						}
					} else {
						htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(" + standingIndex + ") > td:nth-child(" + td + ")").style = color;
					}
				}
			}

			for(var k = 1; k < table.rows.length ; k++){
				console.log(table.rows[k])
			}

			var label = document.createElement("p");
			label.style.backgroundColor = "#212529";
			label.style.color = "white";
			document.getElementById("standings1").innerHTML += "<br>";
			label.innerHTML = "Eastern Conference Standings";
			document.getElementById("standings1").appendChild(label);
			document.getElementById("standings1").appendChild(table);

			//Empty TD for lower standing rows is changed to white for formatting
			document.querySelector("#standings1 > table:nth-child(3) > tbody > tr:nth-child(9) > td:nth-child(11)").style = "background-color: white;";
			document.querySelector("#standings1 > table:nth-child(6) > tbody > tr:nth-child(9) > td:nth-child(11)").style = "background-color: white;";
		});
		xhttps.open("GET", "https://en.wikipedia.org/wiki/Template:2022_Major_League_Soccer_Eastern_Conference_table");
		xhttps.send();

		const xhttps2 = new XMLHttpRequest();
		xhttps2.addEventListener("load", function onLoad () {
			var parser = new DOMParser();
			var htmlDoc = parser.parseFromString(this.responseText, 'text/html');

			htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(1) > th:nth-child(2)").innerHTML = "";

			table = htmlDoc.getElementsByClassName('wikitable')[0]; //only table in page (index 0 of HTML Collection)

			var color = "";
			for(var standingIndex = 2 ; standingIndex <= table.rows.length ; standingIndex++){
				if (standingIndex == 2){
					color = "background-color: #1C9A1E;";
				} else if(standingIndex <= 8){
					color = "background-color: #58D859;";
				} else {
					color = "background-color: white;";
				}
				htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(" + standingIndex + ") > th > a").removeAttribute("href");
				for(var td = 1 ; td <= 11 ; td++){
					if(td == 2){
						htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(" + standingIndex + ") > th").style = color;
					} else if(td == 11){
						if(standingIndex == 2 || standingIndex == 3){
							htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(" + standingIndex + ") > td:nth-child(" + td + ")").style = color;
						}
					} else {
						htmlDoc.querySelector("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(" + standingIndex + ") > td:nth-child(" + td + ")").style = color;
					}
				}
			}

			for(var k = 1; k < table.rows.length ; k++){
				console.log(table.rows[k])
			}

			var label = document.createElement("p");
			label.style.backgroundColor = "#212529";
			label.style.color = "white";
			document.getElementById("standings1").innerHTML += "<br>";
			label.innerHTML = "Western Conference Standings";
			document.getElementById("standings1").appendChild(label);
			document.getElementById("standings1").appendChild(table);

			//Empty TD for lower standing rows is changed to white for formatting
			document.querySelector("#standings1 > table:nth-child(3) > tbody > tr:nth-child(9) > td:nth-child(11)").style = "background-color: white;";
			document.querySelector("#standings1 > table:nth-child(6) > tbody > tr:nth-child(9) > td:nth-child(11)").style = "background-color: white;";
		});
		xhttps2.open("GET", "https://en.wikipedia.org/wiki/Template:2022_Major_League_Soccer_Western_Conference_table");
		xhttps2.send();
	} else {
		$.ajax({
			headers: { 'X-Auth-Token': API_KEY },
			url: "https://api.football-data.org/v2/competitions/" + competitionCode[leagueCode] + "/standings",
			dataType: 'json',
			type: 'GET',
		}).done(function(response) {
			for(var j = 0 ; j < response.standings.length ; j++){
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
				h3.innerHTML = "GP";
				let h4 = document.createElement('th');
				h4.innerHTML = "D";
				let h5 = document.createElement('th');
				h5.innerHTML = "L";
				let h6 = document.createElement('th');
				h6.innerHTML = "Points";
				

				headingRow.appendChild(rank);
				headingRow.appendChild(h1);
				headingRow.appendChild(h2);
				headingRow.appendChild(h3);
				headingRow.appendChild(h4);
				headingRow.appendChild(h5);
				headingRow.appendChild(h6);
				thead.appendChild(headingRow);
				numTeams = response.standings[j].table.length;
				for(var i = 0 ; i < numTeams ; i++){
					let club = response.standings[j].table[i];
					numWins = club.won;
					numDraws  = club.draw;
					numLosses = club.lost;
					gamesPlayed = club.playedGames;
					numPoints = club.points;
					GD = club.goalDifference;
					GA = club.goalsAgainst;
					GFG = club.goalsFor;
					
					let standingsRow = document.createElement("tr");
					if(i == 0){
						standingsRow.style = "background-color: #1C9A1E;";
					} else if(i < 4){
						standingsRow.style = "background-color: #58D859;";
					} else if(i >= (numTeams - 3)){
						standingsRow.style = "background-color: #FF0000;";
					} else {
						standingsRow.style = "background-color: white;";
					}
					let clubRank = document.createElement('th');
					let rankNum = (i + 1);
					clubRank.innerHTML = rankNum.toString();
					let s1 = document.createElement('th');
					s1.innerHTML = response.standings[j].table[i].team.name + "";
					let s2 = document.createElement('th');
					s2.innerHTML = gamesPlayed + "";
					let s3 = document.createElement('th');
					s3.innerHTML = numWins + "";
					let s4 = document.createElement('th');
					s4.innerHTML = numDraws + "";
					let s5 = document.createElement('th');
					s5.innerHTML = numLosses + "";
					let s6 = document.createElement('th');
					s6.innerHTML = numPoints + "";
					
					standingsRow.appendChild(clubRank);
					standingsRow.appendChild(s1);
					standingsRow.appendChild(s2);
					standingsRow.appendChild(s3);
					standingsRow.appendChild(s4);
					standingsRow.appendChild(s5);
					standingsRow.appendChild(s6);
		
					tbody.appendChild(standingsRow);
					document.getElementById("standings1").appendChild(standingsTable);
				}
			}
		});
	}
}