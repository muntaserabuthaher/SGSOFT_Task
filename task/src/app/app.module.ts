import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { EnergyMetersComponent } from './admin/energy-meters/energy-meters.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './admin/shared/sidenav/sidenav.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/shared/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { SidePannelComponent } from './admin/energy-meters/side-pannel/side-pannel.component';
import { EnergyMetersContainerComponent } from './admin/energy-meters/energy-meters-container/energy-meters-container.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnergyMetersComponent,
    SidenavComponent,
    AdminComponent,
    HeaderComponent,
    SidePannelComponent,
    EnergyMetersContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
