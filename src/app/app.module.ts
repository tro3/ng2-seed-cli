import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { CommonModule } from './common/common.module'
import { HomeComponent } from './home/home.component'
import { ProjectModule } from './project/project.module'
import { ShipmentModule } from './app1/shipment/shipment.module'
import { ShipmentModule } from './shipment/shipment.module'
import { rootRouterConfig } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ProjectModule,
    RouterModule.forRoot(rootRouterConfig),
    ShipmentModule,
    ShipmentModule,
    ShipmentModule,
    ShipmentModule
  ],
  providers   : [ ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}