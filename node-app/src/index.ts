import * as functions from "firebase-functions";

export const serverSideRender = functions.https.onRequest(
    (request, response) => {
      functions.logger.info("serverSideRender", {
        structuredData: true,
      });
      response.send("serverSideRender");
    });


export const proxyAPI = functions.https.onRequest(
    (request, response) => {
      functions.logger.info("serverSiproxyAPIdeRender", {
        structuredData: true,
      });
      response.send("proxyAPI");
    });
