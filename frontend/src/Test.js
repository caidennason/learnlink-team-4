import React, {useState, useEffect} from 'react';

function Test(){

    const API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY

    const API_BODY = {
        "model": "gpt-4",
        "messages": ["Translate 10 simple English words into Spanish"],
        "temperature": 0,
        "max_tokens": 256
      }

    async function callOpenAIApi() {
        console.log('calling api')
        await fetch("https://api.openai.com/v1/chat/completions" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + API_KEY
            }, 
            body: JSON.stringify(API_BODY)
        }).then((data) => {
            return data.json()
        }).then((data) => {
            console.log(data)
        })
    }

    return(
        <>
        {callOpenAIApi()}
        </>
    )
}

export default Test