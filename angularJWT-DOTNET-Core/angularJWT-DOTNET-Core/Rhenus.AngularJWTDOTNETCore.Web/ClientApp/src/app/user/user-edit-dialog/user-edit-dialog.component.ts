import { UserService } from "./../../services/user.service";
import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-user-edit-dialog",
  templateUrl: "./user-edit-dialog.component.html",
  styleUrls: ["./user-edit-dialog.component.scss"],
})
export class UserEditDialogComponent implements OnInit {
  @Input() userEditDialog;
  @Input() user: User;
  submitted: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  hideDialog() {
    this.userEditDialog = false;
  }

  saveUser() {
    // if (this.product.name.trim()) {
    //   if (this.product.id) {
    //     this.products[this.findIndexById(this.product.id)] = this.product;
    //     this.messageService.add({
    //       severity: "success",
    //       summary: "Successful",
    //       detail: "Product Updated",
    //       life: 3000,
    //     });
    //   } else {
    //     this.product.id = this.createId();
    //     this.product.image = "product-placeholder.svg";
    //     this.products.push(this.product);
    //     this.messageService.add({
    //       severity: "success",
    //       summary: "Successful",
    //       detail: "Product Created",
    //       life: 3000,
    //     });
    //   }

    //   this.products = [...this.products];
    this.userEditDialog = false;
  }
}
