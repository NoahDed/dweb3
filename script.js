console.log("hi sugardaddy !")


var paragraphes = document.getElementsByTagName("p"); // Get all paragraphs

for (var i = 0; i < paragraphes.length; i++) {
  paragraphes[i].addEventListener("mouseover", function (event) {
    var prefixe = "Au survol du paragraphe : ";
    var prenom = this.getAttribute("data-prenom"); // Get the "data-prenom" attribute
    console.log(prefixe + prenom);
  });
}