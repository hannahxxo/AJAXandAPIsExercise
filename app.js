// AJAX and APIs Exercise
// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
// 1a
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(jokeJS1);

async function showAFunny(){
    try {
        const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
        console.log(`Successful`);
        // console.log(jokeJS1);
        // 1b
        p1.innerText = jokeJS1.setup;
        // 1c
        p2.innerText = jokeJS1.punchline;
    } catch (err) {
        console.log(`NOT Successful`);
        console.log(err);
    }
}
showAFunny();

console.log("==============================================");

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

axios.get(`https://official-joke-api.appspot.com/random_joke`)
  .then(jokeJS2 => {
    console.log(`Question 2 Was Successful`);
    // With Axios the data requested is inside the "data" property of the returned JavaScript object
    console.log(jokeJS2.data);
    p3.innerText = jokeJS2.data.setup;
    p4.innerText = jokeJS2.data.punchline;
  })
  .catch(rejected => {
console.log(`Question 2 Was NOT Successful`);
    console.log(rejected);
  });

console.log("==============================================");

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

async function jokeFunc() {
    try {
      const jokeJS3 = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
      console.log(`Question 3 Was Successful`);
      console.log(jokeJS3.data);
      p5.innerText = jokeJS3.data.setup;
      p6.innerText = jokeJS3.data.punchline;
    } catch (reject) {
      console.log(`Question 3 Was NOT Successful`);
      console.log(reject);
    }
  }
  jokeFunc();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

const baseEndpoint = `http://api.tvmaze.com/`;
const id = `38963`;
const season = `1`;
const number = `8`;
const episodeByNumberURL = `shows/${id}/episodebynumber?season=${season}&number=${number}`
const fullEndpoint = baseEndpoint + episodeSearchURL;

async function tvMazeFunc() {
    try {
        const mando = await axios.get
    }
}
  