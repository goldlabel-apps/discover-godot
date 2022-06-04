// Custom Server Side Renering engine
/*
export const serverSideRender = functions.https.onRequest(
    (req, response) => {
      const pathname = req.params[0];
      functions.logger.info("SSR", {
        structuredData: true,
        pathname,
      });
      response.send(`<html>
        SSR
        <p>${pathname}</p>  
      <html>`);
    });
*/