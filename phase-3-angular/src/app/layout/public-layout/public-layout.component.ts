import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  standalone: false
})
export class PublicLayoutComponent {
  showBackToTop = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.showBackToTop = window.scrollY > 400;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
