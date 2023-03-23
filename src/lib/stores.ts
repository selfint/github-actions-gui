import { writable } from "svelte/store";

export const selectedStep = writable<[number, number]>(undefined)