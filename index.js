// Our data.
const HALLOWEEN_MOVIES = [
    { name: "Halloween", release_year: 1978 },
    { name: "Halloween II", release_year: 1981 },
    { name: "Halloween III: Season of the Witch", release_year: 1982 },
    { name: "Halloween 4: The Return of Michael Myers", release_year: 1988 },
    { name: "Halloween 5: The Revenge of Michael Myers", release_year: 1989 },
    { name: "Halloween: The Curse of Michael Myers", release_year: 1995 },
    { name: "Halloween H20: 20 Years Later", release_year: 1998 },
    { name: "Halloween Resurrection", release_year: 2002 },
    { name: "Halloween", release_year: 2007 },
    { name: "Halloween II", release_year: 2009 },
    { name: "Halloween", release_year: 2018 },
    { name: "Halloween Kills", release_year: 2021 },
    { name: "Halloween Ends", release_year: 2022 }
]

function firstHalloweenAfter(year) {
    return HALLOWEEN_MOVIES.find(movie => movie.year >= year);
}

function findMichael() {
    return HALLOWEEN_MOVIES.filter(movie => movie.name.includes("Michael Myers"));
}

function newHalloweenMovies(year) {
    return HALLOWEEN_MOVIES.filter(movie => movie.release_year > year);
}

function dontCountMichael() {
    return HALLOWEEN_MOVIES.reduce((previous, current) => {
        if (!current.name.includes("Michael Myers")) {
            return previous + 1;
        } else {
            return previous;
        }
    });
}

function averageYear() {
    yearSum = HALLOWEEN_MOVIES.reduce((previous, current) => {
      return previous + current.release_year;
    }, 0);
  
    return yearSum / HALLOWEEN_MOVIES.length
  }

function theLastWord() {
    return HALLOWEEN_MOVIES.map(item => {
        itemArr = item.name.split(' ');
        return itemArr[itemArr.length - 1];
    });
}

console.log(firstHalloweenAfter(1985));
console.log(findMichael());
console.log(newHalloweenMovies(2000));
console.log(dontCountMichael());
console.log(theLastWord());