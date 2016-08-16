
/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.


**************************************************************/
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var dataStore = {"results":[{"createdAt":"2016-08-15T22:27:45.744Z","objectId":"PIydphVV0c","roomname":"lobby","text":"Ima psybeam the recursion out of ya","updatedAt":"2016-08-15T22:27:45.744Z","username":"slowking"},{"createdAt":"2016-08-15T22:25:54.614Z","objectId":"v8w5f0S1Tg","roomname":"ChrisPicatos!","text":"I'm the real Chris!!!!!","updatedAt":"2016-08-15T22:25:54.614Z","username":"m"},{"createdAt":"2016-08-15T22:25:17.801Z","objectId":"F2T0MP9FEI","roomname":"the new room page demo","text":"lol","updatedAt":"2016-08-15T22:25:17.801Z","username":"m"},{"createdAt":"2016-08-15T22:24:37.309Z","objectId":"IfKhKrBtCW","roomname":"lobby","text":"lol","updatedAt":"2016-08-15T22:24:37.309Z","username":"m"},{"createdAt":"2016-08-15T22:16:13.354Z","objectId":"MSG6X97v9q","roomname":"lobby","text":"hiii","updatedAt":"2016-08-15T22:16:13.354Z","username":"fff"},{"createdAt":"2016-08-15T22:07:43.170Z","objectId":"scy3na04P7","roomname":"lobby","text":"testing testing, attention please","updatedAt":"2016-08-15T22:07:43.170Z","username":"yo%20bro%20slowbro"},{"createdAt":"2016-08-15T21:58:33.962Z","objectId":"S3mIZCNcnQ","roomname":"lobby","text":"test","updatedAt":"2016-08-15T21:58:33.962Z","username":"lentan"},{"createdAt":"2016-08-15T21:56:30.927Z","objectId":"rNSOD2sNkQ","roomname":"lobby","text":"dfdgdrg","updatedAt":"2016-08-15T21:56:30.927Z","username":"wendy"},{"createdAt":"2016-08-15T21:50:14.245Z","objectId":"o9MzimeHmZ","roomname":"lobby","text":"YOOOOO","updatedAt":"2016-08-15T21:50:14.245Z","username":"Chris%20Picato"},{"createdAt":"2016-08-15T21:49:51.226Z","objectId":"a80SHeLRxK","roomname":"Lobby","text":"hey guys","updatedAt":"2016-08-15T21:49:51.226Z","username":"stephen%20and%20mike"},{"createdAt":"2016-08-15T21:49:33.357Z","objectId":"tix6mtlQpX","roomname":"lobby","text":"helllllooooo","updatedAt":"2016-08-15T21:49:33.357Z","username":"Robert"},{"createdAt":"2016-08-15T20:19:48.593Z","objectId":"Whq0uZOIen","roomname":"lobby","text":"test","updatedAt":"2016-08-15T20:19:48.593Z","username":"kevin"},{"createdAt":"2016-08-15T20:19:17.150Z","objectId":"3CC6CsgI4O","roomname":"lobby","text":"hiiii","updatedAt":"2016-08-15T20:19:17.150Z","username":"cinisli"},{"createdAt":"2016-08-15T20:18:45.624Z","objectId":"ugdlPRvhvZ","roomname":"4chan","text":"Hi","updatedAt":"2016-08-15T20:18:45.624Z","username":"Julie%20"},{"createdAt":"2016-08-15T19:25:59.535Z","objectId":"bLyJNmMCAh","roomname":"lobby","text":"unlucky","updatedAt":"2016-08-15T19:25:59.535Z","username":"sam"},{"createdAt":"2016-08-15T18:30:38.683Z","objectId":"9i6zZqrMEQ","roomname":"lobby","text":"</span><script>console.log('Looks like you didnt escape')</script><span>","updatedAt":"2016-08-15T18:30:38.683Z","username":"TheRealChrisPicato"},{"createdAt":"2016-08-15T18:29:20.272Z","objectId":"o2dqxBfwaN","roomname":"lobby","text":"You imposter","updatedAt":"2016-08-15T18:29:20.272Z","username":"TheRealChrisPicato"},{"createdAt":"2016-08-15T18:24:22.269Z","objectId":"D3kkpv0VII","text":"We back in here","updatedAt":"2016-08-15T18:24:22.269Z","username":"Chris%20Picato"},{"createdAt":"2016-08-15T18:24:03.544Z","objectId":"Zn2lSJSVek","text":"Yooo","updatedAt":"2016-08-15T18:24:03.544Z","username":"Derek"},{"createdAt":"2016-08-15T05:24:03.799Z","objectId":"xMgyzEAfao","roomname":"All","text":"HR47, where ya at?","updatedAt":"2016-08-15T05:24:03.799Z","username":"Kira"},{"createdAt":"2016-08-15T05:16:32.681Z","objectId":"4tuXokRxdI","roomname":"4chan","text":"hey","updatedAt":"2016-08-15T05:16:32.681Z","username":"Kira"},{"createdAt":"2016-08-15T05:16:13.621Z","objectId":"Fgatupu0OY","roomname":"lobby","text":"hey","updatedAt":"2016-08-15T05:16:13.621Z","username":"Kira"},{"createdAt":"2016-08-15T04:57:51.092Z","objectId":"rh2ejGw6oG","roomname":"lobby","text":"Ok now it owkrs fo real","updatedAt":"2016-08-15T04:57:51.092Z","username":"BK"},{"createdAt":"2016-08-15T04:54:14.873Z","objectId":"qJ7PFnPHKa","roomname":"lobby","text":"Ok now","updatedAt":"2016-08-15T04:54:14.873Z","username":"BK"},{"createdAt":"2016-08-15T04:53:05.098Z","objectId":"qJJh3qiXlB","roomname":"lobby","text":"fd","updatedAt":"2016-08-15T04:53:05.098Z","username":"BK"},{"createdAt":"2016-08-15T04:51:12.073Z","objectId":"aES4S7aFTS","roomname":"lobby","text":"gasdf","updatedAt":"2016-08-15T04:51:12.073Z","username":"BK"},{"createdAt":"2016-08-15T01:16:39.423Z","objectId":"qBjE7zb3Yk","roomname":"lobby","text":"I finally got this damn thing working","updatedAt":"2016-08-15T01:16:39.423Z","username":"BK"},{"createdAt":"2016-08-15T01:16:27.467Z","objectId":"Epx1XAKRlz","roomname":"lobby","text":"Anyone home?","updatedAt":"2016-08-15T01:16:27.467Z","username":"BK"},{"createdAt":"2016-08-15T01:15:40.395Z","objectId":"mttzr4EkkQ","roomname":"lobby","text":"Hello?","updatedAt":"2016-08-15T01:15:40.395Z","username":"BK"},{"createdAt":"2016-08-15T00:57:23.644Z","objectId":"Wx9C90Iddh","roomname":"Lobby","text":"fd","updatedAt":"2016-08-15T00:57:23.644Z","username":"jack"},{"createdAt":"2016-08-15T00:57:22.333Z","objectId":"loi4Fwehxc","roomname":"Lobby","text":"asdasd","updatedAt":"2016-08-15T00:57:22.333Z","username":"jack"},{"createdAt":"2016-08-15T00:57:16.199Z","objectId":"euE8JMCNnl","roomname":"Add New Room","text":"asd","updatedAt":"2016-08-15T00:57:16.199Z","username":"jack"},{"createdAt":"2016-08-15T00:44:49.010Z","objectId":"4S7YxaZRm8","roomname":"Add New Room","text":"aaa","updatedAt":"2016-08-15T00:44:49.010Z","username":"jack"},{"createdAt":"2016-08-15T00:43:36.546Z","objectId":"yvZmYAvAWf","roomname":"dksldlsl","text":"sdlgls","updatedAt":"2016-08-15T00:43:36.546Z","username":"BK"},{"createdAt":"2016-08-15T00:07:17.101Z","objectId":"sK9oNwNt7y","roomname":"lobby","text":"sdtjalskd","updatedAt":"2016-08-15T00:07:17.101Z","username":"BK"},{"createdAt":"2016-08-14T23:57:43.237Z","objectId":"uFh2eATUkD","roomname":"lobby","text":"fasdfasd","updatedAt":"2016-08-14T23:57:43.237Z","username":"username=me"},{"createdAt":"2016-08-14T23:53:49.946Z","objectId":"VLY1RxDDi4","roomname":"lobby","text":"asdf","updatedAt":"2016-08-14T23:53:49.946Z","username":"username=fasd"},{"createdAt":"2016-08-14T23:49:54.262Z","objectId":"CaQKF7CObP","roomname":"lobby","text":"adlkfjs","updatedAt":"2016-08-14T23:49:54.262Z","username":"username=BK"},{"createdAt":"2016-08-14T23:49:08.331Z","objectId":"s8vdtAQk00","roomname":"lobby","text":"aslf","updatedAt":"2016-08-14T23:49:08.331Z","username":"username=anonymous"},{"createdAt":"2016-08-14T23:46:42.886Z","objectId":"sLgitmuTWv","roomname":"lobby","text":"asdf","updatedAt":"2016-08-14T23:46:42.886Z","username":"username=anonymous"},{"createdAt":"2016-08-14T23:39:17.809Z","objectId":"YW5D2yDukG","roomname":"newroom","text":"BK here","updatedAt":"2016-08-14T23:39:17.809Z","username":"BK"},{"createdAt":"2016-08-14T23:38:40.845Z","objectId":"dxlK9Sv1Fl","roomname":"lobby","text":"BK here","updatedAt":"2016-08-14T23:38:40.845Z","username":"BK"},{"createdAt":"2016-08-14T23:33:51.871Z","objectId":"PoabCIVJWN","roomname":"Lobby","text":"asd","updatedAt":"2016-08-14T23:33:51.871Z","username":"jack"},{"createdAt":"2016-08-14T23:01:55.456Z","objectId":"vsngUYcx42","roomname":"lobby","text":"asggfasf","updatedAt":"2016-08-14T23:01:55.456Z","username":"BK"},{"createdAt":"2016-08-14T23:00:44.681Z","objectId":"ifyJUcThJl","roomname":"lobby","text":"","updatedAt":"2016-08-14T23:00:44.681Z","username":"BK"},{"createdAt":"2016-08-14T23:00:19.267Z","objectId":"nNDNK5U4Sk","roomname":"lobby","text":"","updatedAt":"2016-08-14T23:00:19.267Z","username":"BK"},{"createdAt":"2016-08-14T22:59:40.831Z","objectId":"NqELYjQgvr","roomname":"lobby","text":"\n        \n        Send!\n      ","updatedAt":"2016-08-14T22:59:40.831Z","username":"BK"},{"createdAt":"2016-08-14T22:59:07.141Z","objectId":"sPyb8NXidI","roomname":"lobby","text":"","updatedAt":"2016-08-14T22:59:07.141Z","username":"BK"},{"createdAt":"2016-08-14T22:55:44.589Z","objectId":"rxeyMP6crq","roomname":"lobby","text":"","updatedAt":"2016-08-14T22:55:44.589Z","username":"BK"},{"createdAt":"2016-08-14T22:54:57.145Z","objectId":"zPCbzi23wm","roomname":"lobby","text":"","updatedAt":"2016-08-14T22:54:57.145Z","username":"BK"},{"createdAt":"2016-08-14T16:52:56.097Z","objectId":"o0vDte00gw","roomname":"4chan","text":"checking again","updatedAt":"2016-08-14T16:52:56.097Z","username":"ChrisPicato"},{"createdAt":"2016-08-14T16:46:50.609Z","objectId":"IyxAUmhvjE","roomname":"4chan","text":"marathon","updatedAt":"2016-08-14T16:46:50.609Z","username":"ChrisPicato"},{"createdAt":"2016-08-14T16:45:05.373Z","objectId":"YIlmtHV4du","roomname":"4chan","text":"watching marathon","updatedAt":"2016-08-14T16:45:05.373Z","username":"ChrisPicato"},{"createdAt":"2016-08-14T16:42:47.010Z","objectId":"PZWeU75HdS","roomname":"4chan","text":"asdf","updatedAt":"2016-08-14T16:42:47.010Z","username":"ChrisPicato"},{"createdAt":"2016-08-14T16:42:06.884Z","objectId":"GdJ0XGLlv8","roomname":"4chan","text":"asdf","updatedAt":"2016-08-14T16:42:06.884Z","username":"ChrisPicato"},{"createdAt":"2016-08-14T16:41:42.132Z","objectId":"eG5QDwUdoO","roomname":"4chan","text":"asdf","updatedAt":"2016-08-14T16:41:42.132Z","username":"ChrisPicato"},{"createdAt":"2016-08-14T16:40:20.280Z","objectId":"Lj3gZkVQ9d","roomname":"4chan","text":"ok","updatedAt":"2016-08-14T16:40:20.280Z","username":"ChrisPicato"},{"createdAt":"2016-08-14T08:30:14.190Z","objectId":"sLJJtCbYQz","roomname":"All","text":"...","updatedAt":"2016-08-14T08:30:14.190Z","username":"Kira"},{"createdAt":"2016-08-14T08:30:06.952Z","objectId":"YBcCkYckQs","roomname":"Hey brobro","text":"yo bro","updatedAt":"2016-08-14T08:30:06.952Z","username":"Kira"},{"createdAt":"2016-08-14T08:29:19.016Z","objectId":"DI6vNB71yj","roomname":"All","text":"hey","updatedAt":"2016-08-14T08:29:19.016Z","username":"Kira"},{"createdAt":"2016-08-14T08:29:10.348Z","objectId":"Cs8QBqUEMJ","roomname":"HACKERS DUNGEON","text":"yo","updatedAt":"2016-08-14T08:29:10.348Z","username":"Kira"},{"createdAt":"2016-08-14T08:28:57.905Z","objectId":"pcttCDdKja","roomname":"All","text":"yo dude","updatedAt":"2016-08-14T08:28:57.905Z","username":"Kira"},{"createdAt":"2016-08-12T04:33:26.660Z","objectId":"LZi2jHF70a","roomname":"lobby","text":"Never underestimate the power of the Schwartz!","updatedAt":"2016-08-12T04:33:26.660Z","username":"Mel Brooks"},{"createdAt":"2016-08-10T06:57:35.772Z","objectId":"kIJXTNZ39I","roomname":"Goodbye Horses","text":"","updatedAt":"2016-08-10T06:57:35.772Z","username":"Joe"},{"createdAt":"2016-08-10T05:29:09.821Z","objectId":"JLUKDJQESu","roomname":"lobby","text":"Something?","updatedAt":"2016-08-10T05:29:09.821Z","username":"Little Ms. Eryn"},{"createdAt":"2016-08-10T05:25:44.058Z","objectId":"gegXKqR962","roomname":"lobby","text":"So... y'all like them coder jobs?","updatedAt":"2016-08-10T05:25:44.058Z","username":"Little Ms. Eryn"},{"createdAt":"2016-08-10T05:05:40.834Z","objectId":"dT5U3FIF20","roomname":"lobby","text":"","updatedAt":"2016-08-10T05:05:40.834Z","username":"kj&username=anonymous"},{"createdAt":"2016-08-10T05:05:06.417Z","objectId":"tEFvReMmhq","roomname":"lobby","text":"","updatedAt":"2016-08-10T05:05:06.417Z","username":"kj&username=anonymous"},{"createdAt":"2016-08-10T04:22:12.238Z","objectId":"WgjOBLcOMJ","roomname":"lobby","text":"Never underestimate the power of the Schwartz!","updatedAt":"2016-08-10T04:22:12.238Z","username":"Mel Brooks"},{"createdAt":"2016-08-10T04:13:06.691Z","objectId":"apphO24OtV","roomname":"Lobby","text":"fasd","updatedAt":"2016-08-10T04:13:06.691Z","username":"jack"},{"createdAt":"2016-08-10T04:13:05.724Z","objectId":"k90JK4s7XN","roomname":"Lobby","text":"faddsa","updatedAt":"2016-08-10T04:13:05.724Z","username":"jack"},{"createdAt":"2016-08-10T04:13:04.885Z","objectId":"suN7AyW1Hb","roomname":"Lobby","text":"dfasdsa","updatedAt":"2016-08-10T04:13:04.885Z","username":"jack"},{"createdAt":"2016-08-10T04:12:35.265Z","objectId":"M2tl88TExv","roomname":"Lobby","text":"fdadas","updatedAt":"2016-08-10T04:12:35.265Z","username":"jack"},{"createdAt":"2016-08-10T04:12:34.412Z","objectId":"hVBrK4F8tK","roomname":"Lobby","text":"dsadas","updatedAt":"2016-08-10T04:12:34.412Z","username":"jack"},{"createdAt":"2016-08-10T04:12:02.318Z","objectId":"vEbIvYyv16","roomname":"Lobby","text":"fdasdsa","updatedAt":"2016-08-10T04:12:02.318Z","username":"jack"},{"createdAt":"2016-08-10T04:12:00.935Z","objectId":"7cpP9xlK46","roomname":"Lobby","text":"dasdsa","updatedAt":"2016-08-10T04:12:00.935Z","username":"jack"},{"createdAt":"2016-08-10T04:11:43.888Z","objectId":"T56AVG5r4q","roomname":"Lobby","text":"das","updatedAt":"2016-08-10T04:11:43.888Z","username":"jack"},{"createdAt":"2016-08-10T04:11:38.913Z","objectId":"4MLEZY7VRS","roomname":"hotel","text":"fdasdsa","updatedAt":"2016-08-10T04:11:38.913Z","username":"jack"},{"createdAt":"2016-08-10T04:11:29.325Z","objectId":"yC1jz9owve","roomname":"Lobby","text":"adsdas","updatedAt":"2016-08-10T04:11:29.325Z","username":"jack"},{"createdAt":"2016-08-10T04:11:28.093Z","objectId":"TWyRo1LnHs","roomname":"Lobby","text":"dasfdsa","updatedAt":"2016-08-10T04:11:28.093Z","username":"jack"},{"createdAt":"2016-08-10T04:10:42.501Z","objectId":"7U8DHwwJwA","roomname":"Lobby","text":"asddsa","updatedAt":"2016-08-10T04:10:42.501Z","username":"jack"},{"createdAt":"2016-08-10T04:10:41.663Z","objectId":"lnswtIZoT1","roomname":"Lobby","text":"dasdsaas","updatedAt":"2016-08-10T04:10:41.663Z","username":"jack"},{"createdAt":"2016-08-10T04:10:21.045Z","objectId":"LFyy5JxZpX","roomname":"Lobby","text":"dasdsa","updatedAt":"2016-08-10T04:10:21.045Z","username":"jack"},{"createdAt":"2016-08-10T04:10:18.314Z","objectId":"aNEufvMJz8","roomname":"Lobby","text":"adsdsa","updatedAt":"2016-08-10T04:10:18.314Z","username":"jack"},{"createdAt":"2016-08-10T04:09:55.061Z","objectId":"3zGBvazHJY","roomname":"Lobby","text":"adssad","updatedAt":"2016-08-10T04:09:55.061Z","username":"jack"},{"createdAt":"2016-08-10T04:09:52.309Z","objectId":"JwW1vzgg87","roomname":"Lobby","text":"fasddas","updatedAt":"2016-08-10T04:09:52.309Z","username":"jack"},{"createdAt":"2016-08-10T04:09:47.056Z","objectId":"lRkr8F0LtC","roomname":"Lobby","text":"fadsas","updatedAt":"2016-08-10T04:09:47.056Z","username":"jack"},{"createdAt":"2016-08-10T04:09:45.775Z","objectId":"dClOib6rh7","roomname":"Lobby","text":"adsdas","updatedAt":"2016-08-10T04:09:45.775Z","username":"jack"},{"createdAt":"2016-08-10T04:09:42.906Z","objectId":"EqUsEvd0Q4","roomname":"Lobby","text":"dfasdas","updatedAt":"2016-08-10T04:09:42.906Z","username":"jack"},{"createdAt":"2016-08-10T04:09:41.530Z","objectId":"9mjootizP3","roomname":"Lobby","text":"fdasdas","updatedAt":"2016-08-10T04:09:41.530Z","username":"jack"},{"createdAt":"2016-08-10T04:09:39.765Z","objectId":"kAdeVS6ANi","roomname":"Lobby","text":"fadsdas","updatedAt":"2016-08-10T04:09:39.765Z","username":"jack"},{"createdAt":"2016-08-10T04:09:23.319Z","objectId":"q1LAa8u30T","roomname":"Lobby","text":"dadasdsa","updatedAt":"2016-08-10T04:09:23.319Z","username":"jack"},{"createdAt":"2016-08-10T04:08:58.845Z","objectId":"PFcYMbIeTZ","roomname":"hotel","text":"adsdsa","updatedAt":"2016-08-10T04:08:58.845Z","username":"jack"},{"createdAt":"2016-08-10T04:08:49.656Z","objectId":"UAn5gfZBcL","roomname":"Lobby","text":"dasdas","updatedAt":"2016-08-10T04:08:49.656Z","username":"jack"},{"createdAt":"2016-08-10T04:08:42.229Z","objectId":"MzmtGPziao","roomname":"Lobby","text":"fadsdas","updatedAt":"2016-08-10T04:08:42.229Z","username":"jack"},{"createdAt":"2016-08-10T04:08:41.451Z","objectId":"y8EPFoXeBk","roomname":"Lobby","text":"fdsadsa","updatedAt":"2016-08-10T04:08:41.451Z","username":"jack"},{"createdAt":"2016-08-10T04:07:11.149Z","objectId":"VaDBYZJVnI","roomname":"Lobby","text":"ZXZXZ","updatedAt":"2016-08-10T04:07:11.149Z","username":"jack"},{"createdAt":"2016-08-10T04:06:58.360Z","objectId":"OdBEwoT6GF","roomname":"Lobby","text":"sasa","updatedAt":"2016-08-10T04:06:58.360Z","username":"jack"},{"createdAt":"2016-08-10T04:06:56.842Z","objectId":"83FUEe3276","roomname":"Lobby","text":"dfads","updatedAt":"2016-08-10T04:06:56.842Z","username":"jack"},{"createdAt":"2016-08-10T04:06:28.795Z","objectId":"itQb6kXlRC","roomname":"Lobby","text":"dafsdas","updatedAt":"2016-08-10T04:06:28.795Z","username":"jack"}]};
// var dataStore = {"results":[]};

var requestHandler = function(request, response) {
  console.log(request);
  if (request.method === 'GET'){ //&& request.url === '/classes/messages') { 
    // Request and Response come from node's http module.
    //
    // They include information about both the incoming request, such as
    // headers and URL, and about the outgoing response, such as its status
    // and content.
    //
    // Documentation for both request and response can be found in the HTTP section at
    // http://nodejs.org/documentation/api/

    // Do some basic logging.
    //
    // Adding more logging to your server can be an easy way to get passive
    // debugging help, but you should always be careful about leaving stray
    // console.logs in your code.
    console.log('Serving request type ' + request.method + ' for url ' + request.url);

    // The outgoing status.
    var statusCode = 200;

    // See the note below about CORS headers.
    
    var headers = defaultCorsHeaders;

    // Tell the client we are sending them plain text.
    //
    // You will need to change this if you are sending something
    // other than plain text, like JSON or HTML.
    headers['Content-Type'] = 'application/json';

    // .writeHead() writes to the request line and headers of the response,
    // which includes the status and all headers.
    response.writeHead(statusCode, headers);

    // Make sure to always call response.end() - Node may not send
    // anything back to the client until you do. The string you pass to
    // response.end() will be the body of the response - i.e. what shows
    // up in the browser.
    //
    // Calling .end "flushes" the response's internal buffer, forcing
    // node to actually send all the data over to the client.
    response.end(JSON.stringify(dataStore));

  } else if (request.method === 'POST') { //&& request.url === '/send') {
    var statusCode = 201;
    var headers = defaultCorsHeaders;
    headers['Content-Type'] = 'application/json';
    response.writeHead(statusCode, headers);
    var data = [];
    request.on('data', function(chunk){
      data += chunk;
    });
    
    request.on('end', function(){
      data = JSON.parse(data);
      data.objectId = Math.floor(Math.random() * 10000);
      data.createdAt = (new Date()).toISOString();
      data.updatedAt = (new Date()).toISOString();
      dataStore.results.unshift(data);
      response.end(JSON.stringify(dataStore));
    });
    
  } else {
    console.log('failed request');
    var statusCode = 404;
    var headers = defaultCorsHeaders;
    response.writeHead(statusCode, headers);
    response.end('failed endpoint');
  }
};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
// var defaultCorsHeaders = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10 // Seconds.
// };

module.exports = requestHandler;
