import { Component, AfterViewInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
    constructor(
      private vcr: ViewContainerRef,
      public toastr: ToastsManager,
      private router: Router,
    ) {
      this.toastr.setRootViewContainerRef(vcr);
    };
  
    public ngAfterViewInit(): void {
  
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0)
      });
    }
}
