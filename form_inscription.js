function estMail(champ)	{
/* Fonction de test de saisie numérique*/
	var email = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$');
	if(champ.value.match(email))	{
		// alert("Vous avez saisi " + document.getElementById('email').value);
		return true;
	}
	else {
		//Focus sur le champ en erreur
		champ.focus();
		return false;
	}
}

function estNom(champ)	{
	var nom = /^[a-zA-Z]+$/;
	if(champ.value.match(nom))	{
		return true;
	}
	else {
		champ.focus();
		return false;
	}
}

function estPrenom(champ)	{
/* Fonction de test de saisie numérique*/
	var prenom = /^[a-zA-Z]+$/;
	if(champ.value.match(prenom))	{
		// alert("Vous avez saisi " + document.getElementById('email').value);
		return true;
	}
	else {
		//Focus sur le champ en erreur
		champ.focus();
		return false;
	}
}

function estCorrect(champ1,champ2,champ3) 
{
    if(estMail(champ1) && estNom(champ2) && estPrenom(champ3))
    {
		alert("ok");
        //document.location.href="#";
    }
	else if (!estMail(champ1))
	{
		alert("Veuillez saisir un email correct");
	}
	else if (!estNom(champ2))
	{
		alert("Veuillez saisir un nom correct");
	}
	else if (!estPrenom(champ3))
	{
		alert("Veuillez saisir un prénom correct");
	}
	/*else if (!estAge(champ4))
	{
		alert("Veuillez saisir un age correct");
	}*/

}