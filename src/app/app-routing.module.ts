import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexToolsComponent } from './complex-tools/complex-tools.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SimpleToolsComponent } from './simple-tools/simple-tools.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'simple',component:SimpleToolsComponent},
  {path:'complex',component:ComplexToolsComponent},
  {path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
