onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const audio = document.getElementById('bg-music');
  const runText = document.getElementById('run-text');

  const lyricLines = [
    { start: 2.32, end: 16.08, text: "Em có biết rằng em là một bông hoa không" },
    { start: 16.08, end: 17.96, text: "Baby em như bông hoa" },
    { start: 17.96, end: 19.86, text: "Nhưng người hái đâu phải ta" },
    { start: 19.86, end: 21.74, text: "Em vội mang bao câu ca" },
    { start: 21.74, end: 23.72, text: "Trôi về nơi xa xa xa" },
    { start: 23.8, end: 25.46, text: "Em như bông hoa" },
    { start: 25.46, end: 27.2, text: "Nhưng người hái đâu phải ta" },
    { start: 27.2, end: 29.12, text: "Em vội mang bao câu ca" },
    { start: 29.12, end: 31.1, text: "Trôi về nơi xa xa xa" },
    { start: 31.42, end: 35.24, text: "Nhìn lên trời cao ngồi đếm vì sao ở trong bàn tay" },
    { start: 35.24, end: 39.0, text: "Chợt nghĩ về em chẳng biết giờ đây người đã ngủ chưa" },
    { start: 39.0, end: 42.16, text: "Mười hai giờ đêm nỗi buồn kia chợt như dài thêm" },
    { start: 42.16, end: 46.94, text: "Em cũng hay thật, đã khuya rồi mà vẫn chưa ngủ đi?" },
    { start: 46.94, end: 50.66, text: "Bae bae bae yah yah yah" },
    { start: 51.2, end: 54.36, text: "So lonely lonely bae" },
    { start: 54.36, end: 58.34, text: "Lonely bae ey yey yey" },
    { start: 60.54, end: 62.68, text: "Làm sao để đến được với nhau" },
    { start: 62.68, end: 64.54, text: "Sau này không còn đớn đau" },
    { start: 64.54, end: 66.32, text: "Nhìn em mà anh chẳng thể" },
    { start: 66.32, end: 68.46, text: "Vì em mà anh ngủ mê" },
    { start: 68.66, end: 69.94, text: "Không cần đúng sai" },
    { start: 69.94, end: 72.2, text: "Mình nói chuyện đến tận sáng mai" },
    { start: 72.3, end: 75.38, text: "I love you bae, i hope you know" },
    { start: 75.38, end: 77.08, text: "Baby em như bông hoa" },
    { start: 77.08, end: 78.98, text: "Nhưng người hái đâu phải ta" },
    { start: 78.98, end: 80.78, text: "Em vội mang bao câu ca" },
    { start: 80.78, end: 83.26, text: "Trôi về nơi xa xa xa" },
    { start: 83.26, end: 84.54, text: "Em như bông hoa" },
    { start: 84.54, end: 86.28, text: "Nhưng người hái đâu phải ta" },
    { start: 86.28, end: 88.16, text: "Em vội mang bao câu ca" },
    { start: 88.16, end: 90.16, text: "Trôi về nơi xa xa xa" },
    { start: 90.26, end: 94.06, text: "Hà nội đẹp nhất về đêm, người đẹp nhất vẫn là người hay cười" },
    { start: 94.06, end: 97.7, text: "Đi đâu cũng nhớ về em, cho dù là ở chốn đông người" },
    { start: 97.7, end: 101.26, text: "Em cũng hay buồn là thật, nếu như vậy anh càng thêm lo" },
    { start: 101.26, end: 104.86, text: "Anh không nói lời đường mật, tán gái thế thì gay to" },
    { start: 104.86, end: 108.64, text: "Anh vốn không quen ngủ muộn, nhưng vì em mà anh còn thức" },
    { start: 108.64, end: 112.32, text: "Bây giờ anh cai, vì anh nghiện, nhớ em nên anh chẳng dứt" },
    { start: 112.32, end: 116.02, text: "Anh đây chẳng phải nhạc sĩ, anh đây cũng chẳng phải nhà thơ" },
    { start: 116.02, end: 119.68, text: "Yêu em nên anh có lý đêm về em làm anh mơ" },
    { start: 119.68, end: 123.5, text: "Em biết không, đôi lúc anh không hiểu nổi mình" },
    { start: 123.5, end: 127.12, text: "Nay đây mai đó, dù ở đâu cũng chỉ thấy 1 bóng hình" },
    { start: 127.12, end: 131.02, text: "Vẫn ngồi instagram thôi, ngồi lặng nhìn thời gian trôi" },
    { start: 131.02, end: 134.9, text: "Đợi thì đợi, mơ thì mơ, baby you are my girl" },
    { start: 134.9, end: 138.5, text: "Hai ta đi chẳng cùng hướng, cho dù đường mình vẫn song song" },
    { start: 138.5, end: 142.32, text: "Cuộc đời cứ thế quay vòng, ngày dài thôi mình anh ngóng" },
    { start: 142.32, end: 145.24, text: "Bao giờ mình mới gặp nhau đây?" },
    { start: 145.92, end: 148.94, text: "Bao giờ mình mới gặp nhau đây?" },
    { start: 149.02, end: 150.96, text: "Baby em như bông hoa" },
    { start: 150.96, end: 152.62, text: "Nhưng người hái đâu phải ta" },
    { start: 152.62, end: 154.4, text: "Em vội mang bao câu ca" },
    { start: 154.4, end: 156.64, text: "Trôi về nơi xa xa xa" },
    { start: 156.78, end: 158.24, text: "Em như bông hoa" },
    { start: 158.24, end: 160.16, text: "Nhưng người hái đâu phải ta" },
    { start: 160.16, end: 162.04, text: "Em vội mang bao câu ca" },
    { start: 162.04, end: 164.28, text: "Trôi về nơi xa xa xa" },
    { start: 164.28, end: 165.7, text: "Em như bông hoa" },
    { start: 165.7, end: 167.58, text: "Nhưng người hái đâu phải ta" },
    { start: 167.58, end: 169.4, text: "Em vội mang bao câu ca" },
    { start: 169.4, end: 171.4, text: "Trôi về nơi xa xa xa" },
    { start: 171.68, end: 173.06, text: "Em như bông hoa" },
    { start: 173.06, end: 174.88, text: "Nhưng người hái đâu phải ta" },
    { start: 174.88, end: 176.76, text: "Em vội mang bao câu ca" },
    { start: 176.76, end: 179.16, text: "Trôi về nơi xa xa xa" }
  ];

  let lastText = '';
  function syncLyric() {
    const t = audio.currentTime;
    let currentText = '';
    for (let i = lyricLines.length - 1; i >= 0; i--) {
      if (t >= lyricLines[i].start && t < lyricLines[i].end) {
        currentText = lyricLines[i].text;
        break;
      }
    }
    if (currentText !== lastText) {
      runText.style.transition = 'opacity 0.5s';
      runText.style.opacity = 0;
      setTimeout(() => {
        runText.textContent = currentText;
        runText.style.opacity = 1;
      }, 300);
      lastText = currentText;
    }
  }

  audio.addEventListener('timeupdate', syncLyric);
  audio.addEventListener('seeked', syncLyric);
  audio.addEventListener('play', syncLyric);
  audio.addEventListener('pause', syncLyric);
  audio.addEventListener('ended', () => runText.textContent = '');
};
