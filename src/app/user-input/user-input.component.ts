import { Component, EventEmitter, output, Output, signal } from '@angular/core';
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

  // @Output() calculate = new EventEmitter<InvestmentInput>()

  calculate = output<InvestmentInput>()

  onSubmit() {
    this.calculate.emit({
      initialInvestment: parseInt(this.enteredInitialInvestment()),
      duration: parseInt(this.enteredDuration()),
      expectedReturn: parseInt(this.enteredExpectedReturn()),
      annualInvestment: parseInt(this.enteredAnnualInitialInvestment()),
    });

    // reset the input fields
    this.enteredInitialInvestment.set('0')
    this.enteredAnnualInitialInvestment.set('0')
    this.enteredExpectedReturn.set('5')
    this.enteredDuration.set('10')
  }
}
