# node-http-status

## Description
HTTP status class for NodeJS

## Installation

	$ npm install httpstatus

## Usage

```js
var HTTPStatus = require('httpstatus');
var status = new HTTPStatus(403);

status.code; //=> 403
status.description; //=> "Forbidden"
status.is(403); //=> true
status.is(500); //=> false
status.isInformational; //=> false
status.isSuccess; //=> false
status.isRedirection; //=> false
status.isClientError; //=> true
status.isServerError; //=> false
status.isError; //=> true
```