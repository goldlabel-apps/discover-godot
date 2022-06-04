import * as functions from "firebase-functions";

export const proxyAPI = functions.https.onRequest( async (req, response) => {
  const baseAPIUrl = getBaseAPIUrl( req );
  let params = req.params[0].split( "/" );
  params = params.slice( 1, params.length);
  const endpoint = params[0];
  const {method, query} = req;
  const json = {
    request: {
      time: Date.now(),
      baseAPIUrl,
      endpoint,
      method,
      query,
    },
    response: {
      id: "0001",
      data: {
        title: "Hello World game",
        subheader: "Hello World subheader",
      },
    },

  };
  response.send(json);
});
// @ts-ignore
function getBaseAPIUrl(req) {
  let baseAPIUrl = "https://discover-godot.web.app/";
  if ( req.hostname === "localhost" ) {
    baseAPIUrl = "http://localhost:5001/discover-godot/us-central1/proxyAPI/";
  }
  return baseAPIUrl;
}
