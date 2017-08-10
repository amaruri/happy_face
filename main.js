$( document ).ready(function() {
    var speak = function(frase){
		responsiveVoice.speak(frase, "Spanish Latin American Female", {
			volume: 1,
			onstart: function(){
				$('.speak').addClass('speaking');
			},
			onend: function(){
				$('.speak').removeClass('speaking');
			}
		});
	};

	$('#play').on('click', function(){
		var frase = $('#frase').val();
		speak(frase);
	});

	setInterval(function(){
		$('.speak').addClass('stay');
	}, 5000);

	setInterval(function(){
		$('.speak').removeClass('stay').addClass('wait');
	}, 10000);

	setInterval(function(){
		$('.speak').removeClass('wait');
	}, 15000);
});