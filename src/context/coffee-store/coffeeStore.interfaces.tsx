import { IStore } from '@/src/interfaces';
import { Dispatch } from 'react';

export interface IinitialState {
  latLong: string;
  coffeeStores: IStore[];
}

export interface ICoffeeStoreContext {
  state: IinitialState;
  dispatch: Dispatch<any>;
}

export enum CoffeeStoreActions {
  SET_LAT_LONG = 'SET_LAT_LONG',
  SET_COFFEE_STORES = 'SET_COFFEE_STORES',
}

export interface CoffeeStoreAction {
  type: CoffeeStoreActions;
  payload: IinitialState;
}
