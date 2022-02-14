import { UserService } from "./../services/user.service";
import { PrimeNgCoreModule } from "./../core/primeng-core/primeng-core.module";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { UserEditDialogComponent } from "./user-edit-dialog/user-edit-dialog.component";
import { ConfirmationService, MessageService } from "primeng-lts/api";

@NgModule({
  declarations: [UserComponent, UserEditDialogComponent],
  imports: [CommonModule, FormsModule, PrimeNgCoreModule],
  exports: [UserComponent],
  providers: [UserService, MessageService, ConfirmationService],
})
export class UserModule {}
