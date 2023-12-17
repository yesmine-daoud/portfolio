document.addEventListener("DOMContentLoaded", function() {
poste_y = document.getElementById("poste");
societe_y = document.getElementById("lsociete");
adresse_y = document.getElementById("add");
phone_y = document.getElementById("phone");
email_y = document.getElementById("email");

  poste_y.addEventListener("focus", function() {
    this.style.backgroundColor = "yellow";
  });

  poste_y.addEventListener("blur", function() {
    validatePoste();
  });

  societe_y.addEventListener("focus", function() {
    this.style.backgroundColor = "yellow";
  });

  societe_y.addEventListener("blur", function() {
    validateSociete();
  });

  adresse_y.addEventListener("focus", function() {
    this.style.backgroundColor = "yellow";
  });

  adresse_y.addEventListener("blur", function() {
    validateAdresse();
  });

  phone_y.addEventListener("focus", function() {
    this.style.backgroundColor = "yellow";
  });

  phone_y.addEventListener("blur", function() {
    validatePhone();
  });

  email_y.addEventListener("focus", function() {
    this.style.backgroundColor = "yellow";
  });

  email_y.addEventListener("blur", function() {
    validateEmail();
  });

  function validatePoste() {
    const value = poste_y.value.trim();
    const errorMessage = document.getElementById("poste_incorrecte");

    if (!/^[a-zA-Z]{4,}$/.test(value)) {
      displayErrorMessage(errorMessage, "Le poste doit contenir au moins 4 lettres.");
    } else {
      removeErrorMessage(errorMessage);
      if (value !== "") {
        poste_y.style.backgroundColor = "lightgreen";
      } else {
        poste_y.style.backgroundColor = "";
      }
    }
  }

  function validateSociete() {
    const value = societe_y.value.trim();
    const errorMessage = document.getElementById("société_incorrecte");

    if (value.length < 3) {
      displayErrorMessage(errorMessage, "La société doit contenir au moins 3 caractères.");
    } else {
      removeErrorMessage(errorMessage);
      if (value !== "") {
        societe_y.style.backgroundColor = "lightgreen";
      } else {
        societe_y.style.backgroundColor = "";
      }
    }
  }

  function validateAdresse() {
    const value = adresse_y.value.trim();
    const errorMessage = document.getElementById("adresse_incorrecte");

    if (value.length < 6) {
      displayErrorMessage(errorMessage, "L'adresse doit contenir au moins 6 caractères.");
    } else {
      removeErrorMessage(errorMessage);
      if (value !== "") {
        adresse_y.style.backgroundColor = "lightgreen";
      } else {
        adresse_y.style.backgroundColor = "";
      }
    }
  }

  function validatePhone() {
    const value = phone_y.value.trim();
    const errorMessage = document.getElementById("phone_incorrecte");

    if (!/^\d{8}$/.test(value)) {
      displayErrorMessage(errorMessage, "Le numéro de téléphone doit contenir exactement 8 chiffres.");
    } else {
      removeErrorMessage(errorMessage);
      if (value !== "") {
        phone_y.style.backgroundColor = "lightgreen";
      } else {
        phone_y.style.backgroundColor = "";
      }
    }
  }

  function validateEmail() {
    const value = email_y.value.trim();
    const errorMessage = document.getElementById("email_incorrecte");

    if (!value.includes("@")) {
      displayErrorMessage(errorMessage, "L'email doit contenir le symbole '@'.");
    } else {
      removeErrorMessage(errorMessage);
      if (value !== "") {
        email_y.style.backgroundColor = "lightgreen";
      } else {
        email_y.style.backgroundColor = "";
      }
    }
  }

  function displayErrorMessage(element, message) {
    element.textContent = message;
    element.style.color = "red";
  }

  function removeErrorMessage(element) {
    element.textContent = "";
  }
});




document.addEventListener("DOMContentLoaded", function() {


  const submitButton = document.querySelector('button[type="submit"]');

  submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 

     alert("Le formulaire est prêt à être soumis !");
  });
});