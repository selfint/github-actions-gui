import { writable } from "svelte/store";

export const selectedStep = writable<number>(undefined)
export const selectedJob = writable<number>(undefined)