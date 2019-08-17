let progressbarStatus = 10;

$("#progressbarMain").width(progressbarStatus + "%");

function progressbarPlus1() {
	progressbarStatus = progressbarStatus + 1;
	$("#progressbarMain").width(progressbarStatus + "%");
	$("div#progressbarMain").html(progressbarStatus + "%");
}
function progressbarPlus3() {
	progressbarStatus = progressbarStatus + 3;
	$("#progressbarMain").width(progressbarStatus + "%");
	$("div#progressbarMain").html(progressbarStatus + "%");
}
function progressbarPlus7() {
	progressbarStatus = progressbarStatus + 7;
	$("#progressbarMain").width(progressbarStatus + "%");
	$("div#progressbarMain").html(progressbarStatus + "%");
}

function clickButton1() {
	$("#button1").click(progressbarPlus1);
}
function clickButton3() {
	$("#button3").click(progressbarPlus3);
}
function clickButton7() {
	$("#button7").click(progressbarPlus7);
}
$(document).ready(clickButton1);
$(document).ready(clickButton3);
$(document).ready(clickButton7);