import { useState } from "react";

export const useControlledInput = (state) => {
    const [data, setData] = useState(state);

    const handleInputValueChange = (e) => {
        const { name, value } = e.target;
        const newData = {...data, [name]: value};
        setData(newData);
    };

    const handleInputCheckedChange = (e) => {
        const { name, checked } = e.target;
        const newData = {...data, [name]: checked};
        setData(newData);
    };

    return [
        data,
        handleInputValueChange,
        handleInputCheckedChange
    ];
}