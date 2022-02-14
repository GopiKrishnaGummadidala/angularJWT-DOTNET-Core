import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressSpinnerModule } from "primeng-lts/progressspinner";
import { ButtonModule } from "primeng-lts/button";
import { ToastModule } from "primeng-lts/toast";
import { TableModule } from "primeng-lts/table";
import { BlockUIModule } from "primeng-lts/blockui";
import { DialogModule } from "primeng-lts/dialog";
import { ConfirmDialogModule } from "primeng-lts/confirmdialog";
import { ToolbarModule } from "primeng-lts/toolbar";
import { InputTextModule } from "primeng-lts/inputtext";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    ButtonModule,
    ToastModule,
    TableModule,
    BlockUIModule,
    DialogModule,
    ConfirmDialogModule,
    ToolbarModule,
    InputTextModule,
  ],
  exports: [
    CommonModule,
    ProgressSpinnerModule,
    ButtonModule,
    ToastModule,
    TableModule,
    BlockUIModule,
    DialogModule,
    ConfirmDialogModule,
    ToolbarModule,
    InputTextModule,
  ],
})
export class PrimeNgCoreModule {}
