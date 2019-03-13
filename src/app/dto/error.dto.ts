export class ErrorDto {
  constructor(public code: number,
              public message: string) {

  }

  toString(): string {
    return this.code + ' ' + this.message;
  }
}
