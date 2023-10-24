import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { JavaComponent } from './java/java.component';
import { PostComponent } from './post/post.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'mean', component: MeanComponent },
    { path: 'home/mean', component: MeanComponent },
    { path: 'home/mern', component: MernComponent },
    { path: 'home/java', component: JavaComponent },
    { path: 'mern', component: MernComponent },
    { path: 'java', component: JavaComponent },
    { path: 'post', component: PostComponent }
];

export const routes = RouterModule.forRoot(router);

