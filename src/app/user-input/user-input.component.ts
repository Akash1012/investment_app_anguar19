import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0')
  enteredAnnualInitialInvestment = signal('0')
  enteredExpectedReturn = signal('5')
  enteredDuration = signal('10')

  @Output() calculate = new EventEmitter<InvestmentInput>()

  onSubmit() {
    console.log(this.enteredExpectedReturn, this.enteredInitialInvestment, this.enteredDuration, this.enteredAnnualInitialInvestment)

    this.calculate.emit({
      initialInvestment: parseInt(this.enteredInitialInvestment()),
      duration: parseInt(this.enteredDuration()),
      expectedReturn: parseInt(this.enteredExpectedReturn()),
      annualInvestment: parseInt(this.enteredAnnualInitialInvestment()),
    });
  }
}
