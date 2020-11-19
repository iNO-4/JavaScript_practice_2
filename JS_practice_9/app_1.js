// 正方形をクリックしたときに、その正方形のみslideUpして消えるアニメーション。

$(function(){
	$('.bg1').on('click', function(){
		$('.bg1').slideUp();
	});

	$('.bg2').on('click', function(){
		$('.bg2').slideUp();
	});

	$('.bg3').on('click', function(){
		$('.bg3').slideUp();
	});

	$('.bg4').on('click', function(){
		$('.bg4').slideUp();
	});
});
