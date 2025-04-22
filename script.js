$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(Window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        
        if($(Window).scrollTop()>30){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');
        }
    })
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

function toggleChat() {
    const body = document.getElementById("chatbotBody");
    const toggleBtn = document.querySelector(".chat-toggle-btn");
    const isOpen = body.style.display === "block";
  
    if (isOpen) {
      body.style.display = "none";
      toggleBtn.style.display = "none";
    } else {
      body.style.display = "block";
      toggleBtn.style.display = "block";
    }
  }

    // Convert email input to lowercase as the user types
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.querySelector("button"); // Selects your login button
  
    emailInput.addEventListener("input", () => {
      emailInput.value = emailInput.value.toLowerCase();
    });
  
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent form submission (optional, based on form setup)
  
      const email = emailInput.value.trim();
      const password = passwordInput.value;
  
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }
  
      const confirmSave = confirm("Do you want to save your Gmail and password?");
      if (confirmSave) {
        console.log("Email:", email);
        console.log("Password:", password);
        alert("Your login info has been saved!");
        // Optionally: Send to backend here using fetch()
      } else {
        alert("Login info was not saved.");
      }
    });


  document.getElementById("appointmentBtn").onclick = function () {
    document.getElementById("formPopup").style.display = "block";
  };
  
  document.getElementById("closeForm").onclick = function () {
    document.getElementById("formPopup").style.display = "none";
  };

  
  document.querySelectorAll('.social-icons i').forEach(icon => {
    icon.addEventListener('click', () => {
      SubmitEvent(`${icon.classList[1].replace('fa-', '')}`);
    });
  });

  


  //document.querySelectorAll('.department').forEach(dep => {
    //dep.addEventListener('click', () => {
      //alert(`you clicked on ${dep.querySelector('p,a[herf^="#"').textContent}`);
      //SubmitEvent(`${dep.classList[1].replace('fa-', '')}`);
   // });
  //});

  function redirectTo(url) {
    window.location.href = url
  }
 


  