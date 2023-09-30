import React from "react";
import { useSignup } from "../hooks/useSignup";

function Signup() {
    const [
        isLoading,
        error,
        data,
        passwordConfirmation,
        setPasswordConfirmation,
        handleInputValueChange,
        handleInputCheckedChange,
        handleSubmit
    ] = useSignup();

    return (
        <>
        <div>
            {/* Enter image here */}
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <label name="username">Username: </label>
                <input 
                  type="text" 
                  name="username" 
                  value={data.username}
                  onChange={handleSubmit}
                />

                <label name="password">Password: </label>
                <input 
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleInputValueChange}
                />

                <label name="passwordConfirmation">Confirm Password</label>
                <input 
                  type="password"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={setPasswordConfirmation}
                />

                <input type="submit" />
            </form>
        </div>
        </>
    );
}

export default Signup;