import {Component, OnInit} from '@angular/core';
import {LoginRepository} from './login.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginRepository]
})
export class LoginComponent implements OnInit {
  email: any = '';
  isDisabled: any = false;
  password: any = '';
  showError: any = false;
  error: any = '';
  showSuccess: any = false;

  subscription: any;

  constructor(private repository: LoginRepository) {
  }

  ngOnInit() {

  }

  registration() {
    this.isDisabled = true;
    //valid fields
    this.subscription = this.repository.registration(this.email, this.password)
      .subscribe(v => {
          this.showRegSuccess();
        }, err => {
          this.showRegError(err);
        }
      );
  }


  private showRegSuccess() {
    this.showSuccess = true;
    setTimeout(()=>{
      this.showSuccess = false;
      this.isDisabled = false;
    },1500);

  }

  private showRegError(err: string) {
    this.error = err;
    this.showError = true;
    setTimeout(()=>{
      this.isDisabled = false;
      this.showError = false;
    },1500);
  }
}
