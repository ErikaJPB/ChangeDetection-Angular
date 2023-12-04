import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnPushComponent } from './components/on-push/on-push.component';
import {
  DataListProvider,
  DetachComponent,
} from './components/detach/detach.component';
import {
  PrecioBitcoinProvider,
  ReattachComponent,
} from './components/reattach/reattach.component';
import { NgZoneComponent } from './components/ng-zone/ng-zone.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
    DetachComponent,
    ReattachComponent,
    NgZoneComponent,
    AsyncPipeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [DataListProvider, PrecioBitcoinProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
