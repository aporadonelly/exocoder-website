import { useReducer, useMemo, useCallback } from 'react';

import { RootLayoutState, RootLayoutActions, RootLayoutContext } from '@/layouts/root/components/context';

interface RootLayoutProviderProps {
    children: React.ReactNode;
}

const initialState: RootLayoutState = {
    isMenuOpen: false,
};

function reducer(state: RootLayoutState, action: ReducerAction<RootLayoutActions>): RootLayoutState {
    switch (action.type) {
        case 'toggleMenu':
            return {
                ...state,
                isMenuOpen: action.payload,
            };

        default:
            return state;
    }
}

function RootLayoutProvider(props: RootLayoutProviderProps) {
    const { children } = props;

    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleMenu = useCallback((isMenuOpen: boolean) => {
        dispatch({ type: 'toggleMenu', payload: isMenuOpen });
    }, []);

    const value = useMemo(
        () => ({
            ...state,
            toggleMenu,
        }),
        [state, toggleMenu]
    );

    return <RootLayoutContext.Provider value={value}>{children}</RootLayoutContext.Provider>;
}

export default RootLayoutProvider;