export const Contentfull = () => {
    const contentful = require("contentful");
    const client = contentful.createClient({
        space: "abjgbnazssta", 
        //space: process.env.REACT_APP_SPACE_ID,
        environment: "master", // defaults to 'master' if not set
        //accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        accessToken: "riD2d8BSmYv6QcsdNZ-GvzoDfRMZCLPiNazLrvL1SZI"
    });
  
    return client;
  };
  