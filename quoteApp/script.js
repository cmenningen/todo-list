function loadQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      document.body.append(document.createTextNode(data.quote));
      document.body.append(document.createTextNode(" - " + data.author));
    });
}

const button = document.querySelector("button");
button.addEventListener("click", loadQuote);
