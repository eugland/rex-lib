import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputTextRoutingModule } from "./input-text-routing.module";
import { InputTextComponent } from "./input-text.component";

@NgModule({
	imports: [
		CommonModule,
		InputTextRoutingModule
	],
	declarations: [
		InputTextComponent
	]
})
export class InputTextModule {}
