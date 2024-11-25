import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPage } from './users.page';
import { RouterModule } from '@angular/router';
import { userRoutes } from './users.routes';
import { UserCardComponent } from './components/user-card/user-card.component';
import { CardModule } from 'primeng/card';
import { UserFormDlgComponent } from './components/user-form-dlg/user-form-dlg.component';
import { DropdownComponent, InputComponent } from '@fmr-users/libs/shared-ui';
import { ButtonModule } from 'primeng/button'
import { DialogService } from 'primeng/dynamicdialog';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';

@NgModule({
  declarations: [
    UsersPage,
    UserCardComponent,
    UserOrdersComponent,
    UserFormDlgComponent,
  ],
  imports: [
    CommonModule,
    DropdownComponent,
    InputComponent,
    ButtonModule,
    RouterModule.forChild(userRoutes),
    CardModule,
  ],
  providers: [
    DialogService
  ]
})
export class UsersModule {}
