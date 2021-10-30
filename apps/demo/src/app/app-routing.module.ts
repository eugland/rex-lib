import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ 'path': '', loadChildren: () => import('@rex-lib/demo-ui').then(m => m.DemoUIModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
	exports: []
})
export class AppRoutingModule {}
