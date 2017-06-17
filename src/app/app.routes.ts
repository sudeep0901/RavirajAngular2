import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
// import { CustomersComponent   } from "./customers/customers.component";
// import { CUSTOMER_ROUTES    } from "./customers/customer.routes";
// import { CustomerStartComponent } from './customers/customer-start.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list.component';
import { HomeComponent  } from './home/home.component';



// import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


//Practice routes - enable this lines to use user componentand practice component

const APP_ROUTES :Routes =[


// {path : 'customer', component: CustomersComponent, children : CUSTOMER_ROUTES },
// {path : 'start', component: CustomerStartComponent, children : CUSTOMER_ROUTES },


// {path : 'shopping-list', component: ShoppingListComponent}
// {path : '', component: HomeComponent, pathMatch: 'full'},
    { path: 'users', component: UserListComponent },
    { path: '', component: HomeComponent }

];
 

//register routes 
export const routing = RouterModule.forRoot(APP_ROUTES);

