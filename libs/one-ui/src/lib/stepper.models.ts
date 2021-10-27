export enum StepperType {
	Default = 'default',
	Horizontal = 'horizontal'
}
export enum StepperStepState {
	Default = '',
	NextStep = 'next-step',
	Complete = 'complete',
}

export interface StepperStep {
	id: string,
	number?: number,
	icon?: string,
	title: string,
	desc: string,
	state: StepperStepState,
	isValid: boolean,
	active: boolean
}

export interface Stepper {
	id: string,
	type: StepperStep;
}
