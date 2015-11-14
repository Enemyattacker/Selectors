function css(){
	$("input[type='text']").css({
	border: "5px solid #cccccc",
	borderRadius: "9px",
	background: "#ffffff",
	outline: "none",
	height: "34px",
	width: "220px",
	color: "black",
	fontSize: "16px",
	fontFamily: "Tahoma",
	textAlign: "center"
	});
	
	$("input[class='date']").css({
		width: "50px"
	});
	
	$("input[class='bank']").css({
		width: "70px"
	});
	
	$("input[id='static']").css({
		width: "30px"
	});
	
	$("input[id='code']").css({
		width: "80px"
	});
	
	$("input[id='phone']").css({
		width: "110px"
	});
}

function cold(){
	$(":text").css({
		"background": "#7B1FA2",
		"color": "#E1BEE7"
	});
	
	$("body").css("background", "#9C27B0");

	$(".submit").css({
	"background": "#7C4DFF",
	"color": "white"
	});
}

function warm(){
	$("body").css("background", "#E64A19");
	
	$(":text").css({
		"background": "#CDDC39",
		"color": "black"
	});
	
	$(".submit").css({
		"background": "#FFEB3B",
		"color": "black"
	});
}
