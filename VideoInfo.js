
function BaseVideoInfo (url, api_url) {
	this.url = url || 'null';
	this.api_url = api_url || "http://youtube-dl.appspot.com/api/";
}

BaseVideoInfo.prototype = {
	log: function () {
		console.log("VideoInfo:\n\t=> URL: "+this.url+"\n\t=> API URL: "+this.api_url);
	},
	get_info:  function () {
		$.getJSON(
			 this.api_url,
			 {'url':this.url},
			 this.process_video_info
			 ).error(this.api_call_failed);
	},
	process_video_info: function (data) {
		console.error("Nothing to be done with the data");
	},
	api_call_failed: function (jqXHR, textStatus, errorThrown) {
		console.error("Error on the api call");
	}
};
