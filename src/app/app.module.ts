import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { InactiveContainerComponent } from './inactive-container/inactive-container.component';
import { ActiveContainerComponent } from './active-container/active-container.component';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		DemoMaterialModule,
		MatNativeDateModule
	],
	entryComponents: [AppComponent],
	declarations: [AppComponent, InactiveContainerComponent, ActiveContainerComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule { }