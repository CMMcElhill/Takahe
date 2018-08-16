jQuery(document).ready(function($){
	var modalTrigger = $('.it-js-trigger'),
		transitionLayer = $('.it-js-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.it-js-modal');
	var frameProportion = 1.78,    //frame ratio
		frames = 25,               //number of frames   >>>>> images as png
		resize = false;
    
setLayerDimensions();
$(window).on('resize', function(){
if( !resize ) {
    resize = true;
    (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);}});
modalTrigger.on('click', function(event){	
    event.preventDefault();
    transitionLayer.addClass('visible opening');
		var delay = ( $('it-js-X-animation').length > 0 ) ? 0 : 600;
		setTimeout(function(){
			modalWindow.addClass('visible');}, delay);});
modalWindow.on('click', '.it-js-modal-end', function(event){
    event.preventDefault();
    transitionLayer.addClass('closing');
    modalWindow.removeClass('visible');
    transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
        transitionLayer.removeClass('closing opening visible');
        transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');});});
function setLayerDimensions() {
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        layerHeight, layerWidth;
    if( windowWidth/windowHeight > frameProportion ) {
        layerWidth = windowWidth;
        layerHeight = layerWidth/frameProportion;}
    else {layerHeight = windowHeight*1.2;
          layerWidth = layerHeight*frameProportion;}
transitionBackground.css({
    'width': layerWidth*frames+'px',
    'height': layerHeight+'px',});
resize = false;}});