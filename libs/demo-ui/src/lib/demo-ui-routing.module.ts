import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
	{ path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule) },
	{ path: 'colours', loadChildren: () => import('./colours/colours.module').then(m => m.ColoursModule) },
  { path: 'grids', loadChildren: () => import('./grids/grids.module').then(m => m.GridsModule) },
  { path: 'date-picker', loadChildren: () => import('./grids/grids.module').then(m => m.GridsModule) },
	{ path: 'links', loadChildren: () => import('./links/links.module').then(m => m.LinksModule) },
	{ path: 'typeaheads', loadChildren: () => import('./typeaheads/typeaheads.module').then(m => m.TypeaheadsModule) },
	{ path: 'typography', loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule) },
	{ path: 'checkboxes', loadChildren: () => import('./checkboxes/checkboxes.module').then(m => m.CheckboxesModule) },
	{ path: 'radio', loadChildren: () => import('./radio/radio.module').then(m => m.RadioModule) },
	{ path: 'switch', loadChildren: () => import('./switch/switch.module').then(m => m.SwitchModule) },
	{ path: 'iconography', loadChildren: () => import('./iconography/iconography.module').then(m => m.IconographyModule) },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: []
})
export class DemoUIRoutingModule {}
