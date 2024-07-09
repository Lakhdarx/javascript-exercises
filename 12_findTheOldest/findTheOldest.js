const findTheOldest = function(people) {
    return (people.reduce((oldest, current) => {
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        return currentAge > oldestAge ? current : oldest;
    }));
};






function getAge(birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}





// Do not edit below this line
module.exports = findTheOldest;
