import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: false,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setPage({
      title: 'About Us',
      description: "Learn about FM's Power - Karachi's trusted solar energy solutions provider since our founding.",
      url: '/about'
    });
  }
  stats = [
    { value: '500+', label: 'Happy Customers' },
    { value: '10MW+', label: 'Power Generated' },
    { value: '5 Years', label: 'Warranty' },
    { value: '98.5%', label: 'Efficiency' }
  ];

  values = [
    { icon: 'shield', title: 'Quality First', desc: 'We only source premium products from certified manufacturers with proven track records.' },
    { icon: 'users', title: 'Customer Focus', desc: 'Your satisfaction is our priority. We provide end-to-end support from consultation to after-sales.' },
    { icon: 'zap', title: 'Innovation', desc: 'We stay at the forefront of solar technology to offer you the best solutions available.' },
    { icon: 'leaf', title: 'Sustainability', desc: 'Every solar system we install contributes to a greener, more sustainable Pakistan.' }
  ];

  whyUs = [
    { number: '01', title: 'Industry-Leading Efficiency', desc: '98.5% conversion efficiency means more power from every ray of sunlight, maximizing your energy savings.' },
    { number: '02', title: 'Smart Technology', desc: 'Monitor your system in real-time via our smartphone app. Track generation, consumption, and savings instantly.' },
    { number: '03', title: 'Comprehensive Warranty', desc: '5-year warranty on inverters & batteries, 15-year warranty on solar panels. Complete peace of mind.' },
    { number: '04', title: 'Expert Support', desc: 'Our dedicated support team is available to assist you before, during, and after your solar installation.' },
    { number: '05', title: 'Competitive Pricing', desc: 'Premium quality at fair prices. We ensure you get the best value for your solar investment in Karachi.' },
    { number: '06', title: 'Local Presence', desc: 'Based in Saddar, Karachi with a team ready to serve you. Fast installation and on-site support available.' }
  ];

  certifications = [
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', label: 'CE Certified' },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>', label: 'ISO 9001' },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>', label: 'IEC 62109' },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', label: 'TÜV Approved' },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>', label: '5-Year Warranty' }
  ];
}
