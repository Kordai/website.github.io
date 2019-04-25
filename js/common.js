$(document).ready(function () {

	
	$(".top_banner").mousemove(function (e) {
		let $wit = ($(".top_banner").width() / 2) - 350;
		console.log($wit);
		var moveX = (e.pageX * 1/30) + $wit;
		var moveY = (e.pageY * 1/30);
		$(this).css("background-position", moveX + "px " + moveY + "px");
	});

$("#form").submit(function() {

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
});