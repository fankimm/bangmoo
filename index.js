$(document).ready(function () {
  renderCurrentTime();
  renderQuote();
});

function renderCurrentTime() {
  let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let datetime = data["datetime"].substr(11, 8);
      $("#time").text(datetime);
    });
}

function renderQuote() {
  let url = `https://api.quotable.io/random`;
  fetch(url)
    .then((res) => {
      const result = res.json();
      return result;
    })
    .then((data) => {
      let content = `" ${data["content"]} "`;
      let author = `- ${data["author"]} -`;
      $("#content").text(content);
      $("#author").text(author);
      // const rand = Math.floor(Math.random() * 10);
      // $("#author")[0].style = `font-size:${
      //   rand + 5
      // }px;transition:font-size 1s`;
    });
}

setInterval(() => {
  renderQuote();
}, 3000);

setInterval(() => {
  renderCurrentTime();
}, 1000);
