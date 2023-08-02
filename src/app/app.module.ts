import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, GalleryComponent, GalleryModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HammerModule,
    NgOptimizedImage,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
