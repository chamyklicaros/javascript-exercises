function findTheOldest(people) {
    const currenYear = new Date().getFullYear();
    return people.reduce((oldest, person) => {
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currenYear - oldest.yearOfBirth;
        const personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currenYear - person.yearOfBirth;
        return personAge > oldestAge ? person : oldest;
    })

}

// Do not edit below this line
module.exports = findTheOldest;
