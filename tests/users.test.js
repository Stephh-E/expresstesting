// importing the code we want to test
const {app} = require("../src/server.js");

// importing a testing helper function from supertest
const request = require("supertest");

describe("Users controller", () => {

    test("Get all users route returns array of users", async () => {
        // localhost:3000/users/
        // localhost:3000/users
        const response = await request(app).get("/users");

    });

    test("Get user by ID route returns a single user as object", async () => {
       //  localhost:3000/users/12345
        let targetUserId = "12345";
        const response = await request(app).get("/users/" + targetUserId);

    });

    test("User sign-up route returns array of users", async () => {
        // POST localhost:3000/users
        const response = await request(app).post("/users");

    });

    test("User login route returns a single user as an object", async () => {

    });

    test("User update/edit route returns a single user as object", async () => {

    });

    test("User delete route returns a number of users deleted", async () => {

    });


});