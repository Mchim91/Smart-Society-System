import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BailModule } from './bail/bail.module';
import { BaseEntityModule } from './base-entity/base-entity.module';
import { CauseOfCrimeModule } from './cause-of-crime/cause-of-crime.module';
import { CorrectionCentersModule } from './correction-centers/correction-centers.module';
import { CourtChargeModule } from './court-charge/court-charge.module';
import { CrimeOffendersModule } from './crime-offenders/crime-offenders.module';
import { CrimesModule } from './crimes/crimes.module';
import { OffencesModule } from './offences/offences.module';
import { OffendersModule } from './offenders/offenders.module';
import { PrisonModule } from './prison/prison.module';
import { PrisonWardModule } from './prison-ward/prison-ward.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    AppRoutingModule,
    BailModule,
    BaseEntityModule,
    CauseOfCrimeModule,
    CorrectionCentersModule,
    CourtChargeModule,
    CrimeOffendersModule,
    CrimesModule,
    OffencesModule,
    OffendersModule,
    PrisonModule,HttpClientModule,
    PrisonWardModule,
    DashboardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
