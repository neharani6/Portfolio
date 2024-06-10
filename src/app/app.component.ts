import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  @HostBinding('class.pc') pcMode = false;

  constructor(
    private elementRef: ElementRef,
    private breakpointObservable: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointObservable
      .observe([Breakpoints.HandsetLandscape, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints))
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetLandscape)
                this.elementRef.nativeElement.classList.remove('pc');
              this.pcMode = false;

              if (breakpoint === Breakpoints.WebLandscape)
                this.elementRef.nativeElement.classList.add('pc');
              this.pcMode = true;
            }
          console.log(result);
        },
      });
  }
}
