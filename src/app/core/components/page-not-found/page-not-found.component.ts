import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  redirectAfter = 15 * 1000; //15 * 1000ms(15s)
  seconds = this.redirectAfter / 1000;

  constructor(private router: Router) {}
  ngOnInit() {
    this.redirectToHomePage();
  }

  redirectToHomePage() {
    const IntervalId = setInterval(() => this.seconds--, 1000);
    setTimeout(() => {
      this.router.navigate(['/']);
      clearInterval(IntervalId);
    }, this.redirectAfter);
  }
}
