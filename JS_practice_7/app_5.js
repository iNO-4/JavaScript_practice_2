// 練習
// 要素を上から下へスライド、色を変えて下から上へスライド


$(function(){
	$('.box1').slideDown(2000,function(){
		$('.box1').css({
			'background-color': '#0000FF',
			'width': '200px',
			'heigth': '100px'
		}).slideUp(2000);
	});
});
