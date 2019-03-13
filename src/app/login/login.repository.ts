import {Injectable} from '@angular/core';
import {ApiProvider} from '../providers/api.provider';
import {StoreProvider} from '../providers/store.provider';
import {Subject} from 'rxjs';

@Injectable()
export class LoginRepository {
  private emitter;
  constructor(private api: ApiProvider, private store: StoreProvider) {

  }


  registration(email: string, password: string): Subject<boolean>{
    this.emitter = new Subject();
    this.api.registration(email, password)
      .subscribe(
        token => {
        this.store.setToken(token);
        this.emitter.next(true);
      },
          err =>{
        this.emitter.error(err);
      })

    return this.emitter;
  }
}
