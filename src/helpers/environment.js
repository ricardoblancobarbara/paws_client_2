let APIURL = '';

switch (window.location.hostname) {
    //this is the local name of your react app
    case 'localhost' || '127.0.0.1' :
        //this is the local name of your API
        APIURL = 'http://localhost:3000';
        break;
        //this is the deployed react application
    case 'rnb-pawsapi-client.herokuapp.com':
        //this is the full url of your deployed API
        APIURL = 'https://rnb-pawsapi-client.herokuapp.com';
        break;
}

export default APIURL;