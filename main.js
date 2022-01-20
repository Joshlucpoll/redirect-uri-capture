$("#copy").css("visibility", "hidden");

const params = new URLSearchParams(window.location.search);

copyClicked = (e) => navigator.clipboard.writeText(params.get("code"));

if (Array.from(params.entries()).length == 0) {
  $("#title").text("That didn't work! I can't find any params 🤔");
} else {
  $("#title").text("Redirect Capture Successful!");
  $("#params").text("Parameters found:");

  for (const param of params.entries()) {
    $("#params").append(
      ["<li id='param'><code>", param[0], " = ", param[1], "</code></li>"].join(
        ""
      )
    );
  }
  console.log(window.location.pathname);
  if (window.location.pathname == "/spotify-callback.html") {
    $("#copy").css("visibility", "visible");
  }
}
