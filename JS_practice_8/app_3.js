// ここまでの記述では、マウスカーソルのイベントを検出して、その都度、CSSを変更させていた。
// その記述では、全てのCSSをいちいち書かねばならず、手間がかかってしまう。
// そこで、マウスオーバー時のCSS(class)を予め定義しておき、マウスカーソルの状況に応じて、そのCSSを追加(または解除)するように設定する。

// .box1-extが、マウスオーバー時に適用されるCSS(class)。
// マウスオーバーすると.box1-extのclassが追加され、マウスアウトすると.box1-extのclassが外れるという記述。

$(function(){
	$('.box1').mouseover(function(){
		$('.box1').addClass('box1-ext');
	});
	$('.box1').mouseout(function(){
		$('.box1').removeClass('box1-ext');
	});
});

// class属性の切り替えに使われているのが、addClass()とremoveClass()。
// addClass()では、対象のHTML要素にclass属性を追加する。
// removeClass()では、要素に設定されているclass属性が解除される。
