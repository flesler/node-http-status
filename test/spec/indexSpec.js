var HTTPStatus = require('../../index');

describe('HTTPStatus', function() {

  it('should recognise any 1xx error code as informational', function() {
    var status = new HTTPStatus(104);
    expect(status.isInformational).toEqual(true);
  });

  it('should recognise any 2xx error code as success', function() {
    var status = new HTTPStatus(274);
    expect(status.isSuccess).toEqual(true);
  });

  it('should recognise any 3xx error code as redirection', function() {
    var status = new HTTPStatus(319);
    expect(status.isRedirection).toEqual(true);
  });

  it('should recognise any 4xx error code as client error', function() {
    var status = new HTTPStatus(415);
    expect(status.isClientError).toEqual(true);
  });

  it('should recognise any 5xx error code as server error', function() {
    var status = new HTTPStatus(503);
    expect(status.isServerError).toEqual(true);
  });

  it('should recognise any 4xx or 5xx error code as an error', function() {
    var status = new HTTPStatus(479);
    expect(status.isError).toEqual(true);
  });

});
