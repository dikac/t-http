import Response from "../../../dist/response/boolean/response";
import Ok from "../../../dist/response/ok";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


it('plain', () => {

    expect(Response({code:1, message:'', header:{}})).toBe(true)

});


it('class', () => {

    expect(Response(Ok(undefined))).toBe(true)

});
