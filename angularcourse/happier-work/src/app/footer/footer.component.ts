import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faYoutube, faTwitter, faFacebookF} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faLinkedinIn = faLinkedinIn;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  constructor() { }

  ngOnInit(): void {
  }

}
