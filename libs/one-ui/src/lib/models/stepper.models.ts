export enum StepperType {
	Default = '',
	Horizontal = 'horizontal'
}
export enum StepperStepState {
	Default = '',
	NextStep = 'next-step',
	Complete = 'complete',
}

export interface StepperStep {
	id: string,
	pill?: number | string,
	icon?: string,
	title: string,
	desc: string,
	state: StepperStepState,
	valid: boolean,
	active: boolean
}

export interface Stepper {
	id: string,
	type: StepperStep;
}
