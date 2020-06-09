import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomersHomeComponent} from "./customers-home/customers-home.component";
import {CustomersDetailComponent} from "./customers-detail/customers-detail.component";
import {CustomersNewComponent} from "./customers-new/customers-new.component";

const routes: Routes = [{
    path: "new",
    component: CustomersNewComponent
}, {
    path: ":CUSTOMERID",
    component: CustomersDetailComponent
}, {
    path: '',
    component: CustomersHomeComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule {
}
