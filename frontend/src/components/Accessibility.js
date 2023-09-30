import React from 'react';
import { useSelector } from 'react-redux';
import { useAccessibilityControl } from '../hooks/useAccessibilityControl';
import { StyledAccessibilityOption } from './styles/StyledAccessibilityOption';

function Accessibility() {
    const settings = useSelector((state) => state.settings.value);
    const [handleInputValueChange, handleInputCheckedChange] = useAccessibilityControl();

    return (
        <div>
            <StyledAccessibilityOption>
                <div>Text Size</div>
                <div>
                    <input
                        type="range"
                        min="1"
                        max="5"
                        value={settings.fontSize}
                        name="fontSize"
                        onInput={handleInputValueChange}
                    />
                </div>
            </StyledAccessibilityOption>
            <StyledAccessibilityOption>
                <div>Word Spacing</div>
                <div>
                    <input
                        type="range"
                        min="1"
                        max="5"
                        value={settings.wordSpacing}
                        name="wordSpacing"
                        onInput={handleInputValueChange}
                    />
                </div>
            </StyledAccessibilityOption>
            <StyledAccessibilityOption>
                <div>Letter Spacing</div>
                <div>
                    <input
                        type="range"
                        min="1"
                        max="2"
                        value={settings.letterSpacing}
                        name="letterSpacing"
                        onInput={handleInputValueChange}
                    />
                </div>
            </StyledAccessibilityOption>
            <StyledAccessibilityOption>
                <div>Line Height</div>
                <div>
                    <input
                        type="range"
                        min="1"
                        max="2.5"
                        value={settings.lineHeight}
                        name="lineHeight"
                        onInput={handleInputValueChange}
                    />
                </div>
            </StyledAccessibilityOption>
            <StyledAccessibilityOption>
            <label name="isOpenDyslexic">Use Open Dyslexic?</label>
                <input 
                  type="checkbox"
                  value={settings.isOpenDyslexic}
                  name="isOpenDyslexic"
                  onChange={handleInputCheckedChange}
                />
            </StyledAccessibilityOption>
        </div>
    );
}

export default Accessibility;