import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { ConsultingComponent } from './consulting/consulting.component'
import { SoftwareComponent } from './software/software.component'
import { ModeComponent } from './mode/mode.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'mode', component: ModeComponent },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/about',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
