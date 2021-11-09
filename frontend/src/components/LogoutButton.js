import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function () {
    const { logout } = useAuth0();

    return (
        <button className="btn btn-danger m-4" onClick={() => logout()}>
            Log Out
        </button>
    )
}