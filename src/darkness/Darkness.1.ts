// Usage examples:
// import { Darkness } from './Darkness';
// addDarkness(Darkness.MEDIUM);
// 


export const Darkness = {
  EASY: 100,
  EASY_TKT: 125,
  EASY_MEDIUM: 150,
  MEDIUM: 200,
  MEDIUM_HARD: 250,
  HARD: 300,
  HARD_EXTREME: 350,
  EXTREME: 400,
} as const;

export type DarknessLevel = (typeof Darkness)[keyof typeof Darkness];
