import * as functions from "firebase-functions";

export const proxyAPI = functions.https.onRequest( async (req, response) => {
  const baseUrl = getBaseAPIUrl(req);
  const {method, query} = req;
  const json = {
    request: {
      time: Date.now(),
      baseUrl,
      params: req.params,
      method,
      query,
    },
    response: {
      id: "0001wxyz",
      data: {
        game: "Pingpong",
        gameId: "kash12321423dliusadiuh",
        title: "Heldafladisfj f laiuhfs ",
        subheader: "Hello World subheader",
      },
    },

  };
  response.send(json);
});
// @ts-ignore
function getBaseAPIUrl(req) {
  let baseAPIUrl = "https://discover-godot.web.app/api";
  if ( req.hostname === "localhost" ) {
    baseAPIUrl = "http://localhost:5001/discover-godot/us-central1/proxyAPI/";
  }
  return baseAPIUrl;
}
