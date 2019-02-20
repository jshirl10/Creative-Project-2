document.getElementById("mathSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const mathEquation = document.getElementById("mathInput").value;
  console.log(mathEquation);
  console.log("flag");
  if (mathEquation === "")
    return;
  console.log(mathEquation);
  const url = "https://newton.now.sh/derive/" + encodeURIComponent(mathEquation);
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += "Answer: ";
      results += json.result;
      document.getElementById("mathResults").innerHTML = results;
    });
});