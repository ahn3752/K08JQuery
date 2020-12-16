function MyAlert(str1, str2){
	alert(str1 + str2);
}

/*
 요청 성공시 호출할 콜백 메소드로 jQuery외부에 정의되었다.
함수명만으로 지정하더라도 콜백 데이터는 파라미터로 전달 받을 수 있다.
*/
function sucFunc(resData){
	alert("$.ajax()메소드 요청성공");
	$('#ajaxDisplay').html(resData);
}