import Created from "../../dist/response/created";
import Standard from "../../dist/response/message/message/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("compiler compatible", function() {


    describe("header", function() {

        let response = Created({body:'data', headers:{etag:'etag data'}});


        let string : string;

        string = response.headers.etag;
        string = response.body;

        let number : number = response.code;
        string = response.message;

    });

    describe("header", function() {

        let response = Created({body:'data'});

        let string : string;
        let object : object;

        object = response.headers;
        string = response.body;

        let number : number = response.code;
        string = response.message;

    });

});

describe("validate data", function() {

    it("header", function() {

        let response = Created({body:'data', headers:{etag:'etag data'}});

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(201);
        expect(response.message).toBe(Standard(201));

    });

    it("header", function() {

        let response = Created({body:'data'});

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(201);
        expect(response.message).toBe(Standard(201));

    });
});


