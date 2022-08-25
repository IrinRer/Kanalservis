export const CREAM_COLOR = '#E4B062';
export const CREAM_COLOR_LIGHT = '#F6CC8C';
export const BLUE_WATER = '#27569c';

export const MOBILE_SIZE = 350;

export enum SIZE {
  'mobileS' = '320px',
  'mobileM' = '375px',
  'mobileL' = '425px',
  'tablet' = '768px',
  'laptop' = '1024px',
  'laptopL' = '1440px',
}

export const device = {
  mobileS: `(min-width: ${SIZE.mobileS})`,
  mobileM: `(min-width: ${SIZE.mobileM})`,
  mobileL: `(min-width: ${SIZE.mobileL})`,
  tablet: `(min-width: ${SIZE.tablet})`,
  laptop: `(min-width: ${SIZE.laptop})`,
  laptopL: `(min-width: ${SIZE.laptopL})`,
};
