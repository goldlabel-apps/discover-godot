const PJSON = require('../package.json')

exports.router = async (req, res) => {	
	
	let params = req.params[0].split( `/` )
	params = params.slice( 1, params.length)
	let endpoint = params[0]

	switch ( endpoint ) { 
		
		case ``:			
			respond(req, res, { response: {status: 200, data: { 
				message: `Help you with something, brah?`,
				testEndpoints: {
					ping: `${ getBaseAPIUrl( req ) }ping`,
				}
			}}})
			return 

		case `ping`:
			console.warn('ping was pinged. it ponged.')
			respond(req, res, {
				response:{ 
					status: 200, 
					data: { message: `pong`}}})
			return

		default: {
			respond(req, res, { 
				response:{ status: 404, data: {  
					message: `Sorry, that endpoint does not exist`
				}}})
			return
		}
	}
}

function respond ( req, res, response ){
	const {
		path,
		method,
	} = req
	
	let params = req.params[0].split( `/` )
	params = params.slice( 1, params.length)
	let endpoint = params[0]
	let r = {
		app: PJSON.name,
		blurb: PJSON.description,
		baseAPIUrl: getBaseAPIUrl( req ),
		version: PJSON.version,
		contact: process.env.GMAIL_ACCOUNT,
		epoch: Date.now(),
		request: {
			path,
			method,
			endpoint,
		},
		...response,
	}
	res.send( JSON.stringify(r) )
}

function getBaseAPIUrl (req) {
	let baseAPIUrl = `https://discover-godot.web.app/`
	if ( req.hostname === 'localhost' ){
		baseAPIUrl = `http://localhost:5001/discover-godot/us-central1/proxyAPI/`
	}
	return baseAPIUrl
}