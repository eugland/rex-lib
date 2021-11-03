import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SwitchRoutingModule } from "./switch-routing.module";
import { SwitchComponent } from "./switch.component";

@NgModule({
	imports: [
		CommonModule,
		SwitchRoutingModule
	],
	declarations: [
		SwitchComponent
	]
})
export class SwitchModule {}