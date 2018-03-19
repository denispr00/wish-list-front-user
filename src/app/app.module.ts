import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WishComponent} from './wish/wish.component';

import { AppComponent } from './app.component';
import { StompService } from 'ng2-stomp-service';

@NgModule({
  declarations: [
    AppComponent,
    WishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
