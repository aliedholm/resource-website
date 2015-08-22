<!-- hide script from old browsers

var html = new Array();
var css = new Array();
var js = new Array();


for (i=0; i < resources.length; i++) {
	if (resources[i].section == "html") {
		html.splice(html.length + 1, 0, resources[i]);
	}
	else if (resources[i].section =="css") {
		css.splice(css.length + 1, 0, resources[i]);
	}
	else if (resources[i].section =="js") {
		js.splice(js.length + 1, 0, resources[i]);
	}
}

document.write("<div id='html' class='alert alert-success' align='center'><a name='html'>HTML</a></div>");
document.write("<div class='list-group'>");

for (i=0; i < html.length; i++) {
	document.write("<a class='list-group-item' href='" + html[i].url + "'>" + html[i].title + "</a>");
}
document.write("<br />")

document.write("<div id='css' class='alert alert-warning' align='center'><a name='css'>CSS</a></div>");
document.write("<div class='list-group'>");

for (i=0; i < css.length; i++) {
	document.write("<a class='list-group-item' href='" + css[i].url + "'>" + css[i].title + "</a>");
}
document.write("<br />")

document.write("<div id='js' class='alert alert-danger' align='center'><a name='js'>JavaScript</a></div>");
document.write("<div class='list-group'>");

for (i=0; i < js.length; i++) {
	document.write("<a class='list-group-item' href='" + js[i].url + "'>" + js[i].title + "</a>");
}

// end hiding script from old browsers -->
