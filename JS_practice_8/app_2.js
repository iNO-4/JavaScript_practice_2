// app_1.jsの状態では、「マウスオーバー」の状態しか検出されない。
// 青色の正方形からマウスカーソルが外れたときに、再び赤色に戻る設定も必要。
// .mouseoverの箇所が.mouseoutになっているだけで、イベントの記述方法は同じ。

$(function(){
	$('.box1').mouseover(function(){
		$('.box1').css({'background-color': '#0000FF'});
	});
	$('.box1').mouseout(function(){
		$('.box1').css({'background-color': '#FF0000'});
	});
});
