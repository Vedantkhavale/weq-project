import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  isYearly = false;

  // Define monthly and yearly prices
  monthlyBasicPrice = 10;
  yearlyBasicPrice = 96; // 20% discount applied for yearly
  
  monthlyPremiumPrice = 20;
  yearlyPremiumPrice = 192; // 20% discount applied for yearly

  plans = [
    {
      name: 'Starter',
      description: 'with all your customers via all conversation channels in one central dashboard',
      price: '$2.80',
      features: [
        '2GB SSD',
        '10GB Bandwidth',
        '15 Email Accounts',
        'Unlimited Databases',
        '4 Subdomains',
        '1 Parked Domain',
        '2 Websites',
        'Free SSL',
        'Softaculous'
      ]
    },
    {
      name: 'Standard',
      description: 'with all your customers via all conversation channels in one central dashboard',
      price: '$4.20',
      features: [
        '2GB SSD',
        '10GB Bandwidth',
        '15 Email Accounts',
        'Unlimited Databases',
        '4 Subdomains',
        '1 Parked Domain',
        '2 Websites',
        'Free SSL',
        'Softaculous'
      ]
    },
    {
      name: 'Supreme',
      description: 'with all your customers via all conversation channels in one central dashboard',
      price: '$7.00',
      features: [
        '2GB SSD',
        '10GB Bandwidth',
        '15 Email Accounts',
        'Unlimited Databases',
        '4 Subdomains',
        '1 Parked Domain',
        '2 Websites',
        'Free SSL',
        'Softaculous'
      ]
    }
  ];

  selectPlan(plan: any) {
    alert(`You selected the ${plan.name} plan!`);
  }
}
