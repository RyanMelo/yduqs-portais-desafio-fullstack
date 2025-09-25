import { MaskitoOptions } from '@maskito/core';
import { maskitoDateOptionsGenerator } from '@maskito/kit';

export const cpfMask: MaskitoOptions = {
  mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
};

export const phoneMask: MaskitoOptions = {
  mask: ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
};

export const dateMask = maskitoDateOptionsGenerator({
  mode: 'dd/mm/yyyy',
  separator: '/',
});

export const yearMask: MaskitoOptions = {
  mask: [/\d/,/\d/,/\d/,/\d/],
}
