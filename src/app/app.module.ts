import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppCommonModule } from './common/app-common.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ProjectModule } from './project/project.module'
import { ShipmentModule } from './shipment/shipment.module'
import { rootRouterConfig } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppCommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ProjectModule,
    RouterModule.forRoot(rootRouterConfig),
    ShipmentModule,
    ShipmentModule,
    ShipmentModule,
    ShipmentModule,
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