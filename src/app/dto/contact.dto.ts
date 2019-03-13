export class ContactDto {
  constructor(public name: string,
              public lastName: string,
              public email: string,
              public phone: string,
              public address: string,
              public description: string,
              public id?:number){

  }

  toString():string{
    return this.id + ' '
      + this.name + ' '
      + this.lastName + ' '
      + this.email + ' '
      + this.phone + ' '
      +  this.address + ' '
      + this.description;
  }
}
