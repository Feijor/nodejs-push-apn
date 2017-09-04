var apn = require('apn');
var tokensIOS = [];

class pushoModel {
  
  addToken(token) {
    tokensIOS.push(token);
  }
  
  send(messagep){

    if(tokensIOS){
      tokensIOS = Array.from(new Set(tokensIOS));

      let service = new apn.Provider({
        cert: "./lib/cert.pem",
        key: "./lib/key.pem",
        passphrase: '<your_pass>',
        production: true
      });
      
      let note = new apn.Notification();
      
      note.topic = "<your_topic>";
      note.expiry = Math.floor(Date.now() / 1000) + 3600;
      note.badge = 3;
      note.sound = "ping.aiff";
      note.alert = messagep.titulo; 
      note.body = messagep.msg;
      note.title = messagep.titulo;
      note.payload = {'messageFrom': 'teste'};

      console.log(`Sending: ${note.compile()} to ${tokensIOS}`);
      service.send(note, tokensIOS).then( result => {
          console.log("sent:", result.sent.length);
          console.log("failed:", result.failed.length);
          console.log(result.failed);
      });

      service.shutdown();
    }

  }
  
}

module.exports = new pushoModel();
