$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event){
	$("#tab-contents .tab").hide();
	$("#tab-menu .active").removeClass("active");
	$($(this).attr("href")).show();
	event.preventDefault();
});

// $('#tab-contents .tab[id != "tab1"]').hide();
// $()関数では、特定の属性を持つ要素や属性値を絞り込むことができる。
// 特定の属性を持つ要素のみ取得したいときは、以下のように記述する。
// $('要素[属性]')
// 属性値が特定の値に等しい要素だけを取得したいときは、以下のように記述する。
// $('要素[属性 = "値"]')
// 今回は、初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示にする。
// 属性値が特定の値に等しくない要素だけを取得したいときは、以下のように記述する。
// $('要素[属性 != "値"]')
// また、.hide();は、特定のHTML要素を非表示にするメソッド。
// このため、$('#tab-contents .tab[id != "tab1"]').hide();と記述することで、id="tab-contents"の要素のうち、class="tab"であり、id="tab1"ではない要素が非表示になる。

// $('#tab-menu a').on('click', function(event){
// 	イベント発生時に行われる処理
// });
// ここでは、「id="tab-menu"の<a>タグがクリックされたときに、処理を実行してください」の意味になる。

// $("#tab-contents .tab").hide();
// id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内のコンテンツを一旦非表示にしている。

// $("#tab-menu .active").removeClass("active");
// .removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド。
// ここでは、activeが削除対象のクラスとして指定されている。
// CSSの#tab-menu.activeの設定では、タブのクラスがactiveのときは背景色が白/文字色が黒になるように設定されている。
// タブを切り替えるときは、このCSS設定も一旦削除しなければならない。このため、.removeClass()にactiveクラスを指定している。

// $($(this).attr("href")).show();
// .addClass()は、任意のHTML要素にクラス属性を追加できるメソッド。
// ここでは、activeが追加対象のクラスとして指定されている。
// どのときにactiveクラスが追加されるかというと、$(this)のとき、つまりタブがクリックされたとき。

// $($(this).attr("href")).show();
// .after()は、HTML要素の属性を取得したり設定できるメソッド。
// ここでは、href属性を取得するように指定している。
// さらに、.show()は要素を表示するメソッドなので、取得したhref属性の中身が表示されることになる。
// どのときに表示されるかというと、$(this)のとき、つまりタブがクリックされたとき。
