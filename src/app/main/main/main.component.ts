import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  submitMessage: string = '';
  currentUser: string = '';

  feedbackForm: FormGroup = new FormGroup({
    fbContact: new FormControl(''),
    fullName: new FormControl(''),
    email: new FormControl(''),
    phNumber: new FormControl(''),
    message: new FormControl(''),
  })

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    // this.currentUser = this.authService.loggedInUser
  }

  onSubmit() {
    const fullName = this.feedbackForm.get('fullName').value;
    this.submitMessage = `Thank you ${fullName} for your feed`;
  }


}
