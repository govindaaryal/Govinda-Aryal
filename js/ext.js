function validate(form)
{
	var returnValue = "";
	returnValue += lengthCheck(form.uemail, 7, "Needed at least 7 characters");		
	returnValue += lengthCheck(form.uname, 3, "Needed at least 3 characters");
	if(returnValue = "")
		returnValue = true;
	else
		returnValue =false;
	
	return returnValue;
}

function lengthCheck(cntrl, len, errMessage)
{
	var err = "";
	if(cntrl.value.length < len)
	{
		err = errMessage;
		cntrl.innerHTML = errMessage;
        cntrl.focus();
	}
	return err;
}
function checkEmail(cntrl)
{
	var atRate = cntrl.value.indexOf('@');
	var dot = cntrl.value.lastIndexOf('.');
	var len = cntrl.value.length;
	cntrl.nextSibling.innerHTML="";
	if(len<7 || atRate > dot || atRate == -1 || (dot-atRate) < 3 )
	{
		cntrl.nextSibling.value = "Enter Correct Email format";		
	}	
}