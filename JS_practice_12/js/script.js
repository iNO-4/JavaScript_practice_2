$(function() {
	$('.menu-trigger').on('click', function(event) {
		$(this).toggleClass('active');
		$('#sp-menu').fadeToggle();
		event.preventDefault();
	});
});

// 今回の「マウスクリック」イベントの設定
// $('.menu-trigger').on('click', function(event) {
	// .menu-triggerクリック時に行われる処理
// });
// ここでは、.menu-triggerがクリックされたときに、処理が行われるように設定している。
// .menu-triggerはどこに設定されているかというと、ハンバーガーアイコン<a class="menu-trigger" href="#">に設定されている。

// .toggleClass()は、指定されているclass(ここではactive)をトグル処理するメソッド。
// トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加される。
// <a class="menu-trigger" href="#">
// <a>タグのclassにはmenu-triggerが指定され、activeは指定されていない。
// このときに.toggleClass()を設定すると、アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除される。
// このように、.toggleClass()によって、class属性の追加と削除が交互に行われる。
// さらに、.menu-trigger.active span:nth-of-type(1)、.menu-trigger.active span:nth-of-type(2)、.menu-trigger.active span:nth-of-type(3)の
// 各CSSによって、activeクラスになったときアイコンが「×」になるように設定されている。
// このため、以下のように書くだけで、アイコンが切り替わる。
// $(this).toggleClass('active');

// $('#sp-menu').fadeToggle();
// .fadeToggle()は、要素のフェードイン・アウトを切り替えるメソッド。
// このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定する。
// ここでは、#sp-menuが開いたときに、.fadeToggle()が処理されるように設定する。
// #sp-menuはどこに設定されているかというと、ハンバーガーメニュー<div id="sp-menu">に設定されている。
// このように設定することで、ハンバーガーメニューがクリックされたときに、フェードイン・アウトが交互に実行されるようになる。
