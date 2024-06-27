import { ErrorResponse } from "./error-response";

export class BaseResponse<T> {
  success: boolean;
  message: string;
  result: T;
  error: ErrorResponse;

  constructor(success: boolean, message: string, result: T, error: ErrorResponse) {
    this.success = success;
    this.message = message;
    this.result = result;
    this.error = error;
  }
} 