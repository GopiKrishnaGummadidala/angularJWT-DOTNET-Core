import { User } from "./../models/user.model";
import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng-lts/api";
import { UserService } from "../services/user.service";
import { UiLoaderService } from "../services/ui-loader.service";

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
    private uiService: UiLoaderService,
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.uiService.blockUi();
    this.userService.getUsers().then((data: User[]) => {
      this.users = data;
      this.uiService.unBlockUi();
    });
  }

  addNew() {
    this.user = new User();
    this.userEditDialog = true;
  }

  deleteSelectedUsers() {
    // To Do
  }

  editUser(user: User) {
    this.user = { ...user };
    this.userEditDialog = true;
  }

  editDialogClosed(value: boolean) {
    this.userEditDialog = value;
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.userService.deleteUser(user.id).then((data: boolean) => {
          if (data) {
            this.users = this.users.filter((u) => u.id !== user.id);
            this.showMessage("success", "Successful", "User Deleted");
          } else {
            this.showMessage("warn", "Not Successful", "User Not Deleted");
          }
        });
      },
    });
  }

  saveUser(user: User) {
    if (user.id) {
      this.userService.updateUser(user).then((data: boolean) => {
        if (data) {
          const index = this.users.findIndex((u) => u.id === user.id);
          this.users.splice(index, 1, user);
          this.users = [...this.users];
          this.showMessage("success", "Successful", "User Saved");
        } else {
          this.showMessage("warn", "Not Successful", "failed to save user");
        }
      });
    } else {
      this.userService.addUser(user).then((data: boolean) => {
        if (data) {
          this.getUsers();
          this.showMessage("success", "Successful", "User added");
        } else {
          this.showMessage("warn", "Not Successful", "failed to save user");
        }
      });
    }
  }

  showMessage(
    severity: string,
    summary: string,
    detail: string,
    life = 3000
  ): void {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life,
    });
  }
}
