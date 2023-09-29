import { useEffect, useState } from "react";

// User preferences can be passed to this hook later on
export const useSpeech = () => {
    const [voiceIndex, setVoiceIndex] = useState(0);
    const [isListening, setIsListening] = useState(false);


    const convertTextToSpeech = (phrase, voice = voiceIndex) => {
        let speech = new SpeechSynthesisUtterance(phrase);
        speech.voice = window.speechSynthesis.getVoices()[voice];

        window.speechSynthesis.speak(speech);
    }

    const convertSpeechToText = () => {
        
    }

    return [
        // voiceIndex,
        // setVoiceIndex,
        convertTextToSpeech
    ];
}