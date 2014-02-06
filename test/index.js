// TODO: Add actual tests
var HTTPStatus = require('../index');

var status = new HTTPStatus(403);

console.log(status);
console.log(status.code);
console.log(status.description);
console.log(status.isInformational);
console.log(status.isSuccess);
console.log(status.isRedirection);
console.log(status.isClientError);
console.log(status.isServerError);
console.log(status.isError);