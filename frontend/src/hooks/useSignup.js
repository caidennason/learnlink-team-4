import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice';
import { updateSettings } from '../redux/settingsSlice';
import { useControlledInput } from './useControlledInput';


export const useSignup = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const [
        data,
        handleInputValueChange, 
        handleInputCheckedChange
    ] = useControlledInput({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        nativeLanguage: "",
        learningLanguage: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validatePasswords()) {
            setError("Passwords do not match.");
            return;
        }


        setIsLoading(true);
        try {
            axios.post("/signup", data)
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

    const validatePasswords = () => {
        return data.password === passwordConfirmation;
    }

    return [
        isLoading,
        error,
        data,
        passwordConfirmation,
        setPasswordConfirmation,
        handleInputValueChange,
        handleInputCheckedChange,
        handleSubmit
    ];
}