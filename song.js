// DEFAULT CODE ////////////////////////
const BASE_URL = "https://api.lyrics.ovh/v1/";
const songList = document.querySelector("#song-list");
const lyricsPanel = document.querySelector("#lyrics-panel");
const album = {
  artist: "Adele",
  album: "25",
  tracks: [
    "Hello",
    "Send My Love (To Your New Lover)",
    "I Miss You",
    "When We Were Young",
    "Remedy",
    "Water Under the Bridge",
    "River Lea",
    "Love in the Dark",
    "Million Years Ago",
    "All I Ask",
    "Sweetest Devotion"
  ]
};

// WRITE YOUR CODE ////////////////////////
//左欄的曲目由 album 物件動態產生
let htmlContent = "";
for (let i = 0; i < album.tracks.length; i++) {
  htmlContent += `<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link" href="#">${album.tracks[i]}</a>
</ul>
`;
  songList.innerHTML = htmlContent;
}
//滑鼠移入
songList.addEventListener("mousemove", function () {
  if (event.target.matches(".nav-link")) {
    event.target.classList.add("active");
  }
});
//滑鼠移出
songList.addEventListener("mouseout", function () {
  if (event.target.matches(".nav-link")) {
    event.target.classList.remove("active");
  }
});
// 滑鼠點擊時，串接API
songList.addEventListener("click", function () {
  if (event.target.matches(".nav-link")) {
    let clickSong = event.target.innerText;
    axios
      .get(`https://api.lyrics.ovh/v1/Adele/${clickSong}`)
      .then(function (response) {
        let lyrics = `
<h3>${clickSong}</h3>
<pre>${response.data.lyrics} </pre>`;
        lyricsPanel.innerHTML = lyrics;
      });
  }
});
