import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  form = {
    name: '',
    samagraId: '',
    mobile: '',
    husbandName: '',
    husbandId: '',
    bank: '',
    account: ''
  };

  submitForm() {
    console.log(this.form);
    alert("Form Submitted Successfully!");
  }
}