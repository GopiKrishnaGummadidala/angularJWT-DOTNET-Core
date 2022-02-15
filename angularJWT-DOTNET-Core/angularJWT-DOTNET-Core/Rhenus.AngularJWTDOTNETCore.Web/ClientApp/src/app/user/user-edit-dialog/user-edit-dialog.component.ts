import { User } from "./../../models/user.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-user-edit-dialog",
  templateUrl: "./user-edit-dialog.component.html",
  styleUrls: ["./user-edit-dialog.component.scss"],
})
export class UserEditDialogComponent implements OnInit {
  private _user: User;
  @Input() userEditDialog;
  userForm: FormGroup;
  get user(): User {
    return this._user;
  }
  @Input() set user(value: User) {
    this._user = value;
    this.fillUserForm();
  }
  @Output() public dialogClosed = new EventEmitter<boolean>();
  @Output() public saveClicked = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      dob: new FormControl("", [
        Validators.required,
        (c) => this.validateDOB(c),
      ]),
    });
  }

  hideDialog() {
    this.user = new User();
    this.dialogClosed.emit(false);
    this.userForm.reset();
  }

  fillUserForm() {
    if (this.user && this.userForm) {
      this.userForm.get("firstName").setValue(this.user.firstName);
      this.userForm.get("lastName").setValue(this.user.lastName);
      if (this.user.dob) {
        this.userForm.get("dob").setValue(new Date(this.user.dob));
      }
    }
  }

  saveUser() {
    if (this.userForm.invalid) {
      return;
    }
    this.user.firstName = this.userForm.get("firstName").value;
    this.user.lastName = this.userForm.get("lastName").value;
    this.user.dob = this.userForm.get("dob").value;
    this.saveClicked.emit(this.user);
    this.hideDialog();
    this.user = new User();
  }

  private validateDOB(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const validFrom = control.value;
    const today = new Date();
    if (today <= new Date(validFrom)) {
      return { "DOB is invalid": false };
    }
    return {};
  }
}
