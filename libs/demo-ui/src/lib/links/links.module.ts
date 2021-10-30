import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LinksRoutingModule } from "./links-routing.module";
import { LinksComponent } from "./links.component";

@NgModule({
	imports: [
		CommonModule,
		LinksRoutingModule
	],
	declarations: [
		LinksComponent
	]
})
export class LinksModule {}
