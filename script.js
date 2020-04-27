document.querySelector('.img-btn').addEventListener('click',function()
{
   document.querySelector('.cont').classList.toggle('s-signup')
});

function validation()
{
   // name validation
    var flag;
	var user = document.getElementById("user").value;
	var re=/([a-zA-Z]{2,30})/;

	var mail = document.getElementById("mail").value;
	var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

	var pass = document.getElementById("pass").value;
	var reg=/([a-zA-Z0-9]{6,12})/;

	var conpass = document.getElementById("conpass").value;


	if(user == "")
	{
		document.getElementById("inv").style.visibility="visible";
				    flag=1;
	}
	else if (re.test(user))
			 {
			 	
			 	flag=0;
			}
			else
			{
				document.getElementById("inv").innerHTML="Invalid Name";
				document.getElementById("inv").style.visibility="visible";
				document.getElementById("inv").style.color="red";
				flag=1;
			}

	

 // mail validation

	
	if(mail == "")
	{
		document.getElementById("inv3").style.visibility="visible";
				    flag=1;
	}
	else if (regx.test(mail))
			 {
			 	
			 	flag=0;
			}
			else
			{
				document.getElementById("inv3").innerHTML="Invalid Email-Id";
				document.getElementById("inv3").style.visibility="visible";
				document.getElementById("inv3").style.color="red";
				flag=1;
			}

  // password validation

	
	if(pass == "")
	{
		document.getElementById("inv1").style.visibility="visible";
				    flag=1;
	}
	else if(reg.test(pass)){
			 	flag=0;
	}
	else{
		document.getElementById("inv1").innerHTML="Invalid Password";
		alert("Password should be between 2-8 units and contain only numbers and characters");
				flag=1;
	}

// confirm password validation

	
	if(conpass == "")
	{
		document.getElementById("inv2").style.visibility="visible";
				    flag=1;
	}

	else if(conpass.match(pass))
	{
		flag=0;
	}
	else
	{
		document.getElementById("inv2").innerHTML="Please Confirm correct password";
		document.getElementById("inv2").style.visibility="visible";
				document.getElementById("inv2").style.color="red";
				    flag=1;

	}

	if(flag==0)
	{
		alert("Registration Successful");
	}
	else{
		alert("Please fill all Data");
	}
		
}

function validate()
{
	var flag1;
	var email = document.getElementById("email").value;

	var lpass = document.getElementById("lpass").value;

if(email == "")
	{
		document.getElementById("inv0").style.visibility="visible";
		document.getElementById("inv0").innerHTML="Email Empty";
				    flag=1;
	}
	else if(email.match(mail)){
		flag1=0;
	}
	else{
		document.getElementById("inv0").style.visibility="visible";
				document.getElementById("inv0").style.color="red";
				    flag1=1;
	}

if(lpass == "")
	{
		document.getElementById("inv9").style.visibility="visible";
		document.getElementById("inv9").innerHTML="Password Empty";
				    flag1=1;
	}
  else if(lpass.match(pass)){
		flag1=0;
	}
	else{
		document.getElementById("inv9").style.visibility="visible";
				document.getElementById("inv9").style.color="red";
				    flag1=1;
	}

	if(flag1==0)
	{
		alert("Login Successful");
	}
	else{
		alert("Please fill all Data");
	}

}