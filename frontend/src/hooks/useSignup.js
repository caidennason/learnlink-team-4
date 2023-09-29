import { useState } from 'react';

export const useSignup = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        dateOfBirth: "",
        nativeLanguage: "",
        targetLanguage: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
}