import ClientError from "../../../../../dist/response/code/class/boolean/client-error";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});



it('lower', function () {
    expect(ClientError(399)).toBeFalse();
});

it('lowest', function () {
    expect(ClientError(400)).toBeTrue();
});

it('middle', function () {
    expect(ClientError(450)).toBeTrue();
});

it('highest', function () {
    expect(ClientError(499)).toBeTrue();
});

it('higher', function () {
    expect(ClientError(500)).toBeFalse();
});
