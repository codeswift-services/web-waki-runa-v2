import { create } from 'zustand'

const REGISTER_MODE_ENUM = {
	LOOKING_PERSONNEL: 'LOOKING_PERSONNEL',
	WANT_TO_WORK: 'WANT_TO_WORK',

	isLookingPersonnel: value => {
		return value == REGISTER_MODE_ENUM.LOOKING_PERSONNEL
	},

	isWantToWork: value => {
		console.log(value)
		return value == REGISTER_MODE_ENUM.WANT_TO_WORK
	}
}

const REGISTER_STEPS_ENUM = {
	STEP_ONE: 1,
	STEP_TWO: 2,

	isStepOne: value => {
		return value === LOGIN_STEPS_ENUM.STEP_ONE
	},

	isStepTwo: value => {
		return value === LOGIN_STEPS_ENUM.STEP_TWO
	}
}

const LOGIN_STEPS_ENUM = {
	STEP_ONE: 1,

	isStepOne: value => {
		return value === LOGIN_STEPS_ENUM.STEP_ONE
	}
}

const initialState = {
	loginState: false,
	loginStep: null,

	registerState: false,
	registerMode: null,
	registerStep: null
}

const setState = create()(set => ({
	...initialState,
	setLoginState: value => set({ loginState: value }),
	setLoginStep: value => set({ loginStep: value }),

	setRegisterState: value => set({ registerState: value }),
	setRegisterMode: value => set({ registerMode: value }),
	setRegisterStep: value => set({ registerStep: value })
}))

export default {
	setState,
	initialState,
	REGISTER_MODE_ENUM,
	REGISTER_STEPS_ENUM,
	LOGIN_STEPS_ENUM
}
