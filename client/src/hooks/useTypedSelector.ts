import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../app/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;