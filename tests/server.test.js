// importing the code we want to test
const {app} = require("../src/server.js");

// importing a testing helper function from supertest
const request = require("supertest");

// Declaring a group of tests for keeping our testing tidy
describe("Root route works", () => {

    // individual test happens in this type of function:
    // This test runs an async callback function
    // becasue the things it is testing are running asyncronously and we need to wait for it

    test("Server returns a Hello world! message", async () => {
        // make a request to "/" route 
        // wait for response anf store it
        const response = await request(app).get("/");

        //check the body of the response for a "Hello world!" string
        // and any other properties that we want to check
        expect(response.body.message).toBe("Hello world!");
        expect(response.statusCode).toBe(200);
    });

    test("Server returns a response with no auth headers becasue we are not sending auth data", async () => {
        const response = await request(app).get("/");

        expect(response.headers["Authorization"]).toBeFalsy();
    })
});