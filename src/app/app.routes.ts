import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MyFavoritesComponent } from './pages/my-favorites/favorites.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'product-details/:id', component: ProductDetailsComponent},
    { path: 'my-cart', component: MyCartComponent},
    { path: 'my-profile', component: MyProfileComponent},
    { path: 'my-favorites', component: MyFavoritesComponent},
];
