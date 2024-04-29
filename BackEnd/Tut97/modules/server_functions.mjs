export const dataGen = () => {
    let names = ["Harry", "Ron", "Hermione"];
    let language = ["Python", "Java", "C++"];
    let city = ["New York", "London", "Paris"];
    let rand = Math.floor(0 + Math.random() * (3 - 0));

    let dataObj = {
        name: names[Math.floor(rand)],
        language: language[Math.floor(rand)],
        city: city[Math.floor(rand)],
        salary: Math.floor(20000 + Math.random() * (50000 - 20000)),
        isManager: true
    }

    return dataObj
}


