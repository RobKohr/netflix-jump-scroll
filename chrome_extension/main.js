jQuery(document).ready(function(){
	setTimeout(launch, 500);
});


function launch(){
	console.log('launched');
	var jQ = jQuery;
	function clickFunction(){
	    var direction = -1;
	    if(jQ(this).hasClass('previous')){
		direction = 1;
	    } 
	    jQ(this).siblings('.sliderButton').removeClass('disabledScrollButton');
	    var parentWidth = jQ(this).parent().width();
	    var change = parentWidth * direction -( direction * 120);
	    var innerSlider = jQ(this).siblings('.agMovieSetSlider');
	    var collectionWidth = innerSlider.find('.boxShotDivider').position().left;

	    var offset = innerSlider.offset();
	    var current = offset.left;
	    var updated = current + change;
	    console.log({
		    updated:updated,
			change:change,
			innerWidth:innerSlider.width(),
			parentWidth: parentWidth
			});
	    if(updated > parentWidth){
		return;
	    }
	    if(-updated > collectionWidth){
		return;
	    }

	    if(updated > 20){
	    	return;
	    }

	    offset.left = updated;
	    innerSlider.offset(offset);
	}
	var skipButtons = 
		'<div class="previous sliderButton skipButton"><div class="arrow"></div></div>'+
		'<div class="next sliderButton skipButton"><div class="arrow"></div></div>';

	jQuery('.sliderButton:not(.skipButton)').each(function(){
		var parent = jQ(this).parent();
		jQ(this).addClass('deleteme');
		parent.append(skipButtons);
	});
	jQuery('.deleteme').remove();
    jQuery('.skipButton').click(clickFunction);
}