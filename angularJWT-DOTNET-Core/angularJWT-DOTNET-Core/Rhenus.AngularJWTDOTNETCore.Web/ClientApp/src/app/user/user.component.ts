import { User } from "./../models/user.model";
import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng-lts/api";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  userEditDialog: boolean;

  users: User[];

  user: User;

  selectedUsers: User[];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.userService.getUsers().then((data) => (this.users = data));
  }

  openNew() {
    this.user = new User();
    this.userEditDialog = true;
  }

  deleteSelectedUsers() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected users?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        // this.products = this.products.filter(
        //   (val) => !this.selectedProducts.includes(val)
        // );
        // this.selectedProducts = null;
        // this.messageService.add({
        //   severity: "success",
        //   summary: "Successful",
        //   detail: "Products Deleted",
        //   life: 3000,
        // });
      },
    });
  }

  editUser(user: User) {
    this.user = { ...user };
    this.userEditDialog = true;
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + user.firstName + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        // this.products = this.products.filter((val) => val.id !== product.id);
        // this.product = {};
        // this.messageService.add({
        //   severity: "success",
        //   summary: "Successful",
        //   detail: "Product Deleted",
        //   life: 3000,
        // });
      },
    });
  }
}
