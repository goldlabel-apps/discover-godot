
import * as functions from "firebase-functions";

export const serverSideRender = functions.https.onRequest(
    (req, response) => {
      const pathname = req.params[0];
      functions.logger.info("SSR", {
        structuredData: true,
        pathname,
      });
      response.send("<html>SSR<html>");
    });

export const proxyAPI = functions.https.onRequest( async (req, response) => {
  const baseAPIUrl = getBaseAPIUrl( req );
  let params = req.params[0].split( "/" );
  params = params.slice( 1, params.length);
  const endpoint = params[0];
  const {method} = req;
  const json = {
    response: {
      id: "0001",
      data: {
        title: "Title for Hello World game",
        subheader: "Hello World subheader",
      },
    },
    req: {
      time: Date.now(),
      baseAPIUrl,
      endpoint,
      method,
    },
  };
  response.send(json);
});

function getBaseAPIUrl(req:any) {
  let baseAPIUrl = "https://discover-godot.web.app/";
  if ( req.hostname === "localhost" ) {
    baseAPIUrl = "http://localhost:5001/discover-godot/us-central1/proxyAPI/";
  }
  return baseAPIUrl;
}
