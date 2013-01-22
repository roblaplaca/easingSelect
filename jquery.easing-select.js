/**
 * @author		Rob LaPlaca - rob.laplaca@gmail.com
 * @date		06/14/2010
 * @lastUpdate	01/21/2013
 *
 * @classDescription	Creates a selectbox that contains all the easing algorithms in
 *						the jQuery.easing object. Useful for testing animations.
 * 
 * @param {String}		id  - 	if present, the id attribute of the resulting select 
 *						that gets appended, OPTIONAL.
 * @param {Function}	changeCallback - if present, the callback will be executed when the 
 *						selectbox is updated, OPTIONAL.
*/
/* 	
	Examples of calling the extension: 
	$("#wrapper").easingSelect();

	The previous call prepends a select with class="easing" to the 
	element. This loops through, and gets all the available easing 
	functions, and adds them to the select. You can then code it 
	to do what you want.

	// prepends a select with class="easing" and id="id-of-select" to the element
	$("#wrapper").easingSelect("id-of-select", callbackFunction); 
	
	once the select is on the screen you can incorporate it into your animation logic
	to test out some different variations.
	
	example of accessing the value:
	$this.animate({height: 500}}, 500, $("#id-of-select").val());
*/
$.fn.easingSelect = function(id, changeCallback) {
	var $this = this,
		easingFns = $.easing,
		$select = $('<select class="easing" id="'+id+'" />');
	
		for(var i in easingFns) {
			// def is the default easing fn and should be skipped
			if(i !== "def") {
				$select.append("<option>" + i + "</option>")
			}
		}

		$this.prepend($select);

		if( typeof changeCallback !== "undefined" ) {
			$this.change(changeCallback);	
		}
		
	return $this;
}
