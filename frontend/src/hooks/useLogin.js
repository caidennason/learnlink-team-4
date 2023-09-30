import { useState } from "react";
import { useDispatch } from "react-redux";
import { useControlledInput } from "./useControlledInput";

export const useLogin = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [
        data,
        handleInputValueChange, 
        handleInputCheckedChange
    ] = useControlledInput({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);
        try {
            axios.post("/login", data)
            .then(resp => {
                dispatch(updateUser(resp.data.user));
                dispatch(updateSettings(resp.data.user.settings));
            });
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return [
        isLoading,
        error,
        data,
        handleInputValueChange,
        handleInputCheckedChange,
        handleSubmit
    ];
}