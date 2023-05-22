const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

let usernames = []
   gameInfo.forEach((item)=>{
    usernames.push(item.username+'!')
   })

   console.log(usernames);

let winners = []

gameInfo.forEach((item)=>{
    item.score > 5 ? winners.push(item.username) : null
})

console.log(winners);

let total = 0

gameInfo.forEach((item)=>{
    total = total + item.score 
})

console.log(total);