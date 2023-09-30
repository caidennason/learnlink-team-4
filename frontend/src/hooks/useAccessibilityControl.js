import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from '../redux/settingsSlice';
import { useControlledInput } from './useControlledInput';

export const useAccessibilityControl = () => {
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settings.value);
    const [
        data,
        handleInputValueChange, 
        handleInputCheckedChange
    ] = useControlledInput(settings);

    // Automatically updates settings when user controls settings
    useEffect(() => {
        dispatch(updateSettings(data));
    }, [data])

    return [
        handleInputValueChange,
        handleInputCheckedChange
    ];
}