function returnBadgeHTML(clubName){
	let badgeLocation = "<img src=\"./img/crests";
	
	switch(clubName){
		case("Watford FC"):
			badgeLocation += "/PL/watford.png"
			break
		case("Chelsea FC"):
			badgeLocation += "/PL/chelsea.png"
			break
		case("Arsenal FC"):
			badgeLocation += "/PL/arsenal.png"
			break
		case("Manchester City FC"):
			badgeLocation += "/PL/man_city.png"
			break
		case("Manchester United FC"):
			badgeLocation += "/PL/man_united.png"
			break
		case("Tottenham Hotspur FC"):
			badgeLocation += "/PL/tottenham.png"
			break
		case("West Ham United FC"):
			badgeLocation += "/PL/west_ham.png"
			break
		case("Wolverhampton Wanderers FC"):
			badgeLocation += "/PL/wolves.png"
			break
		case("Leicester City FC"):
			badgeLocation += "/PL/leicester.png"
			break
		case("Brighton & Hove Albion FC"):
			badgeLocation += "/PL/brighton.png"
			break
		case("Brentford FC"):
			badgeLocation += "/PL/brentford.png"
			break
		case("Southampton FC"):
			badgeLocation += "/PL/southampton.png"
			break
		case("Crystal Palace FC"):
			badgeLocation += "/PL/crystal_palace.png"
			break
		case("Newcastle United FC"):
			badgeLocation += "/PL/newcastle.png"
			break
		case("Aston Villa FC"):
			badgeLocation += "/PL/aston_villa.png"
			break
		case("Leeds United FC"):
			badgeLocation += "/PL/leeds.png"
			break
		case("Everton FC"):
			badgeLocation += "/PL/everton.png"
			break
		case("Burnley FC"):
			badgeLocation += "/PL/burnley.png"
			break
		case("Norwich City FC"):
			badgeLocation += "/PL/norwich.png"
			break
		case("Liverpool FC"):
			badgeLocation += "/PL/liverpool.png"
			break
		case("FC Barcelona"):
			badgeLocation += "/LALIGA/barcelona.png"
			break
		case("Real Madrid CF"):
			badgeLocation += "/LALIGA/real_madrid.png"
			break
		case("Deportivo Alavés"):
			badgeLocation += "/LALIGA/deportivo_alaves.png"
			break
		case("RC Celta de Vigo"):
			badgeLocation += "/LALIGA/celta_vigo.png"
			break
		case("Club Atlético de Madrid"):
			badgeLocation += "/LALIGA/atletico_madrid.png"
			break
		case("Sevilla FC"):
			badgeLocation += "/LALIGA/sevilla.png"
			break
		case("Rayo Vallecano de Madrid"):
			badgeLocation += "/LALIGA/rayo_vallecano.png"
			break
		case("Villarreal CF"):
			badgeLocation += "/LALIGA/villareal.png"
			break
		case("Granada CF"):
			badgeLocation += "/LALIGA/granada.png"
			break
		case("Elche CF"):
			badgeLocation += "/LALIGA/elche.png"
			break
		case("Athletic Club"):
			badgeLocation += "/LALIGA/athletic_bilbao.png"
			break
		case("Real Betis Balompié"):
			badgeLocation += "/LALIGA/real_betis.png"
			break
		case("Cádiz CF"):
			badgeLocation += "/LALIGA/cadiz.png"
			break
		case("RCD Mallorca"):
			badgeLocation += "/LALIGA/mallorca.png"
			break
		case("RCD Espanyol de Barcelona"):
			badgeLocation += "/LALIGA/espanyol.png"
			break
		case("Valencia CF"):
			badgeLocation += "/LALIGA/valencia.png"
			break
		case("Real Sociedad de Fútbol"):
			badgeLocation += "/LALIGA/real_sociedad.png"
			break
		case("Levante UD"):
			badgeLocation += "/LALIGA/levante.png"
			break
		case("Getafe CF"):
			badgeLocation += "/LALIGA/getafe.png"
			break
		case("CA Osasuna"):
			badgeLocation += "/LALIGA/osasuna.png"
			break
	}
	badgeLocation += "\" width=\"10%\" height=\"10%\">";
	return badgeLocation;
}