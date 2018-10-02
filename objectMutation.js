// we need to add new items to skills and cars without mutating person object
let person = {
    name: 'John',
    skills: {
        "1": { name: 'JavaScript' },
        "2": { name: 'C#' }
    },
    cars: {
        "1": { name: 'Jaguar' },
        "2": { name: 'Ferrari' }
    }
};

// This will add new entry in skill object 
let person2 = Object.assign({}, person, {
    skills: Object.assign({}, person.skills, {
        "3": { name: 'Rust' }
    })
});

// This will modify existing entry in cars object
let person3 = Object.assign({}, person, {
    cars: Object.assign({}, person.cars, {
        "2": { name: 'Lamborgini' }
    })
});

// ******** Same example using spread operator ********

// This will add new entry in skill object 
let person4 = {...person,
    skills: {
        ...person.skills, 
        "3": {name: 'Rust'}
    }
}

// This will modify existing entry in cars object
let person5 = {...person,
    cars: {
        ...person.cars,
        "2": {name: 'Lamborgini'}
    }
}

console.log(person4);
console.log(person5);




