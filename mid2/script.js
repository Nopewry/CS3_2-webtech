let matchResults = [
  {
    date: "Sunday 14 January 2024",
    home_team: "Man Utd",
    away_team: "Spurs",
    score: "2-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 31 December 2023",
    home_team: "Nott'm Forest",
    away_team: "Man Utd",
    score: "2-1",
    location: "The City Ground, Nottingham",
  },
  {
    date: "Wednesday 27 December 2023",
    home_team: "Man Utd",
    away_team: "Aston Villa",
    score: "3-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Saturday 23 December 2023",
    home_team: "West Ham",
    away_team: "Man Utd",
    score: "2-0",
    location: "London Stadium, London",
  },
  {
    date: "Sunday 17 December 2023",
    home_team: "Liverpool",
    away_team: "Man Utd",
    score: "0-0",
    location: "Anfield, Liverpool",
  },
  {
    date: "Saturday 9 December 2023",
    home_team: "Man Utd",
    away_team: "Bournemouth",
    score: "0-3",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Thursday 7 December 2023",
    home_team: "Man Utd",
    away_team: "Chelsea",
    score: "2-1",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 3 December 2023",
    home_team: "Newcastle",
    away_team: "Man Utd",
    score: "1-0",
    location: "St. James' Park, Newcastle",
  },
];

function getdata() {
  const body = document.querySelector("tbody");
  let tags = "";

  matchResults.map((d) => {
    tags += `<tr>
          <td>${d.date}</td>
          <td>${d.home_team} vs ${d.away_team}</td>
          <td>${d.score}</td>
          <td>${d.location}</td>`;
  });
  body.innerHTML = tags;
}
getdata();

const bt = document.querySelector("#button");
const body = document.querySelector("tbody");
bt.addEventListener("click", (e) => {
  e.preventDefault();
  const date = document.querySelector("#date");
  const homeTeam = document.querySelector("#homeTeam");
  const awayTeam = document.querySelector("#awayTeam");
  const score = document.querySelector("#score");
  const location = document.querySelector("#location");
  let tags = "";
  tags += `<tr>
          <td>${date.value}</td>
          <td>${homeTeam.value} vs ${awayTeam.value}</td>
          <td>${score.value}</td>
          <td>${location.value}</td>`;
  body.innerHTML += tags;
});
