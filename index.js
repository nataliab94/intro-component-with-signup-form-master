$(document).ready(function () {
  // Funkcja walidująca e-mail
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Obsługa kliknięcia przycisku "CLAIM YOUR FREE TRIAL"
  $(".claim").click(function (event) {
    event.preventDefault(); // Zatrzymanie domyślnego działania formularza

    let isValid = true; // Flaga walidacji

    // Iteracja po wszystkich polach input
    $("input").each(function () {
      const $input = $(this);
      const value = $input.val().trim();

      // Sprawdzanie, czy pole jest puste
      if (value === "") {
        $input.addClass("error");
        $input.siblings(".form_error").text("This field cannot be empty").show();
        isValid = false;
      } else {
        $input.removeClass("error");
        $input.siblings(".form_error").hide();
      }

      // Sprawdzanie poprawności e-maila, jeśli pole to e-mail
      if ($input.attr("name") === "Email Address" && value !== "" && !isValidEmail(value)) {
        $input.addClass("error");
        $input.siblings(".form_error").text("Looks like this is not an e-mail").show();
        isValid = false;
      }
    });

    // Jeśli wszystkie pola są poprawne
    if (isValid) {
      alert("Form submitted successfully!");
      // Możesz dodać logikę wysyłania formularza
    }
  });
});
