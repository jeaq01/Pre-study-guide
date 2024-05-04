const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopic() {
for (let x = 0; x < topics.length; x++) {
 console.log(topics[x]);
}
}

function selecttopic() {
if (topics[0] === 'HTML') {
 console.log("Let's study HTML!");
} else if (topics[0] === 'CSS') {
 console.log("Let's study CSS!");
} else if (topics[0] === 'Git') {
 console.log("Let's study Git!");
} else if (topics[0] === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
}
console.log('Here are the topics we learned through Prework:');
listTopic();
console.log('Which topic should we study first?');
selecttopic();
