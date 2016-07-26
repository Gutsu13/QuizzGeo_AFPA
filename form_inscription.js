function estMail(champ, messageAlerte)	{
/* Fonction de test de saisie numérique*/
	var email = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$');
	if(champ.value.match(email))	{
		// alert("Vous avez saisi " + document.getElementById('email').value);
		return true;
	}
	else {
		alert(messageAlerte);
		//Focus sur le champ en erreur
		champ.focus();
		return false;
	}
}


function estCorrect(champ1,champ2,champ3,champ4) 
{
    if(estmail(email,'Veuillez saisir un email correct') && estNom(nom,'Veuillez saisir un nom correct') && estPrenom(prenom,'Veuillez saisir un nom correct') && estAge(age,'Veuillez saisir un nom correct'))
    {
        document.location.href="#"
    }

}