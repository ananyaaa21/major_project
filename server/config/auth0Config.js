import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth ({
    audience: "https://realestate-frontend-black.vercel.app/",
    issuerBaseURL: "https://dev-fopwyk5gbf15lxbe.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck
