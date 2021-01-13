// import { DefaultErrorMessage } from "../config/Constants";
/**
 * ErrorHandlerHelper Class - For managing errors
 */
export class ErrorHandlerHelper {
  rawError;
  error = {
    code: 500,
    isError: true,
    timestamp: Date.now(),
    error: "Unknown error",
    messages: [],
    data: undefined,
  };
  constructor(err) {
    this.rawError = err;
    this.setError();
  }

  setError = () => {
    const code =
      this.rawError && this.rawError.code
        ? this.rawError.code
        : this.error.code;
    this.error.code = code ? code : 400;
    this.error.timestamp = Date.now();
    this.error.messages = [];
    if (
      this.rawError &&
      this.rawError.data &&
      typeof this.rawError.data === "object" &&
      this.rawError.data.message
    ) {
      if (
        (this.rawError && this.rawError.data.message === "Token has expired") ||
        (this.rawError &&
          this.rawError.data.message === "Unauthorized, Invalid token!")
      ) {
        localStorage.removeItem("token");
        window.location.href = "/";
      } else {
        this.error.messages.push(this.rawError.data.message);
      }
    }
    if (!this.error.messages.length) {
      this.error.error = "Unknown";
      this.error.messages = [null];
    }
  };
}
