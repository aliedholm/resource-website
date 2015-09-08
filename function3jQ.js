$(function() { //load script when document ready

var sections = []; //creating an array from only the unique sections in the resources object
var $list = $('div.list') //store the content div for use later
var $nav = $('ul.nav') //store the conent of the div nav for later use

$.each(resources, function(index, value){
	if (sections.indexOf(this.section) === -1) {
		sections.push(this.section);
	}
});

//write out the section headings in the main content and the nav
sections.sort();
$.each(sections, function(index, value){
	$list.append('<div class="panel panel-default" id="' +  this + '"><div class="panel-heading">' + this.toUpperCase() + '</div></div>');
	var badgeCount = 0;
	var current = this;
	$.each(resources, function(index, value) {
		if (resources[index].section == current) {
			badgeCount ++;
		}
	})
	$nav.append('<li class="navItem"><a href="#' + this + '">' + this.toUpperCase() + '<span class="badge">' + badgeCount + '</span></a>');
});

//write out the resources to the main content
$.each(resources, function(index, value){
	$('#' + this.section).append('<div class="panel-body"><a href="' + this.url + '"><img src="' + this.icon + '" class="icon">' + this.title + '</a></div>')
})

//makes the list appear with an animated slide down
$(function() {
	$('li').hide().slideDown();
	var $li = $('div.panel-body');
	$li.hide().each(function(index) {
		$(this).delay(50 * index).slideDown(250);
	})
})

//start of the script that handles the modal input
var $submitButton = $('#submitButton');
	//behavior of the submit button
$submitButton.on('click', function(e) {
	//variables that will hold captured data
	var $title = $('#title');
	var $url = $('#url');
	var $icon = $('#icon');
	var $keyword = $('#keyword');
	var $section = $('#section');
	//building the new resource object
	var newResource = {
		title: $title.val(),
		url: $url.val(),
		icon: $icon.val(),
		keyword: $keyword.val(),
		section: $section.val(),
		fresh: true
	};
	//inserting the new object into the resources array
	resources.push(newResource);
	//remove all page conetent so it can be added back with the new information
	$('div.panel-body').remove();
	$('div.panel-default').remove();
	$('li.navItem').remove();
	//rewrite the page with the new one highlighed in red
	//clearing and rewriting the sections array
	sections = [];
	$.each(resources, function(index, value){
	if (sections.indexOf(this.section) === -1) {
		sections.push(this.section);
	}
	});
	//rewriting the nav bar and section headings
	sections.sort();
	$.each(sections, function(index, value){
			$list.append('<div class="panel panel-default" id="' +  this + '"><div class="panel-heading">' + this.toUpperCase() + '</div></div>');
			var badgeCount = 0;
			var current = this;
			$.each(resources, function(index, value) {
				if (resources[index].section == current) {
					badgeCount ++;
				}
			})
			$nav.append('<li class="navItem"><a href="#' + this + '">' + this.toUpperCase() + '<span class="badge">' + badgeCount + '<span></a>');
		});
	//rewriting the page content
	$.each(resources, function(index, value){
		if (this.fresh === true) {
			$('#' + this.section).append('<div class="panel-body fresh"><a href="' + this.url + '"><img src="' + this.icon + '" class="icon">' + this.title + '</a></div>')
		}
		else {
			$('#' + this.section).append('<div class="panel-body"><a href="' + this.url + '"><img src="' + this.icon + '" class="icon">' + this.title + '</a></div>')
		}
	})
	//makes the list appear with an animated slide down
	$(function() {
		$('li').hide().slideDown();
		var $li = $('div.panel-body');
		$li.hide().each(function(index) {
		$(this).delay(50 * index).slideDown(250);
		})
	})
	//clearing the selection in the modal after the data has been captured
	$title.val('');
	$url.val('');
	$icon.val('');
	$keyword.val('');
	$section.val('');
	//end of the modal input script
})
}); //end of script