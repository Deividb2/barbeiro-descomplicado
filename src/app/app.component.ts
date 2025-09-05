import { Component } from '@angular/core';
import { InitialBannerComponent } from "./components/initial-banner/initial-banner.component";
import { CourseContentComponent } from "./components/course-content/course-content.component";
import { TargetAudienceComponent } from "./components/target-audience/target-audience.component";
import { AboutInstructorComponent } from "./components/about-instructor/about-instructor.component";
import { CertificateCompletionComponent } from "./components/certificate-completion/certificate-completion.component";
import { GuaranteeComponent } from "./components/guarantee/guarantee.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PriceComponent } from "./components/price/price.component";
import { CallWhatsappComponent } from "./components/call-whatsapp/call-whatsapp.component";
import { ButtonWhatsappComponent } from "./components/button-whatsapp/button-whatsapp.component";
import { CourseInsideComponent } from "./components/course-inside/course-inside.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InitialBannerComponent, CourseContentComponent, TargetAudienceComponent, AboutInstructorComponent, CertificateCompletionComponent, GuaranteeComponent, FooterComponent, PriceComponent, CallWhatsappComponent, ButtonWhatsappComponent, CourseInsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}