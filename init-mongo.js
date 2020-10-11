db.createUser({
    user: "yourName",
    pwd: "secret",
    roles: [{
        role: 'readWrite',
        db: 'finance'
    }]
})