import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
//import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { newpageComponent} from './newpage/newpage.component'
import { DashboardComponent }   from './dashboard/dashboard.component';
//import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
//import { TypographyComponent }   from './typography/typography.component';
//import { IconsComponent }   from './icons/icons.component';
//import { MapsComponent }   from './maps/maps.component';
//import { NotificationsComponent }   from './notifications/notifications.component';
//import { UpgradeComponent }   from './upgrade/upgrade.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    //UserComponent,
    TableComponent,
    //TypographyComponent,
    //IconsComponent,
    //MapsComponent,
    //NotificationsComponent,
    //UpgradeComponent,
    newpageComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    //SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    HttpModule,
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
