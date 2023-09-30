import React from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
    const [
        isLoading,
        error,
        data,
        handleInputValueChange,
        handleInputCheckedChange,
        handleSubmit
    ] = useLogin();

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
                </form>
            </div>
        </>
    );
}