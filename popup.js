document.addEventListener('DOMContentLoaded', async () => {
	document.getElementById("ytlink").onclick = function () {
		chrome.tabs.create({ url: 'https://www.youtube.com/c/mls/videos' });
	};

	//trying to use google sports api
	const SerpApi = require('google-search-results-nodejs');
	const search = new SerpApi.GoogleSearch("c93d7bfb36e9a880b9af116bd332e328d5451da85e1315b88555f3f8a5093ba2");

	const params = {
		q: "manchester united",
		location: "austin, texas, united states"
	};

	const callback = function (data) {
		console.log(data['sports_results']);
	};

	// Show result as JSON
	search.json(params, callback);

});