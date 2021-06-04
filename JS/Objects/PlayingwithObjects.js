var users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];
    
    
    //part 1
    console.log(users[1].age);
    
    //part 2
    console.log(users[0].name);
    
    //part 3
    users.forEach(element => {
        console.log(element.name+ " - "+ element.age)
    });
    