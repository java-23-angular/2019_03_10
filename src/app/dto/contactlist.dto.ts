import {ContactDto} from './contact.dto';

export class ContactListDto {
  constructor(public contacts: ContactDto[]){

  }

  toString():string{
    let result = '';
    for(let contact of this.contacts){
      result += contact.toString() + '\n';
    }
    return result;
  }
}
