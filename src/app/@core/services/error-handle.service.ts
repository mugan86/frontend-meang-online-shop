import { ErrorHandler } from '@angular/core';

export class MyErrorHandler implements ErrorHandler {
  handleError(error: any) {
    // console.error(Object.getOwnPropertyNames(error))
    // Object.getOwnPropertyNames(error).forEach(p => console.error(error[p]))
    console.error(
      error.fileName,
      error.lineNumber,
      ':',
      error.columnNumber,
      '\n',
      error.message,
      error.rejection
    );
  }
}
