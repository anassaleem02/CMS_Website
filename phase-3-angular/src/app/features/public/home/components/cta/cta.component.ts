import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../../../../../core/services/settings.service";

@Component({
  selector: "app-cta",
  templateUrl: "./cta.component.html",
  standalone: false,
  styleUrls: ["./cta.component.scss"]
})
export class CtaComponent implements OnInit {
  whatsAppUrl = "https://wa.me/923222550299?text=Hello%2C%20I%27m%20interested%20in%20a%20solar%20quote";
  phoneUrl = "tel:03222550299";

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.get().subscribe(s => {
      if (s?.whatsApp) {
        const num = s.whatsApp.replace(/\D/g, "");
        this.whatsAppUrl = `https://wa.me/${num}?text=Hello%2C%20I%27m%20interested%20in%20a%20solar%20quote`;
      }
      if (s?.phone) {
        this.phoneUrl = `tel:${s.phone.replace(/\s/g, "")}`;
      }
    });
  }
}
