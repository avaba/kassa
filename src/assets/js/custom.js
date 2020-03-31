import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

$(document).ready(function(){

	$('#cbx').change(function(){
		if($(this).is(":checked")) {
			$( "html" ).attr( "theme", "dark" );
		} else {
			$( "html" ).removeAttr("theme");
		}
	});
	
});