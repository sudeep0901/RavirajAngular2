import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SlimLoadingBarService, SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { PaginationModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';
//import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap';

// var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
import { AppComponent } from './app.component';
import { routing  } from './app.routes';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './users/user-card.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { UserListComponent } from './users/user-list.component';
import { MobileHideDirective } from './shared/directives/mobile-hide.directive';
import { HomeComponent } from './home/home.component';


// services
import {ConfigService} from './shared/utils/config.service';
import {NotificationService} from './shared/utils/notification.service';
import {ItemsService} from './shared/utils/item.service';
import  {DataService} from './services/data.service';
import  {MappingService} from './shared/utils/mapping.service';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCardComponent,
    HighlightDirective,
    UserListComponent,
    MobileHideDirective,
    HomeComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ModalModule,
    TimepickerModule,
    DatepickerModule,
    PaginationModule,
    ProgressbarModule,
    SlimLoadingBarModule.forRoot(),
    routing

  ],
  providers: [ConfigService,
        DataService,
        ItemsService,
        MappingService,
        NotificationService,
        SlimLoadingBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
