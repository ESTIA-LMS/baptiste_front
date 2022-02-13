import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SessionComponent } from './session/session.component';
import { FooterComponent } from './footer/footer.component';
import { MenuVertiComponent } from './menu-verti/menu-verti.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MenuComponent,
    SessionComponent,
    FooterComponent,
    MenuVertiComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
  ],
  exports: [SessionComponent, MenuVertiComponent],
  bootstrap: [SessionComponent, MenuVertiComponent]
})
export class LayoutModule { }
