/*JavaScript*/

function adminForm(form){
    var name= form.aname.value;
    var pwd= form.apwd.value;
    if(name!=""&& pwd!=""){
        if(name!="govinda" && pwd!="adnivog"){
            document.getElementById('errMessage').innerHTML="Username or Password Incorrect!!";
            return false;
        }
    }
    else{
        document.getElementById('errMessage').innerHTML="Please enter the username and password";
        return false;
    }
}

function validate()
{
	var rValue = "";
	rValue += lengthCheck(document.getElementById('txtEmail'), 7, "Needed at least 7 characters");	
	rValue += lengthCheck(document.getElementById('txtName'), 3, "Needed at least 3 characters");
	if(rValue = "")
		rValue = true;
	else
		rValue =false;
	
	return rValue;
}
function lengthCheck(cntrl, len, errMessage)
{
	var err = "";
	if(cntrl.value.length < len)
	{
		err = errMessage;
		cntrl.value=errMessage;
        cntrl.style.backgroundColor="#239D68";
        cntrl.style.color="#f00";
        cntrl.style.fontStyle="italic";
        cntrl.focus();
        return false;
	}
	return err;
}


function checkEmail(cntrl)
{
	var atRate = cntrl.value.indexOf('@');
	var dot = cntrl.value.lastIndexOf('.');
	var len = cntrl.value.length;
	cntrl.innerHTML="";
	if(len<7 || atRate > dot || atRate == -1 || (dot-atRate) < 3 )
	{
		cntrl.innerHTML= "Enter Correct Email format";		
	}	
}