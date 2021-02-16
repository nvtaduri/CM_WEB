import { environment } from "../environments/environment";

export class ApiService {
  public static timer = 30000;
  public static API = {
    // DATA APT URL's
    GET_DB_CONNECTION: environment.apiUrl + "/dbconnection",
    GET_API_WORK: environment.apiUrl + "/server",
    ADD_DATA_TO_DOWNLOAD: environment.apiUrl + "/download",
    CREATE_NEW_RFC: environment.apiUrl + "/api/v1/events",
    getList: environment.apiUrl + "/api/v1/events",
    LOGIN: environment.apiUrl + "/login",
    POSTS: environment.apiUrl + "/posts",
  };
}
