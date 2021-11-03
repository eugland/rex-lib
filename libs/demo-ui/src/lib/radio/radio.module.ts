import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RadioRoutingModule } from "./radio-routing.module";
import { RadioComponent } from "./radio.component";

@NgModule({
	imports: [
		CommonModule,
		RadioRoutingModule
	],
	declarations: [
		RadioComponent
	]
})
export class RadioModule {}
