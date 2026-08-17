const express = require('express');

const router = express.Router();


class User {

    constructor(username, birthdate, age, email, password, valid) {

        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;

    }

}


const users = [

    new User(
        'user1',
        '2000-01-01',
        26,
        'user1@email.com',
        'password1',
        true
    ),

    new User(
        'user2',
        '2001-02-02',
        25,
        'user2@email.com',
        'password2',
        true
    ),

    new User(
        'user3',
        '2002-03-03',
        24,
        'user3@email.com',
        'password3',
        true
    )

];


router.post('/', function (req, res) {

    const username = req.body.username;
    const password = req.body.password;


    const matchedUser = users.find(function (user) {

        return (
            user.username === username &&
            user.password === password &&
            user.valid === true
        );

    });


    if (matchedUser) {

        // IMPORTANT:
        // Password is NOT sent back to Angular.

        res.send({

            username: matchedUser.username,
            birthdate: matchedUser.birthdate,
            age: matchedUser.age,
            email: matchedUser.email,
            valid: true

        });

    }

    else {

        res.send({
            valid: false
        });

    }

});


module.exports = router;