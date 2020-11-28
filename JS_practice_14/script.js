$(function(){
	$('#btn').on('click', function(){
		// 入力された都市名でWebAPIに天気情報をリクエスト
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
			$('#cityname').val() + "&units=metric&appid=" + "fc9b72c00897f7686cd71d29aca8f207",
			dataType : 'jsonp',
		}).done(function (data){ // 通信成功
			// 位置
			$('#place').text(data.name);
			// 最高気温
			$('#temp_max').text(data.main.temp_max);
			// 最低気温
			$('#temp_min').text(data.main.temp_min);
			// 湿度
			$('#humidity').text(data.main.humidity);
			// 風速
			$('#speed').text(data.wind.speed);
			// 天気
			$('#weather').text(data.weather[0].main);
			// 天気アイコン
			$('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
			$('img').attr("alt",data.weather[0].main);
		}).fail(function (data){ // 通信失敗
			alert('通信に失敗しました。');
		});
	});
});

// 「検索」ボタン(#btn)がクリックされたときの処理を記述する。
// $(function(){
// 	$('#btn').on('click', function(){
// 	});
// });
// 「検索」ボタンは、index.htmlファイルで<button id="btn">で設定しているので、script.jsファイルでは$('#btn')で取得する。

// 天気予報の情報をWeb APIにリクエストする処理を追記する。
// なお、コード内の「API_KEY」の部分には、取得したAPIキーを""で囲って記述する。
// (API_KEY には、"取得したAPIキー"を記述)
// API_KEY = "取得したAPIキー";
// $.ajax({
// 	url: "http://api.openweathermap.org/data/2.5/weather?q=" +
// 	$('#cityname').val() + "&units=metric&appid=" + "API_KEY",
// 	dataType : 'jsonp',
// })
// $.ajax()は、Ajaxを実装するメソッド。
// オプション(パラメータ)も設定できる。今回は、urlとdataTypeの２つを設定している。
// ・url
// ・dataType
// url:では、APIにリクエストするURLを指定する。
// 今回のURLは、http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid="取得したAPI"。
// $('#cityname')val()で#citynameの値を受け取り、URLを結合させている。(val()は、HTMLのvalue属性を取得するメソッド)
// dataTypeでは、レスポンスとして取得したいデータの型を指定する。今回はJSONで受け取りたいので、dataType : 'jsonp',と記述する。

// }).done(function (data){
// }).fail(function (data){
// });
// .done()は通信に成功した場合、.fail()は失敗した場合に記述するメソッド。
// 「通信に成功する」とは、今回はWeb APIが正常に呼び出せたことを意味している。
// どちらのメソッドでも(data)を指定しているが、その引数内に取得した結果が入る。(dataは任意の変数名)

// .done(function (data){
// 	$('#place').text(data.name);
// 	:
// 	:
// 	$('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
// 	$('img').attr("alt",data.weather[0].main);
// })
// $('#place').text(data.name);以下、同じフォーマットが続いている。
// $('#id名').text(JSONから欲しい値)の形で指定すると、指定したidのテキストを、JSONから受け取った値に変換される。
// 例えば、最高気温(temp_max)を取得したい場合は、"data.JSONのオブジェクト名.プロパティ名"で取得している。
// さらに、$(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加される。
// これにより、天気のアイコンを表示することができる。

// 通信に失敗した場合の処理は、アラートウィンドウを表示させる。
// .fail(function (data){
// 	alert('通信に失敗しました。');
// })
