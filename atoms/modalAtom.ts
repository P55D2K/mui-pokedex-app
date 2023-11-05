import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const pokemonState = atom<any>({
  key: 'pokemonState',
  default: null,
})