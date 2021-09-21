import { NameSpace } from '../../const';

export const getGuitars = (state) => state[NameSpace.DATA].guitars;
export const getCartGuitars = (state) => state[NameSpace.DATA].cartGuitars;
export const getIsLoading = (state) => state[NameSpace.DATA].isLoading;
