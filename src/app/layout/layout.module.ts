import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SessionComponent } from './session/session.component';
import { FooterComponent } from './footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MenuComponent,
    SessionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule
  ],
  exports: [SessionComponent],
  bootstrap: [SessionComponent]
})
export class LayoutModule { }
