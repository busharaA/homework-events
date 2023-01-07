import React from "react";

export default function Korinsik({ name, handleChange }) {
    return (
        <form>
            <label>
                Ime:
                <input type="text" value={name} onChange={handleChange} />
            </label>
        </form>
    )
}