import Conflict from "../../dist/response/conflict";
import Standard from "../../dist/response/message/message/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("compiler compatible", function() {


    describe("header", function() {

        let response = Conflict('data', {etag:'etag data'});


        let string : string;

        string = response.header.etag;
        string = response.body;

        let number : number = response.code;
        string = response.message;

    });

    describe("header", function() {

        let response = Conflict('data');

        let string : string;
        let object : object;

        object = response.header;
        string = response.body;

        let number : number = response.code;
        string = response.message;

    });

});

describe("validate data", function() {

    it("header", function() {

        let response = Conflict('data', {etag:'etag data'});

        expect(response.header.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(409);
        expect(response.message).toBe(Standard(409));

    });

    it("header", function() {

        let response = Conflict('data');

        expect(response.header).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(409);
        expect(response.message).toBe(Standard(409));

    });
});


