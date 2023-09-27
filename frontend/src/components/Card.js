import React from 'react';
import { useCard } from '../hooks/useCard';
import { useSpeech } from '../hooks/useSpeech';
import { StyledCard } from './styles/StyledCard';
import img from "../images/testImage.jpg"

// Props will be altered
function Card({ cardData }) {
    const { imageURL, nativeLanguageText, targetLanguageText } = cardData;
    const [ speak ] = useSpeech();
    const [ isFlipped, flipCard ] = useCard();

    return (
        <StyledCard>
            <div onClick={flipCard}>
            {imageURL ? <img src={imageURL} /> : null}
            {
            isFlipped ?
             <p>{targetLanguageText}</p> : 
             <p>{nativeLanguageText}</p>
             }
             </div>
             <button onClick={() => speak(isFlipped ? targetLanguageText : nativeLanguageText)}>{"Speak"}</button>
        </StyledCard>
    );
}

export default Card;