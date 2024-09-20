import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
Service=
{
  domain:'Domain',
  share:'Shared Hosting',
  cloud:'Cloud Hosting',
  private:'Private Hosting'
}


Hosting=
  {
    cheap:'Cheap Hosting',
    wordpress:'Hosting Wordpress',
    email:'Email Hosting',
    unlimited:'Hosting Unlimited'
  }


Company={
  about:'About',
  career:'Career',
  contact:'Contact Us'
}

Help={
  faq:'FAQ',
  support:'Help Support'
}
}
