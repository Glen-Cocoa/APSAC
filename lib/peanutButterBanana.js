/*
function toggleBox(){
  if($('#states div:nth-child(n+5)').css("display", "block")){
    $('#states').css("display", "block")
  }
 }
*/
function toggleBox(input) {
    var x = document.getElementById(input);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
/*
		$(document).ready(function() {
			var threshold = 3;
			if ($("div.item-b").children().not(".show").length > threshold) {
				$(".show.more").css("display", "block");
			}
			$(".show.more").on("click", function() {
				$(this).parent().children().not(".show").css("display", "block");
				$(this).parent().find(".show.less").css("display", "block");
				$(this).hide();
			});
			$(".show.less").on("click", function() {
				$(this).parent().children(":nth-child(n+" + (threshold + 1) + ")").not(".show").hide();
				$(this).parent().find(".show.more").css("display", "block");
				$(this).hide();
			});
    });
    */