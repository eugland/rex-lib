import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconographyRoutingModule } from "./iconography-routing.module";
import { IconographyComponent } from "./iconography.component";

@NgModule({
	imports: [
		CommonModule,
		IconographyRoutingModule
	],
	declarations: [
		IconographyComponent
	]
})
export class IconographyModule {}
