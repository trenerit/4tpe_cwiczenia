import { Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { StartComponent } from './start/start.component';
import { PetlaForComponent } from './petla-for/petla-for.component';

export const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'formularz', component: FormularzComponent},
    {path: 'petla-for', component: PetlaForComponent},

];
