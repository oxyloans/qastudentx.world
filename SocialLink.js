export const API_BASE_URL = "http://ec2-65-0-147-157.ap-south-1.compute.amazonaws.com:9000";


export const OAUTH2_REDIRECT_URI = "https://www.apply.studentx.world/";
// export const OAUTH2_REDIRECT_URI = "http://localhost:3000/"

export const GOOGLE_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL =
  API_BASE_URL +
  "/oauth2/authorize/facebook?redirect_uri=" + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/github?redirect_uri=" + OAUTH2_REDIRECT_URI;
export const TWITTER_AUTH_URL =
  API_BASE_URL + "oauth//twitter?redirect_uri=" + OAUTH2_REDIRECT_URI;

		export const BASE_URL = "https://meta.oxyloans.com/api"
		export const BASE_URLS = "http://ec2-65-0-147-157.ap-south-1.compute.amazonaws.com:9000/api"

export const USERID="userId"
export const ROLES="roles"
export const ACCESS_TOKEN = "accessToken";
export const Status = "status";