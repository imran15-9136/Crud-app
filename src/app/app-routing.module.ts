import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReportViewComponent } from './report/report-view/report-view.component';

const routes: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(m=>m.CategoryModule)
  },
  {
    path:'report',
    loadChildren:() => import('./report/report.module').then(m=>m.ReportModule)
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'**',
    component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
