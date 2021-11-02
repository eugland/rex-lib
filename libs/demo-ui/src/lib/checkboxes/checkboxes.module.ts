import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckboxesRoutingModule } from "./checkboxes-routing.module";
import { CheckboxesComponent } from "./checkboxes.component";

@NgModule({
	imports: [
		CommonModule,
		CheckboxesRoutingModule
	],
	declarations: [
		CheckboxesComponent
	]
})
export class CheckboxesModule {}
