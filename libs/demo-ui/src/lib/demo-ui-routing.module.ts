import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
	{ path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule) },
	{ path: 'colours', loadChildren: () => import('./colours/colours.module').then(m => m.ColoursModule) },
	{ path: 'grids', loadChildren: () => import('./grids/grids.module').then(m => m.GridsModule) },
	{ path: 'links', loadChildren: () => import('./links/links.module').then(m => m.LinksModule) },
	{ path: 'typeaheads', loadChildren: () => import('./typeaheads/typeaheads.module').then(m => m.TypeaheadsModule) },
	{ path: 'typography', loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule) }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: []
})
export class DemoUIRoutingModule {}
