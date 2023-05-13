import axios from "axios";
import {API_BASE_URL} from '../Login/SocialLink';

export function getprams(token) {
  const ACCESS_TOKEN = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const api = "https://meta.oxyloans.com/user/me";
  const data =  axios.get(api, ACCESS_TOKEN);
  const redData =  data.data;
   console.log(redData);
		alert(token);
  return redData;
}
