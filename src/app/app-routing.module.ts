import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'warning-test',
    loadChildren: () => import('./warning/warning-test.module').then(m => m.WarningTestModule)
  },
  {
    path: 'error-test',
    loadChildren: () => import('./error/error-test.module').then(m => m.ErrorTestModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
