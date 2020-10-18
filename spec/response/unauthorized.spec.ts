import Unauthorized from "../../dist/response/unauthorized";
import Standard from "../../dist/response/message/message/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("compiler compatible", function() {


    describe("header", function() {

        let response = Unauthorized('data', {etag:'etag data'});


        let string : string;

        string = response.headers.etag;
        string = response.body;

        let number : number = response.code;
        string = response.message;

    });

    describe("header", function() {

        let response = Unauthorized('data');

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

        let response = Unauthorized('data', {etag:'etag data'});

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(401);
        expect(response.message).toBe(Standard(401));

    });

    it("header", function() {

        let response = Unauthorized('data');

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(401);
        expect(response.message).toBe(Standard(401));

    });
});


