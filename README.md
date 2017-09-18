# Node.JS-Push-APN

This a simple implemetation to Push Notification for Apple Push Notification in iOS using the lib "apn" for Node.JS.

## How it works

Add the 'index.js' in your project and replace '<your_pass>' for password of cert and '<your_topic>' for Bounder ID.

Create a cert.pem and key.pem. These comands can help you:

``` 

$ openssl x509 -in aps.cer -inform DER -outform PEM -out cert.pem
$ openssl pkcs12 -in push1.p12 -out key.pem -nodes

```

This lib have a dependence to [Node-APN](https://github.com/node-apn/node-apn). Install before use. 

## How to use

Call the ```addToken()``` and pass the device token.(you can add others tokens for send a only time)

Call the  ```send()``` and pass a message in json for send. The JSON message need this format {"titulo":"This a teste", "body":"This a message in push"}

## Example

```
var push = require('./index');

push.addToken('your_token');

push.send({"titulo":"This a teste", "body":"This a message in push"});
```


## Contribute

Any pull-request and issue is more than welcome.

## License

[The MIT License (MIT) Copyright (c) 2013](http://opensource.org/licenses/MIT) 