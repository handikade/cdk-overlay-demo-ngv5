import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterModule, Routes } from '@angular/router';
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { AdvanceComponent } from './advance/advance.component';

const appRoutes: Routes = [
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'intermediate',
    component: IntermediateComponent
  },
  {
    path: 'advance',
    component: AdvanceComponent
  },
  {
    path: '',
    redirectTo: '/basic',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    IntermediateComponent,
    AdvanceComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
