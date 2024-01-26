import { createContext } from 'react';

export interface RootLayoutState {
  isMenuOpen: boolean;
}

export interface RootLayoutActions {
  toggleMenu: (isMenuOpen: boolean) => void;
}

export type RootLayoutContextType = RootLayoutState & RootLayoutActions;

export const RootLayoutContext = createContext<RootLayoutContextType | null>(null);