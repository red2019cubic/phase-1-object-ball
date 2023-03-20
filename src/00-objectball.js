function gameObject() {
  debugger;
  return {
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },

    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
  };
}
//console.log(gameObject());

function numPointsScored(playerName) {
  debugger;
  switch (playerName) {
    case "Jeff Adrien":
      return gameObject()["away"]["players"][playerName]["points"];
    case "Bismak Biyombo":
      return gameObject()["away"]["players"][playerName]["points"];
    case "DeSagna Diop":
      return gameObject()["away"]["players"][playerName]["points"];
    case "Ben Gordon":
      return gameObject()["away"]["players"][playerName]["points"];
    case "Brendan Haywood":
      return gameObject()["away"]["players"][playerName]["points"];
    case "Alan Anderson":
      return gameObject()["home"]["players"][playerName]["points"];
    case "Reggie Evans":
      return gameObject()["home"]["players"][playerName]["points"];
    case "Brook Lopez":
      return gameObject()["home"]["players"][playerName]["points"];
    case "Mason Plumlee":
      return gameObject()["home"]["players"][playerName]["points"];
    case "Jason Terry":
      return gameObject()["home"]["players"][playerName]["points"];
    default:
      return `The player name ${playerName} does not exist.`;
  }
}

console.log(numPointsScored("Bismak Biyombo"));
console.log(numPointsScored("Reggie Evans"));
console.log(numPointsScored("Mason Plumlee"));

console.log(numPointsScored("Brook Lopez"));
console.log(numPointsScored("Jeff Adrien"));
console.log(numPointsScored("Ben Gordon"));

function shoeSize(playerName) {
  debugger;
  switch (playerName) {
    case "Jeff Adrien":
      return gameObject()["away"]["players"][playerName]["shoe"];
    case "Bismak Biyombo":
      return gameObject()["away"]["players"][playerName]["shoe"];
    case "DeSagna Diop":
      return gameObject()["away"]["players"][playerName]["shoe"];
    case "Ben Gordon":
      return gameObject()["away"]["players"][playerName]["shoe"];
    case "Brendan Haywood":
      return gameObject()["away"]["players"][playerName]["shoe"];
    case "Alan Anderson":
      return gameObject()["home"]["players"][playerName]["shoe"];
    case "Reggie Evans":
      return gameObject()["home"]["players"][playerName]["shoe"];
    case "Brook Lopez":
      return gameObject()["home"]["players"][playerName]["shoe"];
    case "Mason Plumlee":
      return gameObject()["home"]["players"][playerName]["shoe"];
    case "Jason Terry":
      return gameObject()["home"]["players"][playerName]["shoe"];
    default:
      `${playerName} does not exist.`;
  }
}

function teamColors(teamName) {
  debugger;
  const teamColors = [];
  if (teamName === "Charlotte Hornets") {
    teamColors = gameObject()["home"][colors];
  }
  if (teamName === "Brooklyn Nets") {
    teamColors = gameObject()["away"][colors];
  }
  return teamColors;
}

function teamNames() {
  debugger;
  const teamName = [];
  // if (teamName === "Charlotte Hornets") {
  //   teamColors = gameObject()["home"][colors];
  // }
  // if (teamName === "Brooklyn Nets") {
  //   teamColors = gameObject()["away"][colors];
  // }
  teamName.push(gameObject()["home"]["teamName"], gameObject()["away"]["teamName"]);
  return teamName;
}

function playerNumbers(teamName) {
  debugger;
  let jersyNumbers = [];
  if (teamName === "Brooklyn Nets") {
    jersyNumbers.push(
      gameObject()["home"]["players"]["Alan Anderson"]["number"],
      gameObject()["home"]["players"]["Reggie Evans"]["number"],
      gameObject()["home"]["players"]["Mason Plumlee"]["number"],
      gameObject()["home"]["players"]["Brook Lopez"]["number"],
      gameObject()["home"]["players"]["Jason Terry"]["number"]
    );
  }
  if (teamName === "Charlotte Hornets") {
    jersyNumbers.push(
      gameObject()["away"]["players"]["Jeff Adrien"]["number"],
      gameObject()["away"]["players"]["Bismak Biyombo"]["number"],
      gameObject()["away"]["players"]["DeSagna Diop"]["number"],
      gameObject()["away"]["players"]["Ben Gordon"]["number"],
      gameObject()["away"]["players"]["Brendan Haywood"]["number"]
    );
  }
  return jersyNumbers;
}

function playerStats(playerName) {
  debugger;
  switch (playerName) {
    case "Jeff Adrien":
      return gameObject()["away"]["players"]["Jeff Adrien"];
    case "Bismak Biyombo":
      return gameObject()["away"]["players"]["Bismak Biyombo"];
    case "DeSagna Diop":
      return gameObject()["away"]["players"]["DeSagna Diop"];
    case "Ben Gordon":
      return gameObject()["away"]["players"]["Ben Gordon"];
    case "Brendan Haywood":
      return gameObject()["away"]["players"]["Brendan Haywood"];
    case "Alan Anderson":
      return gameObject()["home"]["players"]["Alan Anderson"];
    case "Reggie Evans":
      return gameObject()["home"]["players"]["Reggie Evans"];
    case "Mason Plumlee":
      return gameObject()["home"]["players"]["Mason Plumlee"];
    case "Mason Plumlee":
      return gameObject()["home"]["players"]["Brook Lopez"];
    case "Jason Terry":
      return gameObject()["home"]["players"]["Jason Terry"];
    default:
      return `The ${playerName} does not exist in the list.`;
  }
}
//Build a function, bigShoeRebounds, that will return the number of rebounds
//associated with the player that has the largest shoe size. Break this one down into steps:

function bigShoeRebounds(playerName) {
  const homeShoeSizes = [];
  const awayShoeSizes = [];
  let homeLargeShoeSize;
  let awayLargeShoeSize;
  debugger;
  homeShoeSizes.push(
    gameObject()["home"]["players"]["Alan Anderson"]["shoe"],
    gameObject()["home"]["players"]["Reggie Evans"]["shoe"],
    gameObject()["home"]["players"]["Mason Plumlee"]["shoe"],
    gameObject()["home"]["players"]["Brook Lopez"]["shoe"],
    gameObject()["home"]["players"]["Jason Terry"]["shoe"]
  );

  awayShoeSizes.push(
    gameObject()["away"]["players"]["Jeff Adrien"]["shoe"],
    gameObject()["away"]["players"]["Bismak Biyombo"]["shoe"],
    gameObject()["away"]["players"]["DeSagna Diop"]["shoe"],
    gameObject()["away"]["players"]["Ben Gordon"]["shoe"],
    gameObject()["away"]["players"]["Brendan Haywood"]["shoe"]
  );

  homeLargeShoeSize = Math.max(...homeShoeSizes);
  awayLargeShoeSize = Math.max(...awayShoeSizes);

  switch (playerName) {
    case "Jeff Adrien":
      if (
        homeLargeShoeSize < awayLargeShoeSize &&
        awayLargeShoeSize ===
          gameObject()["away"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["away"]["players"][playerName]["rebounds"];
      }

    case "Bismak Biyombo":
      if (
        homeLargeShoeSize < awayLargeShoeSize &&
        awayLargeShoeSize ===
          gameObject()["away"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["away"]["players"][playerName]["rebounds"];
      }
    case "DeSagna Diop":
      if (
        homeLargeShoeSize < awayLargeShoeSize &&
        awayLargeShoeSize ===
          gameObject()["away"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["away"]["players"][playerName]["rebounds"];
      }
    case "Ben Gordon":
      if (
        homeLargeShoeSize < awayLargeShoeSize &&
        awayLargeShoeSize ===
          gameObject()["away"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["away"]["players"][playerName]["rebounds"];
      }
    case "Brendan Haywood":
      if (
        homeLargeShoeSize < awayLargeShoeSize &&
        awayLargeShoeSize ===
          gameObject()["away"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["away"]["players"][playerName]["rebounds"];
      }

    case "Alan Anderson":
      if (
        homeLargeShoeSize > awayLargeShoeSize &&
        awayLargeShoeSize ===
          gameObject()["home"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["home"]["players"][playerName]["rebounds"];
      }
    case "Reggie Evans":
      if (
        homeLargeShoeSize > awayLargeShoeSize &&
        homeLargeShoeSize ===
          gameObject()["home"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["home"]["players"][playerName]["rebounds"];
      }
    case "Mason Plumlee":
      if (
        homeLargeShoeSize > awayLargeShoeSize &&
        homeLargeShoeSize ===
          gameObject()["home"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["home"]["players"][playerName]["rebounds"];
      }
    case "Jason Terry":
      if (
        homeLargeShoeSize > awayLargeShoeSize &&
        homeLargeShoeSize ===
          gameObject()["home"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["home"]["players"][playerName]["rebounds"];
      }
    case "Brook Lopez":
      if (
        homeLargeShoeSize > awayLargeShoeSize &&
        homeLargeShoeSize ===
          gameObject()["home"]["players"][playerName]["shoe"]
      ) {
        return gameObject()["home"]["players"][playerName]["rebounds"];
      }
    default:
      return `${playerName} does not have the largest shoe size.`;
  }
}

//Build a function, numPointsScored that takes in an argument of a player's name and returns
// the number of points scored for that player
function homePointsScored() {
  debugger;
  const homePointsScored = [];
  homePointsScored.push(
    gameObject()["home"]["players"]["Alan Anderson"]["points"],
    gameObject()["home"]["players"]["Reggie Evans"]["points"],
    gameObject()["home"]["players"]["Mason Plumlee"]["points"],
    gameObject()["home"]["players"]["Brook Lopez"]["points"],
    gameObject()["home"]["players"]["Jason Terry"]["points"]
  );
  return homePointsScored;
}

function awayPointsScored() {
  debugger;
  const awayPointsScored = [];
  awayPointsScored.push(
    gameObject()["away"]["players"]["Jeff Adrien"]["points"],
    gameObject()["away"]["players"]["Bismak Biyombo"]["points"],
    gameObject()["away"]["players"]["DeSagna Diop"]["points"],
    gameObject()["away"]["players"]["Ben Gordon"]["points"],
    gameObject()["away"]["players"]["Brendan Haywood"]["points"]
  );
  return awayPointsScored;
}

function mostPointsScored() {
  debugger;
  let charlotteTeam = [];
  charlotteTeam = awayPointsScored();
  let brooklynTeam = [];
  brooklynTeam = homePointsScored();
  let homeMaxPointsScored = Math.max(...brooklynTeam);
  let awayMaxPointsScored = Math.max(...charlotteTeam);
  return Math.max(homeMaxPointsScored, awayMaxPointsScored);
}

function winningTeam() {
  let nets = [];
  let hornets = [];
  netz = homePointsScored();

  hornets = awayPointsScored();

  let homeTotalPointsScored = 0;
  let awayTotalPointsScored = 0;

  for (let i = 0; i < nets.length; i++) {
    homeTotalPointsScored += nets[i];
  }

  for (let i = 0; i < hornets.length; i++) {
    awayTotalPointsScored += hornets[i];
  }
  if (homeTotalPointsScored > awayTotalPointsScored) {
    return `Brooklyn Nets won the game with ending score of ${homeTotalPointsScored} points.`;
  } else {
    return `Charlotte Hornets won the game with ending score of ${awayTotalPointsScored} points.`;
  }
}

function playerWithLongestName() {
  const allPlayersNames = [
    "Jeff Adrien",
    "Bismak Biyombo",
    "DeSagna Diop",
    "Ben Gordon",
    "Brendan Haywood",
    "Alan Anderson",
    "Reggie Evans",
    "Brook Lopez",
    "Mason Plumlee",
    "Jason Terry",
  ];
  debugger;
  allPlayersNames.sort((player1, player2) => player1.length - player2.length);

  return allPlayersNames[allPlayersNames.length - 1];
}

function doesLongNameStealATon() {
  debugger;
  let doesLongNameSteal = false;
  const longestName = playerWithLongestName();
  const homeSteals = [];
  const awaySteals = [];

  homeSteals.push(
    Math.max(
      gameObject()["home"]["players"]["Alan Anderson"]["steals"],
      gameObject()["home"]["players"]["Reggie Evans"]["steals"],
      gameObject()["home"]["players"]["Brook Lopez"]["steals"],
      gameObject()["home"]["players"]["Mason Plumlee"]["steals"],
      gameObject()["home"]["players"]["Jason Terry"]["steals"]
    )
  );

  awaySteals.push(
    Math.max(
      gameObject()["away"]["players"]["Jeff Adrien"]["steals"],
      gameObject()["away"]["players"]["Bismak Biyombo"]["steals"],
      gameObject()["away"]["players"]["DeSagna Diop"]["steals"],
      gameObject()["away"]["players"]["Ben Gordon"]["steals"],
      gameObject()["away"]["players"]["Brendan Haywood"]["steals"]
    )
  );

  if (
    homeSteals > awaySteals &&
    gameObject()["home"]["players"][longestName]["steals"] === homeSteals[0]
  ) {
    return (doesLongNameSteal = true);
  } else if (
    homeSteals < awaySteals &&
    gameObject()["away"]["players"][longestName]["steals"] === awaySteals[0]
  ) {
    return (doesLongNameSteal = true);
  } else {
    return doesLongNameSteal;
  }
}

console.log(playerStats("Jason Terry"));
console.log(shoeSize("Jeff Adrien"));
console.log(playerNumbers("Brooklyn Nets"));
console.log(bigShoeRebounds("Jason Terry"));
console.log(bigShoeRebounds("Mason Plumlee"));
console.log(winningTeam());
console.log(mostPointsScored());
console.log(doesLongNameStealATon());
console.log(teamNames());
