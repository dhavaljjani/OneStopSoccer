function returnBadgeHTML(clubName){
	let badgeLocation = "<img src=\"./img/crests";
	
	switch(clubName){
		//PL
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
		case("AFC Bournemouth"):
			badgeLocation += "/PL/bournemouth.png"
			break
		case("Nottingham Forest FC"):
			badgeLocation += "/PL/nottingham.png"
			break
		case("Fulham FC"):
			badgeLocation += "/PL/fulham.png"
			break
		case("Sheffield United FC"):
			badgeLocation += "/PL/sheffield.png"
			break
		case("Luton Town FC"):
			badgeLocation += "/PL/luton.png"
			break
		//La Liga
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
		case("Real Valladolid CF"):
			badgeLocation += "/LALIGA/real_valladolid.png"
			break
		case("UD Almería"):
			badgeLocation += "/LALIGA/almeria.png"
			break
		case("Las Palmas"):
			badgeLocation += "/LALIGA/las_palmas.png"
			break
		//BL
		case("FC Bayern München"):
			badgeLocation += "/BL/bayern_munchen.png"
			break
		case("Borussia Dortmund"):
			badgeLocation += "/BL/dortmund.png"
			break
		case("Bayer 04 Leverkusen"):
			badgeLocation += "/BL/leverkusen.png"
			break
		case("RB Leipzig"):
			badgeLocation += "/BL/rb_leipzig.png"
			break
		case("SC Freiburg"):
			badgeLocation += "/BL/freiburg.png"
			break
		case("1. FC Union Berlin"):
			badgeLocation += "/BL/union_berlin.png"
			break
		case("1. FC Köln"):
			badgeLocation += "/BL/koln.png"
			break
		case("TSG 1899 Hoffenheim"):
			badgeLocation += "/BL/hoffenheim.png"
			break
		case("1. FSV Mainz 05"):
			badgeLocation += "/BL/mainz.png"
			break
		case("Borussia Mönchengladbach"):
			badgeLocation += "/BL/monchengladbach.png"
			break
		case("VfL Bochum 1848"):
			badgeLocation += "/BL/vfl_bochum.png"
			break
		case("Eintracht Frankfurt"):
			badgeLocation += "/BL/eintracht_frankfurt.png"
			break
		case("VfL Wolfsburg"):
			badgeLocation += "/BL/wolfsburg.png"
			break
		case("FC Augsburg"):
			badgeLocation += "/BL/augsburg.png"
			break
		case("Hertha BSC"):
			badgeLocation += "/BL/hertha_berlin.png"
			break
		case("VfB Stuttgart"):
			badgeLocation += "/BL/stuttgart.png"
			break
		case("Arminia Bielefeld"):
			badgeLocation += "/BL/arminia_bielefeld.png"
			break
		case("SpVgg Greuther Fürth 1903"):
			badgeLocation += "/BL/greuther_furth.png"
			break
		case("SV Werder Bremen"):
			badgeLocation += "/BL/werder_bremen.png"
			break
		case("FC Schalke 04"):
			badgeLocation += "/BL/fc_schalke.png"
			break
		case("SV Darmstadt 98"):
			badgeLocation += "/BL/darmstadt.png"
			break
		case("1. FC Heidenheim 1846"):
			badgeLocation += "/BL/heidenheim.png"
			break
		//L1
		case("AJ Auxerre"):
			badgeLocation += "/L1/aj_auxerre.png"
			break
		case("Toulouse FC"):
			badgeLocation += "/L1/toulouse.png"
			break
		case("AC Ajaccio"):
			badgeLocation += "/L1/ac_ajaccio.png"
			break
		case("Paris Saint-Germain FC"):
			badgeLocation += "/L1/psg.png"
			break
		case("Olympique de Marseille"):
			badgeLocation += "/L1/marseille.png"
			break
		case("AS Monaco FC"):
			badgeLocation += "/L1/monaco.png"
			break
		case("Stade Rennais FC 1901"):
			badgeLocation += "/L1/stade_rennais.png"
			break
		case("RC Strasbourg Alsace"):
			badgeLocation += "/L1/strasbourg_alsace.png"
			break
		case("OGC Nice"):
			badgeLocation += "/L1/nice.png"
			break
		case("Racing Club de Lens"):
			badgeLocation += "/L1/rc_lens.png"
			break
		case("Olympique Lyonnais"):
			badgeLocation += "/L1/lyon.png"
			break
		case("FC Nantes"):
			badgeLocation += "/L1/nantes.png"
			break
		case("Lille OSC"):
			badgeLocation += "/L1/lille.png"
			break
		case("Stade Brestois 29"):
			badgeLocation += "/L1/stade_brestois.png" 
			break
		case("Stade de Reims"):
			badgeLocation += "/L1/stade_reims.png"
			break
		case("Montpellier HSC"):
			badgeLocation += "/L1/montpellier.png"
			break
		case("Angers SCO"):
			badgeLocation += "/L1/angers.png"
			break
		case("FC Lorient"):
			badgeLocation += "/L1/lorient.png"
			break
		case("ES Troyes AC"):
			badgeLocation += "/L1/es_troyes.png"
			break
		case("Clermont Foot 63"):
			badgeLocation += "/L1/clermont_foot.png"
			break
		case("AS Saint-Étienne"):
			badgeLocation += "/L1/saint_etienne.png"
			break
		case("FC Metz"):
			badgeLocation += "/L1/metz.png"
			break
		case("FC Girondins de Bordeaux"):
			badgeLocation += "/L1/girondins_bordeaux.png"
			break
		case("Le Havre AC"):
			badgeLocation += "/L1/le_havre.png"
			break
		//Serie A
		case("US Cremonese"):
			badgeLocation += "/SA/us_cremonese.png"
			break
		case("US Lecce"):
			badgeLocation += "/SA/us_lecce.png"
			break
		case("AC Monza"):
			badgeLocation += "/SA/ac_monza.png"
			break
		case("AC Milan"):
			badgeLocation += "/SA/ac_milan.png"
			break
		case("FC Internazionale Milano"):
			badgeLocation += "/SA/inter_milan.png"
			break
		case("SSC Napoli"):
			badgeLocation += "/SA/napoli.png"
			break
		case("Juventus FC"):
			badgeLocation += "/SA/juventus.png"
			break
		case("AS Roma"):
			badgeLocation += "/SA/roma.png"
			break
		case("SS Lazio"):
			badgeLocation += "/SA/lazio.png"
			break
		case("ACF Fiorentina"):
			badgeLocation += "/SA/fiorentina.png"
			break
		case("Atalanta BC"):
			badgeLocation += "/SA/atalanta.png"
			break
		case("Hellas Verona FC"):
			badgeLocation += "/SA/hellas_verona.png"
			break
		case("US Sassuolo Calcio"):
			badgeLocation += "/SA/sassuolo.png"
			break
		case("Udinese Calcio"):
			badgeLocation += "/SA/udinese.png" 
			break
		case("Bologna FC 1909"):
			badgeLocation += "/SA/bologna.png"
			break
		case("Empoli FC"):
			badgeLocation += "/SA/empoli.png"
			break
		case("UC Sampdoria"):
			badgeLocation += "/SA/sampdoria.png"
			break
		case("Spezia Calcio"):
			badgeLocation += "/SA/spezia_calcio.png"
			break
		case("US Salernitana 1919"):
			badgeLocation += "/SA/salernitana.png"
			break
		case("Cagliari Calcio"):
			badgeLocation += "/SA/cagliari.png"
			break
		case("Genoa CFC"):
			badgeLocation += "/SA/genoa.png"
			break
		case("Venezia FC"):
			badgeLocation += "/SA/venezia.png"
			break
		case("Torino FC"):
			badgeLocation += "/SA/torino.png"
			break
		case("Frosinone Calcio"):
			badgeLocation += "/SA/frosinone.png"
			break
		//Eredivisie
		case("FC Volendam"):
			badgeLocation += "/DED/fc_volendam.png"
			break
		case("SBV Excelsior"):
			badgeLocation += "/DED/excelsior.png"
			break
		case("FC Emmen"):
			badgeLocation += "/DED/fc_emmen.png"
			break
		case("AFC Ajax"):
			badgeLocation += "/DED/ajax.png"
			break
		case("PSV"):
			badgeLocation += "/DED/psv.png"
			break
		case("FC Twente '65"):
			badgeLocation += "/DED/fc_twente.png"
			break
		case("Feyenoord Rotterdam"):
			badgeLocation += "/DED/feyenoord.png"
			break
		case("AZ"):
			badgeLocation += "/DED/az.png"
			break
		case("SBV Vitesse"):
			badgeLocation += "/DED/vitesse.png"
			break
		case("FC Utrecht"):
			badgeLocation += "/DED/utrecht.png"
			break
		case("SC Heerenveen"):
			badgeLocation += "/DED/heerenveen.png"
			break
		case("SC Cambuur-Leeuwarden"):
			badgeLocation += "/DED/cambuur.png"
			break
		case("NEC"):
			badgeLocation += "/DED/nec.png"
			break
		case("FC Groningen"):
			badgeLocation += "/DED/groningen.png"
			break
		case("Go Ahead Eagles"):
			badgeLocation += "/DED/go_ahead_eagles.png"
			break
		case("Sparta Rotterdam"):
			badgeLocation += "/DED/rotterdam.png"
			break
		case("Fortuna Sittard"):
			badgeLocation += "/DED/sittard.png"
			break
		case("Heracles Almelo"):
			badgeLocation += "/DED/heracles.png"
			break
		case("Willem II Tilburg"):
			badgeLocation += "/DED/willem.png"
			break
		case("PEC Zwolle"):
			badgeLocation += "/DED/pec_zwolle.png"
			break
		case("RKC Waalwijk"):
			badgeLocation += "/DED/waalwijk.png"
			break
		case("Almere City FC"):
			badgeLocation += "/DED/almere_city.png"
			break
		//MLS
		case("Atlanta United FC"):
			badgeLocation += "/MLS/atl.png"
			break
		case("Philadelphia Union"):
			badgeLocation += "/MLS/philadelphia.png"
			break
		case("Minnesota United FC"):
			badgeLocation += "/MLS/minnesota.png"
			break
		case("Los Angeles FC"):
			badgeLocation += "/MLS/lafc.png"
			break
		case("Colorado Rapids"):
			badgeLocation += "/MLS/colorado.png"
			break
		case("Columbus Crew"):
			badgeLocation += "/MLS/columbus.png"
			break
		case("Vancouver Whitecaps FC"):
			badgeLocation += "/MLS/vancouver.png"
			break
		case("FC Dallas"):
			badgeLocation += "/MLS/dallas.png"
			break
		case("Toronto FC"):
			badgeLocation += "/MLS/toronto.png"
			break
		case("D.C. United"):
			badgeLocation += "/MLS/dc.png"
			break
		case("Charlotte FC"):
			badgeLocation += "/MLS/charlotte.png"
			break
		case("San Jose Earthquakes"):
			badgeLocation += "/MLS/san_jose.png"
			break
		case("New York Red Bulls"):
			badgeLocation += "/MLS/nyrb.png"
			break
		case("Inter Miami CF"):
			badgeLocation += "/MLS/miami.png"
			break
		case("Chicago Fire FC"):
			badgeLocation += "/MLS/chicago.png"
			break
		case("Austin FC"):
			badgeLocation += "/MLS/austin.png"
			break
		case("FC Cincinnati"):
			badgeLocation += "/MLS/cincinnati.png"
			break
		case("Portland Timbers FC"):
			badgeLocation += "/MLS/portland.png"
			break
		case("New England Revolution"):
			badgeLocation += "/MLS/new_england.png"
			break
		case("Orlando City SC"):
			badgeLocation += "/MLS/orlando.png"
			break
		case("CF Montréal"):
			badgeLocation += "/MLS/montreal.png"
			break
		case("Sporting Kansas City"):
			badgeLocation += "/MLS/kansas_city.png"
			break
		case("LA Galaxy"):
			badgeLocation += "/MLS/lag.png"
			break
		case("New York City FC"):
			badgeLocation += "/MLS/nycfc.png"
			break
		case("Houston Dynamo FC"):
			badgeLocation += "/MLS/houston.png"
			break
		case("Real Salt Lake"):
			badgeLocation += "/MLS/rsl.png"
			break
		case("Seattle Sounders FC"):
			badgeLocation += "/MLS/seattle.png"
			break
		case("Nashville SC"):
			badgeLocation += "/MLS/nashville.png"
			break
		case("St. Louis City SC"):
			badgeLocation += "/MLS/st_louis.png"
			break
		//INTL
		case("Ecuador"):
			badgeLocation += "/INTL/ecuador.png"
			break
		case("Netherlands"):
			badgeLocation += "/INTL/netherlands.png"
			break
		case("Qatar"):
			badgeLocation += "/INTL/qatar.png"
			break
		case("Senegal"):
			badgeLocation += "/INTL/senegal.png"
			break
		case("England"):
			badgeLocation += "/INTL/england.png"
			break
		case("Iran"):
			badgeLocation += "/INTL/iran.png"
			break
		case("United States"):
			badgeLocation += "/INTL/us.png"
			break
		case("Wales"):
			badgeLocation += "/INTL/wales.png"
			break
		case("Argentina"):
			badgeLocation += "/INTL/argentina.png"
			break
		case("Mexico"):
			badgeLocation += "/INTL/mexico.png"
			break
		case("Poland"):
			badgeLocation += "/INTL/poland.png"
			break
		case("Saudi Arabia"):
			badgeLocation += "/INTL/saudi_arabia.png"
			break
		case("Australia"):
			badgeLocation += "/INTL/australia.png"
			break
		case("Denmark"):
			badgeLocation += "/INTL/denmark.png"
			break
		case("France"):
			badgeLocation += "/INTL/france.png"
			break
		case("Tunisia"):
			badgeLocation += "/INTL/tunisia.png"
			break
		case("Costa Rica"):
			badgeLocation += "/INTL/costa_rica.png"
			break
		case("Germany"):
			badgeLocation += "/INTL/germany.png"
			break
		case("Japan"):
			badgeLocation += "/INTL/japan.png"
			break
		case("Spain"):
			badgeLocation += "/INTL/spain.png"
			break
		case("Belgium"):
			badgeLocation += "/INTL/belgium.png"
			break
		case("Canada"):
			badgeLocation += "/INTL/canada.png"
			break
		case("Croatia"):
			badgeLocation += "/INTL/croatia.png"
			break
		case("Morocco"):
			badgeLocation += "/INTL/morocco.png"
			break
		case("Brazil"):
			badgeLocation += "/INTL/brazil.png"
			break
		case("Cameroon"):
			badgeLocation += "/INTL/cameroon.png"
			break
		case("Serbia"):
			badgeLocation += "/INTL/serbia.png"
			break
		case("Switzerland"):
			badgeLocation += "/INTL/switzerland.png"
			break
		case("Ghana"):
			badgeLocation += "/INTL/ghana.png"
			break
		case("Portugal"):
			badgeLocation += "/INTL/portgual.png"
			break
		case("South Korea"):
			badgeLocation += "/INTL/south_korea.png"
			break
		case("Uruguay"):
			badgeLocation += "/INTL/uruguay.png"
			break
	}
	badgeLocation += "\" width=\"10%\" height=\"10%\">";
	return badgeLocation;
}