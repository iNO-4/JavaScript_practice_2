$(function(){
	$('#btn').on('click', function(){
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
			$('#cityname').val() + "&units=metric&appid=" + "fc9b72c00897f7686cd71d29aca8f207",
			dataType : 'jsonp' ,
		}).done(function (data){
			$('#place').text(data.name);
			$('#temp_max').text(data.main.temp_max);
			$('#temp_min').text(data.main.temp_min);
			$('#humidity').text(data.main.humidity);
			$('#speed').text(data.wind.speed);
			$('#weather').text(data.weather[0].main);
			$('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
			$('img').attr("alt",data.weather[0].main);
		}).fail(function (data){
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
