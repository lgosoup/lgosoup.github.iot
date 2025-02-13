const gameCastEl = document.querySelector('.game_cast')

let count = 1
const createBLockEl = () => {
  for (let i = 1; i <= 10; i++) {
    const newLineDiv = document.createElement('div')
    newLineDiv.classList.add('line')
    newLineDiv.classList.add(`line_${i}`)
    gameCastEl.appendChild(newLineDiv)

    for (let l = 1; l <= 10; l++) {
      const newBlockEl = document.createElement('div')
      newBlockEl.classList.add('block')
      newBlockEl.innerHTML = count
      count++
      newLineDiv.appendChild(newBlockEl)
    }
  }
} //this adds 100 blocks

createBLockEl()

const blockEls = document.querySelectorAll('.block')

const wantingIndexList = (arr, ...index) => {
  return index.map((index) => arr[index - 1])
}

const insertColorEl = (color, ...index) => {
  const inseringBlock = wantingIndexList(blockEls, ...index) //  The indices you want

  inseringBlock.forEach((el) => {
    el.classList.add(color)
  })
}

// let lineArray = []
// lineArray[0] = []

// for (let m = 1; m <= 10; m++) {
//   lineArray[m] = []
//   for (let n = 0; n < 10; n++) {
//     lineArray[m][n] = n + 1 + (m - 1) * 10
//   }
// }

// insertColorEl('red', ...lineArray[1])
//너무 계륵 같음...   >>>>>> chat gpt를 이용하여 코드를 뽑아보자

//========= 무지개 그리기 ===========

insertColorEl('red', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
insertColorEl(
  'orange',
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30
)
insertColorEl(
  'yellow',
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45
)
insertColorEl(
  'green',
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60
)
insertColorEl(
  'blue',
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75
)
insertColorEl(
  'navy',
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90
)
insertColorEl('purple', 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)

// // ====== 강아지 그리기 ======

// insertColorEl(
//   'brown',
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   23,
//   24,
//   25,
//   26,
//   27,
//   28,
//   29,
//   30,
//   31,
//   32,
//   33,
//   34,
//   35,
//   36,
//   37,
//   38,
//   39,
//   40,
//   41,
//   42,
//   43,
//   44,
//   45,
//   46,
//   47,
//   48,
//   49,
//   50,
//   51,
//   52,
//   53,
//   54,
//   55,
//   56,
//   57,
//   58,
//   59
// )

// insertColorEl(
//   'white',
//   14,
//   15,
//   16,
//   17,
//   35,
//   36,
//   37,
//   38,
//   39,
//   40,
//   41,
//   18,
//   19,
//   20,
//   21,
//   22,
//   30,
//   31,
//   32,
//   33,
//   34,
//   35,
//   36,
//   37,
//   38,
//   39,
//   40,
//   41,
//   42,
//   43,
//   44,
//   45,
//   46,
//   47,
//   48,
//   49
// )

// insertColorEl('black', 15, 16, 17, 19, 20, 21, 20, 21, 22, 23)

// insertColorEl('pink', 23, 24, 25, 36, 37, 38, 39)

// insertColorEl(
//   'burlywood',
//   12,
//   13,
//   14,
//   15,
//   16,
//   22,
//   23,
//   24,
//   25,
//   26,
//   27,
//   28,
//   29,
//   30,
//   18,
//   19,
//   20,
//   21,
//   22,
//   28,
//   29,
//   30,
//   31,
//   32
// )

// =====마리오 그리기====== 16*16
// insertColorEl(
//   'black',
//   7,
//   8,
//   9,
//   10,
//   20,
//   22,
//   27,
//   29,
//   34,
//   35,
//   37,
//   44,
//   46,
//   47,
//   49,
//   53,
//   55,
//   58,
//   60,
//   64,
//   65,
//   71,
//   74,
//   80,
//   81,
//   85,
//   86,
//   91,
//   92,
//   96,
//   98,
//   99,
//   102,
//   107,
//   110,
//   111,
//   116,
//   119,
//   120,
//   121,
//   122,
//   125,
//   132,
//   133,
//   136,
//   137,
//   140,
//   141,
//   147,
//   148,
//   149,
//   150,
//   155,
//   156,
//   157,
//   158,
//   162,
//   165,
//   166,
//   171,
//   172,
//   175,
//   178,
//   182,
//   183,
//   186,
//   187,
//   191,
//   194,
//   198,
//   200,
//   201,
//   203,
//   207,
//   210,
//   214,
//   215,
//   216,
//   217,
//   218,
//   219,
//   223,
//   226,
//   227,
//   230,
//   231,
//   232,
//   233,
//   234,
//   235,
//   238,
//   244,
//   245,
//   252,
//   253
// )

// insertColorEl(
//   'red',
//   23,
//   24,
//   25,
//   26,
//   38,
//   39,
//   40,
//   41,
//   42,
//   43,
//   68,
//   77,
//   83,
//   84,
//   93,
//   94,
//   100,
//   109,
//   163,
//   164,
//   167,
//   168,
//   169,
//   170,
//   173,
//   174,
//   179,
//   180,
//   181,
//   184,
//   185,
//   188,
//   189,
//   190,
//   195,
//   196,
//   197,
//   204,
//   205,
//   206,
//   211,
//   212,
//   213,
//   220,
//   221,
//   222,
//   228,
//   229,
//   236,
//   237
// )

// insertColorEl(
//   'peachpuff',
//   36,
//   45,
//   50,
//   51,
//   52,
//   54,
//   56,
//   57,
//   59,
//   61,
//   62,
//   63,
//   66,
//   67,
//   69,
//   70,
//   72,
//   73,
//   75,
//   76,
//   78,
//   79,
//   82,
//   87,
//   88,
//   89,
//   90,
//   95,
//   101,
//   103,
//   104,
//   105,
//   106,
//   108,
//   117,
//   118,
//   123,
//   124,
//   134,
//   135,
//   138,
//   139,
//   151,
//   152,
//   153,
//   154,
//   199,
//   202
// )
