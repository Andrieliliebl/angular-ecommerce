import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, ProductDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ecommerce';
}
