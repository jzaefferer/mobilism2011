$(function() {
	function render(data) {
		var row = $('<tr><td class="time"></td><td><div class="title"></div><div class="speaker"></div></td></tr>');
		$.each(data, function(field, value) {
			row.find("." + field).text(value);
		});
		return row;
	}
	var table = $("#page").delegate(".speaker", "click", function() {
		$(this).text("Dude");
	});
	$.getJSON("data/schedule.json", function(data) {
		$.each(data.objects, function(index, talk) {
			render(talk).appendTo(table);
		});
	});
});
