import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth-service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userId: new FormControl(''),
    pass: new FormControl('')
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = this.loginForm.get('userId').value;
    const pass = this.loginForm.get('pass').value;
    this.authService.auth(user, pass);
  }

}