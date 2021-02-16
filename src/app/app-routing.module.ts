import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'definition',
    loadChildren: () => import('./pages/definition/definition.module').then( m => m.DefinitionPageModule)
  },
  {
    path: 'panneaux',
    loadChildren: () => import('./pages/panneaux/panneaux.module').then( m => m.PanneauxPageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./pages/apropos/apropos.module').then( m => m.AproposPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
