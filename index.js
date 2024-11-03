const url = "https://raw.githubusercontent.com/iamtakagi/chocolate-sunday-sentence/refs/heads/main/data.txt";
let lines = "";

function getVerseRandom() {
  return lines[Math.floor(Math.random() * lines.length)]
}

window.addEventListener("DOMContentLoaded", () => {
    fetch(url)
      .then(r => r.text() )
      .then(str => {
          lines = str.split("\n");
      }
  );

  document.querySelector("#generate").onclick = () => {
      let length = document.getElementById('length').value
      if (length <= 0) {
        length = 1;
      }
      let text = "";
      for (let i = 1; i <= length; i++) {
        text += getVerseRandom();
      }
      document.querySelector("#result").innerText = text
  }
  document.querySelector("#tweet").onclick = () => {
    const result = document.querySelector("#result").innerText;
    if (result === "" || result === null || result === undefined) return alert("構文を生成してください♪")
    window.open(
        `https://twitter.com/intent/tweet?text=${result}` + encodeURI(`&url=https://iamtakagi.github.io/chocolate-sunday-sentence/&hashtags=月曜が近いよ構文`),
        "_blank",
        "noreferrer"
    )
}
})