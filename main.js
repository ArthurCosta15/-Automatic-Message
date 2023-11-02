function mandaZap(elemento) {
  let texto = elemento.firstElementChild.innerText;
  let numero = prompt("Para qual número?");
  let zapLink = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;

  window.open(zapLink);
}