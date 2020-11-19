// 「クリック」ボタンを押すとリスト(ul要素)の子要素であるli要素の文字列が、黒色から赤色に変化する。

$(function(){
	$('button').on('click', function(){
		$('ul').children().css('color', 'red');
	});
});

// $('button').on('click', function(){
// この記述は、「button要素がクリックされたときに、処理を実行してください」の意味になる。

// $('ul').children().css('color', 'red');
// .children()は、HTML要素直下の全ての子要素を取得する。
// ここでのchildrenは「ul要素の子要素」、つまりli要素が対象になる。
