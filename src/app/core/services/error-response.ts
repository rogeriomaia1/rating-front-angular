import { ValidationError } from "./validation-error";

export class ErrorResponse {
  code: string;
  message: string;
  listValidationError: ValidationError[];

  constructor(code: string, message: string, listValidationError: ValidationError[]) {
    this.code = code;
    this.message = message;
    this.listValidationError = listValidationError;
  }
}