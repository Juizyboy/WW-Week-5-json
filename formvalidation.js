$(document).ready(function(){
	$naam = $('input[name=naam]');
	$telnr = $('input[name=telnr]');
	$email = $('input[name=email]');
	$onderwerp = $('input[name=onderwerp]');
	$bericht = $('textarea');
	var nameOK = false;
	var telnrOK = false;
	var emailOK = false;
	var onderwerpOK = false;
	var berichtOK = false;
	
	checkOK = function() {
		if (nameOK === true && telnrOK === true && emailOK === true && onderwerpOK === true && berichtOK === true) {
			$('input[name=submit]').removeAttr("disabled");
		}
		else {
			$('input[name=submit]').attr("disabled", "disabled");
		}
	};
	checkOK();
	
	$naam.keyup(function(){
		var name = $naam.val();
		if (name === null || name === "" || name.length < 3) {
			$('.namecross').remove();
			$('.namecheck').remove();
			$naam.after('<img src="cross.gif" class="namecross" title="De ingevoerde naam moet ten minste drie tekens bevatten."/>');
			nameOK = false;
			checkOK();
			$naam.removeClass("border-check");
			$naam.addClass("border-cross");
		}
		else {
			$('.namecheck').remove();
			$('.namecross').remove();
			$naam.after('<img src="check.jpg" class="namecheck" />');
			nameOK = true;
			checkOK();
			$naam.removeClass("border-cross");
			$naam.addClass("border-check");	
		}
	});
	
	$telnr.keyup(function(){
		var telnr = $telnr.val();
		if (telnr === null || telnr === "" || telnr.length < 10) {
			$('.telnrcross').remove();
			$('.telnrcheck').remove();
			$telnr.after('<img src="cross.gif" class="telnrcross" title="Het ingevoerde telefoonnummer is niet geldig." />');
			telnrOK = false;
			checkOK();
			$telnr.addClass("border-cross");
			$telnr.removeClass("border-check");
			$telnr.addClass("border-cross");
		}
		else {
			$('.telnrcheck').remove();
			$('.telnrcross').remove();
			$telnr.after('<img src="check.jpg" class="telnrcheck" />');
			telnrOK = true;
			checkOK();
			$telnr.removeClass("border-cross");
			$telnr.addClass("border-check");
		}
	});
	
	$email.keyup(function(){
		var email = $email.val();
		function validateEmail() {
			var x = document.forms["contact"]["email"].value;
			var atpos = x.indexOf("@");
			var dotpos = x.lastIndexOf(".");
			if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
				return false;
			}
		}
		if (validateEmail() === false) {
			$('.emailcross').remove();
			$('.emailcheck').remove();
			$email.after('<img src="cross.gif" class="emailcross" title="Het ingevoerde e-mailadres is niet geldig."/>');
			emailOK = false;
			checkOK();
			$email.addClass("border-cross");
			$email.removeClass("border-check");
			$email.addClass("border-cross");
		}
		else {
			$('.emailcheck').remove();
			$('.emailcross').remove();
			$email.after('<img src="check.jpg" class="emailcheck" />');
			emailOK = true;
			checkOK();
			$email.removeClass("border-cross");
			$email.addClass("border-check");
		}
	});
	
	$onderwerp.keyup(function(){
		var onderwerp = $onderwerp.val();
		if (onderwerp === null || onderwerp === "") {
			$('.onderwerpcross').remove();
			$('.onderwerpcheck').remove();
			$onderwerp.after('<img src="cross.gif" class="onderwerpcross" title="U heeft geen onderwerp ingevuld."/>');
			onderwerpOK = false;
			checkOK();
			$onderwerp.removeClass("border-check");
			$onderwerp.addClass("border-cross");
		}
		else {
			$('.onderwerpcheck').remove();
			$('.onderwerpcross').remove();
			$onderwerp.after('<img src="check.jpg" class="onderwerpcheck" />');
			onderwerpOK = true;
			checkOK();
			$onderwerp.removeClass("border-cross");
			$onderwerp.addClass("border-check");
		}
	});
	
	$bericht.keyup(function(){
		var bericht = $bericht.val();
		if (bericht === null || bericht === "" || bericht.length < 10) {
			$('.berichtcross').remove();
			$('.berichtcheck').remove();
			$bericht.after('<img src="cross.gif" class="berichtcross" title="Het ingevoerde bericht moet ten minste tien tekens bevatten."/>');
			berichtOK = false;
			checkOK();
			$bericht.removeClass("border-check");
			$bericht.addClass("border-cross");
		}
		else {
			$('.berichtcheck').remove();
			$('.berichtcross').remove();
			$bericht.after('<img src="check.jpg" class="berichtcheck" />');
			berichtOK = true;
			checkOK();
			$bericht.removeClass("border-cross");
			$bericht.addClass("border-check");
		}
	});
});