//What league is currently selected in the dropdown?
function leagueSelect(){
    var leagueName = document.getElementById("leagues-select").value;
	var codeNum = null;
	switch (leagueName){
		case("premier-league"):
			codeNum = 0;
			break;
		case("la-liga"):
			codeNum = 1;
			break;
		case("bundesliga"):
			codeNum = 2;
			break;
		case("ligue-1"):
			codeNum = 3;
			break;
		case("serie-a"):
			codeNum = 4;
			break;
	}
    return codeNum;
}