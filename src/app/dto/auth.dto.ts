export class AuthDto {
  constructor(public email: string,
              public password:string){
  }

  toString(): string {
    return this.email + ' ' + this.password;
  }
}
