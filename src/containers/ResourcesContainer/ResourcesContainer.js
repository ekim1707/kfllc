import React, { useReducer } from 'react';
import Resources from "../../components/Resources";

const ResourcesContainer = () => {
    const [isSelected, setIsSelected] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            literature: true,
            video: false,
            other: false
        }
    );

    return <Resources isSelected={isSelected} setIsSelected={setIsSelected} />;
};

export default ResourcesContainer;