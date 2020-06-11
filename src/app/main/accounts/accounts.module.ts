import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import {AccountsRoutingModule} from './accounts-routing.module';
import {AccountsHomeComponent} from './accounts-home/accounts-home.component';
import {SharedModule} from '../../shared/shared.module';
import {AccountsDetailComponent} from "./accounts-detail/accounts-detail.component";
import {AccountsNewComponent} from "./accounts-new/accounts-new.component";

@NgModule({
    imports: [
        CommonModule,
        OntimizeWebModule,
        SharedModule,
        AccountsRoutingModule
    ],
    declarations: [
        AccountsHomeComponent,
        AccountsDetailComponent,
        AccountsNewComponent
    ]
})
export class AccountsModule {
}