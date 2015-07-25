var imgArr_480 =imgArr_600 = imgArr_768 = imgArr_992 = ["img/recepie/lr_1200x400.jpg", "img/recepie/brinjal_1200x400.jpg", "img/recepie/sevai_1200x400.jpg", "img/recepie/vegpuff_1200x400.png"],
	imgArr_1382 = ["img/recepie/lr_1200x600.jpg", "img/recepie/channa_1200x600.jpg", "img/recepie/sevai_1200x600.jpg", "img/recepie/brinjal_1200x600.jpg"];
	//imgArr_600 = ["img/recepie/slide_sample.jpg", "img/recepie/slide_sample.jpg", "img/recepie/slide_sample.jpg", "img/recepie/slide_sample.jpg"],
	//imgArr_480 = ["img/recepie/fishcurryfull_600x600.jpg", "img/recepie/fishcurryfull_600x600.jpg", "img/recepie/fishcurryfull_600x600.jpg", "img/recepie/fishcurryfull_600x600.jpg"];

function carouselImagePicker( ){

	var carouselElement = '<div class="item%active%">'+
                                '<img class="img-responsive img-full" src="%imgUrl%" alt="">'+
                            '</div>',
    	carouselIndicator = '<li data-target="#carousel-example-generic" data-slide-to="%counter%" class="%active%"></li>',
		carouselElements = '',
		carouselIndicators = '',
		screenWidth = screen.width,
		imgArr = [];
	
	if ( screenWidth > 1280 ) {
		
		imgArr = imgArr_1382;

	} else if( screenWidth > 768 ) {

		imgArr = imgArr_992;

	} else if( screenWidth > 600 ) {

		imgArr = imgArr_768;

	} else if( screenWidth > 480 ) {

		imgArr = imgArr_600;

	} else {

		imgArr = imgArr_480;

	}

	for ( var i = 0, len = imgArr.length; i < len; i++ ) {
		
		carouselElements += carouselElement.replace( /%imgUrl%/, imgArr[i] ).replace( /%active%/, (i === 0 ? " active" : "" ) );
		carouselIndicators += carouselIndicator.replace( /%counter%/, i ).replace( /%active%/, (i === 0 ? " active" : "" ) )

	};

	$("#mainCarousel").append(carouselElements);
	$("#carouselIndicator").append(carouselIndicators);

}
/*$( window ).on( "orientationchange", function( e ) {
	var result='';
	for(var key in e){
		result += key+'='+e[key]+';';
	}
  //alert(e.orientation);
  //alert($.event.special.orientationchange.orientation());
});

$(window).bind( 'orientationchange', function(e){
    alert(jQuery.event.special.orientationchange.orientation());
});*/