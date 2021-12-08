import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
	{ path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule) },
	{ path: 'colours', loadChildren: () => import('./colours/colours.module').then(m => m.ColoursModule) },
  { path: 'grids', loadChildren: () => import('./grids/grids.module').then(m => m.GridsModule) },
  { path: 'date-picker', loadChildren: () => import('./date-picker/date-picker.module').then(m => m.DatePickerModule) },
  { path: 'time-picker', loadChildren: () => import('./time-picker/time-picker.module').then(m => m.TimePickerModule) },
	{ path: 'links', loadChildren: () => import('./links/links.module').then(m => m.LinksModule) },
	{ path: 'typeaheads', loadChildren: () => import('./typeaheads/typeaheads.module').then(m => m.TypeaheadsModule) },
  { path: 'input-text', loadChildren: () => import('./input-text/input-text.module').then(m => m.InputTextModule) },
  { path: 'modals', loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule) },
  { path: 'typography', loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule) },
	{ path: 'checkboxes', loadChildren: () => import('./checkboxes/checkboxes.module').then(m => m.CheckboxesModule) },
	{ path: 'radio', loadChildren: () => import('./radio/radio.module').then(m => m.RadioModule) },
	{ path: 'switch', loadChildren: () => import('./switch/switch.module').then(m => m.SwitchModule) },
	{ path: 'iconography', loadChildren: () => import('./iconography/iconography.module').then(m => m.IconographyModule) },
	{ path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule) },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: []
})
export class DemoUIRoutingModule {}
