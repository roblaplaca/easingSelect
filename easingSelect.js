/**
 * @author		Rob LaPlaca - rob.laplaca@gmail.com
 * @date		06/14/2010
 * @lastUpdate		06/14/2010
 *
 * @classDescription	Creates a selectbox that contains all the easing algorithms in
 *			the jQuery.easing object. Useful for testing animations.
 * 
 * @param {String}	id - if present, the id attribute of the resulting select that gets appended, OPTIONAL
 *
*/
/* 	
	examples of calling the extension: 
	// prepends a select with class="easing" to the element
	$("#wrapper").easingSelect();
	
	// prepends a select with class="easing" and id="easing" to the element
	$("#wrapper").easingSelect("easing"); 
	
	once the select is on the screen you can incorporate it into your animation logic
	to test out some different variations.
	
	example of accessing the value:
	$this.animate({height: 500}}, 500, $("#easing").val());

*/
$.fn.easingSelect = function(id) {
	var $this = $(this),
		easingFns = $.easing,
		$select = $('<select class="easing" id="'+id+'" />');
	
		for(var i in easingFns) {
			// def is the default easing fn and should be skipped
			if(i !== "def") {
				$select.append("<option>" + i + "</option>")
			}
		}
		$this.prepend($select);
		
	return $(this);
}
