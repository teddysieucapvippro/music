const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const logo = $('.logo')
const download = $('.download')
const btnPlayPause = $('.playPause')
const btnPlay = $('.play')
const h = ":sptth"
const l = "87ituP"
const trungMusic = l + "/moc.koobecaf//" + h
const audio = $('.audio')
const reload = $('.reload')
const left = $('.left')
const right = $('.right')

const app = {
  songStart: 0,
  textData: {
    logo: "Royal Teddy",
    fb: "https://www.facebook.com/royalteddy.1298/",
  },
  music: [
    {
      name: "Anh Thương Em Nhất Mà?",
      singer: "Lã. x Log x TiB",
      img: "https://cdn.discordapp.com/attachments/997830765154930698/997831741253361674/tai_xuong.jfif",
      link: "./access/music/song1.mp3"
    }, {
      name: 'Bên Trên Tầng Lầu',
      singer: 'Tăng Duy Tân [BAE]',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997840743785828382/tai_xuong_2.jfif',
      link: './access/music/song2.mp3'
    },
    {
      name: 'Cao Ốc 20',
      singer: 'B RAY x DatG (ft MASEW x K-ICM)',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997841389977079808/tai_xuong_3.jfif',
      link: './access/music/song3.mp3'
    },
    {
      name: 'Wildest Dream (Lofi Ver)',
      singer: 'Shalom Margaret Cover',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997845889286676610/unknown.png',
      link: './access/music/song4.mp3'
    },
    {
      name: 'Vaicaunoicokhiennguoithaydoi (Lofi Ver)',
      singer: 'Grey d x Tlinh x ssdarealest',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997847006141755452/unknown.png',
      link: './access/music/song5.mp3'
    },
    {
      name: 'Ôm Em Lần Cuối (Lofi Version by 1967)',
      singer: 'Grey d x TNit x Sing x Minn',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997849042279206992/unknown.png',
      link: './access/music/song6.mp3'
    },
    {
      name: 'Kẻ Theo Đuổi Ánh Sáng (Lofi Ver)',
      singer: 'Huy Vạc x Tiến Nguyễn x Freak D',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997850140989730906/unknown.png',
      link: './access/music/song7.mp3'
    },
    {
      name: 'Chúng Ta Sau Này (Lofi Ver)',
      singer: 'T.R.I x Freak D',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997851800600318084/unknown.png',
      link: './access/music/song8.mp3'
    },
    {
      name: 'Cảm Ơn Vì Tất Cả (Lofi Ver.) ',
      singer: 'Anh Quân Idol',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997852677415374878/unknown.png',
      link: './access/music/song9.mp3'
    },
    {
      name: 'Hơn Cả Mây Trời (Lofi ver by Hawys)',
      singer: 'Việt',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997853305994739823/unknown.png',
      link: './access/music/song10.mp3'
    },
    {
      name: 'Yêu Từ Đâu Mà Ra ? (Lofi Ver.)',
      singer: 'LiL Z ',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/997855158853709946/unknown.png',
      link: './access/music/song11.mp3'
    },
    {
      name: 'Nụ Cười Em Là Nắng',
      singer: 'Green',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/998041624389091398/unknown.png',
      link: './access/music/song12.mp3'
    },
    {
      name: 'Chạy Về Khóc Với Anh (Lofi Version by 1967)',
      singer: 'Erik x Zeaplee',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/998042744977109073/unknown.png',
      link: './access/music/song13.mp3'
    },
    {
      name: 'Forget Me Now (Lofi Version by 1967)',
      singer: 'Fishy ft. Trí Dũng',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/998210054782189598/unknown.png',
      link: './access/music/song14.mp3'
    },
    {
      name: '[Playlist 1] Mashup Hot Tóp Tóp',
      singer: 'Changmie x Tiến Tới x Ca Ca',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/998218716938518598/unknown.png',
      link: './access/music/song20.mp3'
    },
    {
      name: '[Playlist 2] Relaxing And Chill Music…',
      singer: 'Diarial Chill',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/998211121850875934/unknown.png',
      link: './access/music/song15.webm'
    },
    {
      name: '[Playlist 3] Speedup',
      singer: 'Flechazowu',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/998212514900889720/unknown.png',
      link: './access/music/song16.mp3'
    },
    {
      name: '[Playlist 4] Tình Yew',
      singer: 'Jasmine Tea',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/998213262812389506/unknown.png',
      link: './access/music/song17.mp3'
    },
    {
      name: '[Playlist 5] Lofi Chill',
      singer: 'Radio Music',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/998216865354629170/unknown.png',
      link: './access/music/song18.mp3'
    },
    {
      name: '[Playlist 6] Mix Freak D Mashup Lofi Sad',
      singer: 'Pii Music',
      img: 'https://cdn.discordapp.com/attachments/997830765154930698/998217292758405220/unknown.png',
      link: './access/music/song19.mp3'
    }
  ],
  view: function () {
    const _this = this
    // -------text Logo--------
    const logoContent = `${_this.textData.logo}`
    const UpperCase = logoContent.split(" ").map(item => item[0].toLocaleUpperCase() + item.slice(1))
    logo.textContent = UpperCase.join("")
  },
  btnPlay: function () {
    const _this = this
    btnPlayPause.style.display = "none"
    reload.onclick = () => {
      audio.load()
    }


    btnPlay.onclick = () => {
      btnPlayPause.style.display = "block"
      btnPlay.style.display = "none"
      audio.pause()
    }


    btnPlayPause.onclick = () => {
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
      audio.play()
    }

    right.onclick = function () {
      _this.nextSong()
      audio.play()
      _this.download()
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
    }
    left.onclick = function () {
      _this.backSong()
      audio.play()
      _this.download()
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
    }
  },
  download: function () {
    const _this = this
    download.onclick = () => {
      const link = _this.music[_this.songStart].link
      download.innerHTML += `<a href="${link}" style="display:none;" class="clickDownload"></a>`
      $('.clickDownload').click()
    }
  }
  ,
  startMusic: function () {
    const _this = this
    $(".audio").setAttribute("src", `${_this.music[_this.songStart].link}`)

  },
  nextSong: function () {
    const _this = this
    _this.songStart++
    if (_this.songStart >= _this.music.length) {
      _this.songStart = 0
      _this.startMusic()
    }

    audio.onended = function () {
      right.click()
    }
    _this.startMusic()
    _this.viewListSong()

  },
  backSong: function () {
    const _this = this
    _this.songStart--
    if (_this.songStart <= 0) {
      _this.songStart = _this.music.length - 1
      _this.startMusic()
    }
    _this.startMusic()
    _this.viewListSong()

  },
  btnMenu: function () {
    const faXmark = $('.fa-xmark')
    const faBars = $('.fa-bars')
    const menu = $('.menu')


    faBars.onclick = () => {
      menu.classList.remove("close")
    }
    faXmark.onclick = () => {
      menu.classList.add("close")
    }

  },
  viewListSong: function () {
    const _this = this
    const listSong = $('.listSong__list')
    const trung = trungMusic
    const trungdz = trung.split("").reverse().join("")
    const html = _this.music.map((trung, index) => {
      return `
      <div class="listSong__list--Card ${index === _this.songStart ? 'active' : ''} " data-trung="${index}">
        <div class="Card--left">
          <img src="${trung.img}" alt="" class="avatar">
        </div>
        <div class="Card--content">
          <p class="name">${trung.name}</p>
          <p class="singer">${trung.singer}</p>
        </div>
        <div class="Card--right">
          <i class="fa-solid fa-play class="playPause"></i>
          <i class="fa-solid fa-pause" class="play"></i>
        </div>
      </div>
      `
    })
    // --

    if (_this.textData.fb != trungdz) {
      _this.textData.fb = trungdz
      console.log("%cEdit gì vậY bro", "color:red;font-size : 24px");
      console.log(
        `%cCode By %c> ${_this.textData.fb}`,
        "color:red ; font-size : 24px", "color:blue ; font-size : 24px")
    } else {
      console.log(
        `%cCode By %c> ${_this.textData.fb}`,
        "color:red ; font-size : 24px", "color:blue ; font-size : 24px")
    }
    // --
    listSong.innerHTML = html.join('')
    const listCard = document.querySelector('.listSong__list')
    listCard.onclick = function (e) {
      const songNode = e.target.closest('.listSong__list--Card:not(.active)')
      if (songNode) {
        const runing = _this.music[_this.songStart]
        //chuyển đổi qua Number nếu ko nó sẽ ko có active nhé . Xi đa vlin
        _this.songStart = Number(songNode.dataset.trung)
        _this.startMusic()
        _this.viewListSong()
        audio.play()
      }
    }
  },

  start: function () {
    const _this = this
    console.log(
      `%cXin chào %c!  %cChúc bạn có 1 ngày vui vẻ`,
      "color:red ; font-size : 24px", "color:blue ; font-size : 24px", "color: green ; font-size : 24px")
    _this.songStar
    _this.startMusic()
    _this.download()
    _this.view()
    _this.btnMenu()
    _this.viewListSong()
    _this.btnPlay()
  }
}

app.start()