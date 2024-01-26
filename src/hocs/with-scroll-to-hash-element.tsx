import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

function withScrollToHashElement<P extends object>(WrappedComponent: React.ComponentType<P>) {
    const ComponentWithScrollToHashElement = (props: P) => {
        const location = useLocation();

        const hashElement = useMemo(() => {
            const hash = location.hash;
            const removeHashCharacter = (str: string) => {
                const result = str.slice(1);
                return result;
            };

            if (hash) {
                const element = document.getElementById(removeHashCharacter(hash));
                return element;
            } else {
                return null;
            }
        }, [location]);

        useEffect(() => {
            if (hashElement) {
                hashElement.scrollIntoView({
                    behavior: "smooth",
                    inline: "nearest",
                });
            }
        }, [hashElement]);

        return <WrappedComponent {...props} />;
    }

    const displayName =
        WrappedComponent.displayName || WrappedComponent.name || 'Component';
    ComponentWithScrollToHashElement.displayName = `WithScrollToHashElement(${displayName})`;

    return ComponentWithScrollToHashElement;
}

export default withScrollToHashElement;