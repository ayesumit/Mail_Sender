console.log('Hello World!');

function sendEmail() { 

      var user_name = document.getElementById("from").value
      var recipient_name = document.getElementById("to").value
      var main_subj = document.getElementById("subj").value
      var main_content = document.getElementById("main").value
      var passwd = document.getElementById("passwd").value
	  

      Email.send({ 
      	
        Host: "smtp.gmail.com", 

        Username: user_name, 

        Password: passwd, 

        To: recipient_name, 

        From: user_name, 

        Subject: main_subj, 

        Body: main_content, 

      }) 

        .then(function (message) { 

          alert("mail sent successfully") 

        }); 

    } 

function toggle() {
		var x = document.getElementById("from");
		var y = document.getElementById("passwd");
		

		if (x.style.display === "none" && y.style.display === "none" ) 
		{
			
			x.style.display = "block";
			y.style.display = "block";
			
	
	
		} else {
			x.style.display = "none";
			y.style.display = "none";

		}
}