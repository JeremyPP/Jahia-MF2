angular

.module('mfApp', ['ngMaterial', 'ngMessages'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('amber');
})


//======= Main Toolbar Controller =======//

.controller('ToolbarCtrl', function ($scope) {
	
})



//======= Personalization dashboard Controller =======//

.controller('persoDashboardCtrl', function ($scope) {
	
})



//======= Custom JS =======//


// Loader

$(window).load(function() {
	setTimeout(function(){
		$("#pageloader").fadeOut('fast');
	}, 500);
});


// Search

//Change header color on Search field focus
$('.searchFieldInput').blur(function() {
	$('.mainToolbarTop').removeClass("colorchangeheadersearch");
	$('.mainToolbarTop h2 span').html("Personalizations");
})
.focus(function() {
	$('.mainToolbarTop').addClass("colorchangeheadersearch");
	$('.mainToolbarTop h2 span').html("Filter personalizations");
});

// Filter personalization cards
$(".searchFieldInput").keyup(function(){

	// Retrieve the input field text and reset the count to zero
	var filter = $(this).val(), count = 0;

	// Loop through the list
	$(".filteredCard").each(function(){

		// If the list item does not contain the text phrase hide it
		if ($(this).text().search(new RegExp(filter, "i")) < 0) {
			$(this).hide();

		// Show the list item if the phrase matches and increase the count by 1
		} else {
			$(this).show();
			count++;
		}
	});
});


// Open more details

// Need better implementation so two containers can both stay open at the same time
var toggled = false;

$(".perso-card").on("click", ".perso-card-ButtonContainer", function(){
	if( toggled ) {
		$(this).next().hide();
		$(this).children().children("md-icon").html("<md-icon> keyboard_arrow_down </md-icon>");
		toggled = false
	} else {
		$(this).next().show();
		$(this).children().children("md-icon").html("<md-icon> keyboard_arrow_up </md-icon>")
		toggled = true
	}
}); 