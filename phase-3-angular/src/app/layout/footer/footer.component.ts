import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../core/services/settings.service';
import { SiteSettings } from '../../core/models/site-settings.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: false,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  settings: SiteSettings | null = null;

  quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'About Us', url: '/about' },
    { label: 'Contact', url: '/contact' }
  ];

  productLinks = [
    { label: 'Solar Inverters', url: '/products' },
    { label: 'Lithium Batteries', url: '/products' },
    { label: 'Solar Panels', url: '/products' },
    { label: 'Accessories', url: '/products' }
  ];

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.get().subscribe(s => this.settings = s);
  }

  get phone(): string { return this.settings?.phone || '0322-2550299'; }
  get email(): string { return this.settings?.email || 'thefmstrading@gmail.com'; }
  get address(): string { return this.settings?.address || 'Al-Najeebi Electronic Bazar, Saddar, Karachi'; }
  get hours(): string { return this.settings?.businessHours || 'Mon-Sat: 9:00 AM - 8:00 PM'; }
  get whatsAppUrl(): string {
    const num = (this.settings?.whatsApp || '923222550299').replace(/\D/g, '');
    return `https://wa.me/${num}?text=Hello%2C%20I%27m%20interested%20in%20a%20solar%20quote`;
  }
  get facebookUrl(): string { return this.settings?.facebookUrl || 'https://facebook.com/fmspower'; }
  get instagramUrl(): string { return this.settings?.instagramUrl || 'https://instagram.com/fmspower'; }
  get youtubeUrl(): string { return this.settings?.youtubeUrl || 'https://youtube.com/fmspower'; }
  get logoUrl(): string | null { return this.settings?.logoUrl || null; }
  get siteName(): string { return this.settings?.siteName || "FM's Power"; }
}
