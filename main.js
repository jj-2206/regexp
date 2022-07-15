const str = `
010-1234-5678
loopy@gmail.com
https://www.omdbapi.com/?apikey=88888888&s=Decision+To+Leave
The quick brown fox jumps over the lazy dog.
abbcccddddeeeee
http://localhost:1234
노는게 제일 좋아 친구들 모여라 언제나 즐거워
`;

//🪄 $ 줄 끝에 있는 e와 일치하는 문자를 검색합니다.
console.log(str.match(/e$/g)); // null 백틱`앞을 끝이라 상정합니다.
console.log(str.match(/e$/gm)); // (2) ['e', 'e']

//🪄 ^ 줄 시작에 있는 t와 일치하는 문자를 검색합니다.
console.log(str.match(/^t/gm)); // null
console.log(str.match(/^t/gim)); // ['T']

//🪄 h..p h로 시작하고 p로 끝나는 문자를 검색합니다.
console.log(str.match(/h..p/g)); // (2) ['http', 'http']

// 🪄 OR 먼저 찾아지는 문자만 검색합니다.
console.log(str.match(/fox|dog/));
// ['fox', index: 108, input: '\n010-1234-5678\nloopy@gmail.com\nhttps://www.omdbapi…\nhttp://localhost:1234\n노는게 제일 좋아 친구들 모여라 언제나 즐거워\n', groups: undef

console.log(str.match(/fox|dog/g)); // (2) ['fox', 'dog']

// 🪄 ? s가 있거나 없거나와 일치하는 문자를 검색합니다.
console.log(str.match(/https?/g)); // (2) ['https', 'http']

//🪄 {숫자} d가 두 번 반복하는 문자를 검색합니다.
console.log(str.match(/d{2}/));
// ['dd', index: 143, input: '\n010-1234-5678\nloopy@gmail.com\nhttps://www.omdbapi…\nhttp://localhost:1234\n노는게 제일 좋아 친구들 모여라 언제나 즐거워\n', groups: undefined]

//🪄 {숫자} d가 두 번 이상 반복하는 문자를 검색합니다.
console.log(str.match(/d{2,}/));
// ['dddd', index: 143, input: '\n010-1234-5678\nloopy@gmail.com\nhttps://www.omdbapi…\nhttp://localhost:1234\n노는게 제일 좋아 친구들 모여라 언제나 즐거워\n', groups: undefined]

//🪄 {숫자} o가 두 번 이상 다섯 번 이하 반복하는 문자를 검색합니다.
console.log(str.match(/o{2,5}/));
// ['oo', index: 16, input: '\n010-1234-5678\nloopy@gmail.com\nhttps://www.omdbapi…\nhttp://localhost:1234\n노는게 제일 좋아 친구들 모여라 언제나 즐거워\n', groups: undefined]

//🪄 \w 숫자를 포함한 영어, 알파벳을 의미합니다.
//🪄 \b\w{2,3}\b 2개 이상 3개 이하의 단락지어진 문자를 검색합니다.
console.log(str.match(/\b\w{2,3}\b/g));
// (9) ['010', 'com', 'www', 'com', 'To', 'The', 'fox', 'the', 'dog']

//🪄 0-9 사이의 숫자 중 1개 이상의 문자를 검색합니다.
console.log(str.match(/[0-9]{1,}/g));
// (5) ['010', '1234', '5678', '88888888', '1234']

//🪄 1개 이상의 한글을 검색합니다.
console.log(str.match(/[가-힣]{1,}/g));
// (7) ['노는게', '제일', '좋아', '친구들', '모여라', '언제나', '즐거워']

//🪄 f로 시작하는 모든 영단어를 검색합니다.
console.log(str.match(/\bf\w{1,}\b/g)); //['fox']

//🪄 공백 문자를 검색합니다.
console.log(str.match(/\s/g));
// (22) ['\n', '\n', '\n', '\n', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n', '\n', ' ', ' ', ' ', ' ', ' ', ' ', '\n']

const h = `  the hello world  !   

`;
console.log(h.match(/\s/g)); // (11) [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n']

//🪄 공백 문자들이 빈 문자로 들어가 공백을 삭제하게 됩니다.
console.log(h.replace(/\s/g, '')); // thehelloworld!

//🪄 임의의 한 문자와 일치 + 1개 이상 반복 + 앞쪽 일치 패턴
console.log(str.match(/.{1,}(?=@)/g)); // ['loopy']

//🪄 뒤쪽 일치 패턴 + 임의의 한 문자와 일치 + 1개 이상 반복
console.log(str.match(/(?<=@).{1,}/g)); // ['gmail.com']
