import { ReactNode, createContext, useReducer } from 'react';
import {
  CoffeeStoreAction,
  CoffeeStoreActions,
  ICoffeeStoreContext,
  IinitialState,
} from './coffeeStore.interfaces';

const initialState: IinitialState = {
  latLong: '',
  coffeeStores: [],
};

const coffeeStoreReducer = (
  state: IinitialState,
  action: CoffeeStoreAction
) => {
  const { type, payload } = action;

  switch (type) {
    case CoffeeStoreActions.SET_LAT_LONG: {
      return {
        ...state,
        latLong: payload.latLong,
      };
    }
    case CoffeeStoreActions.SET_COFFEE_STORES: {
      return {
        ...state,
        coffeeStores: payload.coffeeStores,
      };
    }
    default:
      return state;
  }
};

export const CoffeeStoreContext = createContext<ICoffeeStoreContext>({
  state: initialState,
  dispatch: () => null,
});

const CoffeeStoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(coffeeStoreReducer, initialState);

  return (
    <CoffeeStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </CoffeeStoreContext.Provider>
  );
};

export default CoffeeStoreProvider;
