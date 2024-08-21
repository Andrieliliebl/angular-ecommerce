import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { HomeComponent } from "../pages/home/home.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
