
var paragraphes = document.getElementsByTagName("p"); 

for (var i = 0; i < paragraphes.length; i++) {
  paragraphes[i].addEventListener("mouseover", function (event) {
    var prefixe = "Je suis -> ";
    var prenom = this.getAttribute("data-prenom");
    console.log(prefixe + prenom);
  });
}
