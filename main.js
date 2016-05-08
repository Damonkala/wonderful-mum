$(document).ready(init)
var trait = "";
function init() {
	$('#question').click(answer);
	$('#desc').click(answer);
}
function answer() {
	switch(trait) {
		case "":
		clearClass()
		trait = "Dedication"
		$('#question').addClass("hidden");
		$('#desc').addClass("hidden");
		var dedicate = function(){
			$('#question').addClass("visible");
			$('#question').text("Dedication");
			$('#desc').text("A wonderful mother is someone who is dedicated to their children no matter how hard times get.");
			$('#desc').addClass("visible");
		};
		setTimeout(dedicate, 1000);
		break;
		case "Dedication":
		clearClass();
		trait = "Compassion"
		$('#question').addClass("hidden");
		$('#desc').addClass("hidden");
		var comp = function(){
			$('#question').addClass("visible");
			$('#question').text("Compassion");
			$('#desc').text("A wonderful mother is someone who is compassionate and kind to others, and sets an example about how to be so wonderful.");
			$('#desc').addClass("visible");
		};
		setTimeout(comp, 1000);
		break;
		case "Compassion":
		clearClass();
		trait = "Admiration"
		$('#question').addClass("hidden");
		$('#desc').addClass("hidden");
		var adm = function(){
			$('#question').addClass("visible");
			$('#question').text("Admiration");
			$('#desc').text("A wonderful mother is someone who is admirable, someone for her children to look up to and aspire to be like.");
			$('#desc').addClass("visible");
		};
		setTimeout(adm, 1000);
		break;
		case "Admiration":
		clearClass();
		trait = "Creativity"
		$('#question').addClass("hidden");
		$('#desc').addClass("hidden");
		var creative = function(){
			$('#question').addClass("visible");
			$('#question').text("Creativity");
			$('#desc').text("A wonderful mother is someone who is creative, being able to come up with clever solutions to solve any problem she or her children might have.");
			$('#desc').addClass("visible");
		};
		setTimeout(creative, 1000);
		break;
		case "Creativity":
		clearClass();
		trait = "Wisdom"
		$('#question').addClass("hidden");
		$('#desc').addClass("hidden");
		var wise = function(){
			$('#question').addClass("visible");
			$('#question').text("Wisdom");
			$('#desc').text("A wonderful mother is someone who is wise, an experienced person who teaches the best life lessons to her children.");
			$('#desc').addClass("visible");
		};
		setTimeout(wise, 1000);
		break;
		case "Wisdom":
		clearClass();
		trait = "You"
		$('#question').addClass("hidden");
		$('#desc').addClass("hidden");
		var you = function(){
			$('#question').addClass("visible");
			$('#question').text("You");
			$('#desc').text("You are the most wonderful mother. I am lucky to have someone like you in my life, and I appreciate everything you've ever done for me, and wish that one day I'll be able to make it up to you. I love you so much mum. Happy Mother's Day.");
			$('#desc').addClass("visible");
		};
		setTimeout(you, 1000);
		break;
	}
}

function clearClass() {
	$('#question').removeClass("visible");
	$('#question').removeClass("hidden");
	$('#desc').removeClass("visible");
	$('#desc').removeClass("hidden");
}
