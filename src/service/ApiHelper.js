import Axios from "axios";
import { ErrorHandlerHelper } from "./ErrorHandler";
import { SuccessHandlerHelper } from "./SuccessHandler";
/**
 * ApiHelper Class - For making Api Requests
 */
let CancelToken = Axios.CancelToken;
let cancel;

export class ApiHelper {
  _portalGateway;
  _apiVersion;

  constructor() {
    this._portalGateway = "";
    this._apiVersion = "";
    this.source = Axios.CancelToken.source();
    this.cancelToken = this.source.token;
  }
  setHost = (host) => {
    this._portalGateway = host;
  };
  setApiVersion = (version) => {
    this._apiVersion = version;
  };
  /**
   * Fetches from the Gateway defined by the instantiated object. Accepts <T> as output object.
   * @example <caption>"/Auth/UserAccount", "/GetCurrentUser", "GET", "JWT Content"</caption>
   * @param {service} service - wanting to be access ex. "UserAuth/Auth"
   * @param {endpoint} endpoint - you wish to call ex. "/Login"
   * @param {method} mehotd - method (GET, UPDATE, DELETE, POST)
   * @param {jwt} JWT - JSON Web Token (Optional)
   * @param {queryOptions} Query - query options for "GET" methods (Optional)
   * @param {body} body - JSON body for "UPDATE, DELETE and POST" methods (Optional)
   */
  async FetchFromServer(
    Url,
    method,
    authenticated = false,
    queryOptions = undefined,
    body = undefined,
    cancelToken
  ) {
    let url = Url;
    let headers = { "Content-Type": "application/json" };
    if (authenticated) {
      const storageSession = localStorage.getItem("token");
      headers.Authorization = storageSession;
    }

    try {
      method = method.toLowerCase();
      let response = await Axios.request({
        method,
        url,
        data: body,
        headers: headers,
        params: queryOptions,
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          cancel = c;
        }),
      });

      if (response.ok === false || response.status !== 200) {
        let errorObject = {
          code: response.status,
          data: response.data,
        };

        throw errorObject;
      }
      const data = new SuccessHandlerHelper(response.data);
      return data.data;
    } catch (err) {
      if (Axios.isCancel(err) || !err.response) {
        return {
          isError: true,
          error: "Request cancelled",
          messages: err.message === "cancel" ? [] : ["Request cancelled"],
        };
      } else {
        const errorHelper = new ErrorHandlerHelper(err.response);
        console.log("====================================");
        console.log(err.response);
        console.log("====================================");
        return errorHelper.error;
      }
    }
  }
  /**
   * Cancels the last request.
   */
  cancelRequest = (err) => {
    cancel && cancel(err);
  };
}
