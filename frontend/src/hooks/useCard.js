import { useEffect, useState } from "react";

export const useCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    // This will be removed once Redux is implemented
    const [isNativeLanguageVisible, setIsNativeLanguageVisible] = useState(true);

    const flipCard = () => {
        setIsFlipped(prev => !prev);
    };

    // This will be moved 
    // const speak = (phrase) => {
    //     let speech = new SpeechSynthesisUtterance(phrase);
    //     speech.voice = window.speechSynthesis.getVoices()[0];

    //     window.speechSynthesis.speak(speech);
    //     console.log("Speaking")
    // }

    return [
        isFlipped,
        flipCard,
        // speak
    ];
}