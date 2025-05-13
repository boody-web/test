 function showInstagram(imageElement) {
            const linkDiv = imageElement.nextElementSibling.nextElementSibling;
      if (linkDiv.style.display === "block") {
        linkDiv.style.display = "none";
      } else {
        linkDiv.style.display = "block";
      }
        }