$(document).ready(function () {
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  
  $(".claim").click(function (event) {
    event.preventDefault(); 

    let isValid = true; 

    
    $("input").each(function () {
      const $input = $(this);
      const value = $input.val().trim();

     
      if (value === "") {
        $input.addClass("error");
        $input.siblings(".form_error").text("This field cannot be empty").show();
        isValid = false;
      } else {
        $input.removeClass("error");
        $input.siblings(".form_error").hide();
      }

     
      if ($input.attr("name") === "Email Address" && value !== "" && !isValidEmail(value)) {
        $input.addClass("error");
        $input.siblings(".form_error").text("Looks like this is not an e-mail").show();
        isValid = false;
      }
    });

   
    if (isValid) {
      alert("Form submitted successfully!");
     
    }
  });
});
