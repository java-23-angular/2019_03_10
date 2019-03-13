export class TokenDto {
  constructor(public token: string) {

  }

  toString(): string {
    return this.token;
  }
}
