import InternalServerError from "../../dist/response/internal-server-error";
import Standard from "../../dist/response/message/message/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("compiler compatible", function() {


    describe("header", function() {

        let response = InternalServerError('data', {etag:'etag data'});


        let string : string;

        string = response.header.etag;
        string = response.body;

        let number : number = response.code;
        string = response.message;

    });

    describe("header", function() {

        let response = InternalServerError('data');

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

        let response = InternalServerError('data', {etag:'etag data'});

        expect(response.header.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(500);
        expect(response.message).toBe(Standard(500));

    });

    it("header", function() {

        let response = InternalServerError('data');

        expect(response.header).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(500);
        expect(response.message).toBe(Standard(500));

    });
});

