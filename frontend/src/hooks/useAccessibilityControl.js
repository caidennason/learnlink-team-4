import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from '../redux/settingsSlice';

export const useAccessibilityControl = () => {
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settings.value);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newSettings = {...settings, [name]: value};
        dispatch(updateSettings(newSettings));
    }

    const handleInputCheckedChange = (e) => {
        const { name, checked } = e.target;
        const newSettings = {...settings, [name]: checked};
        dispatch(updateSettings(newSettings));
    }

    return [
        handleChange,
        handleInputCheckedChange
    ]
}