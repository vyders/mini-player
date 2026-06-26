import { useEffect, useState } from "react";
import { Launcher } from "../types/launcher";
import { getLaunchers } from "../services/backend";

export function useLaunchers() {
    const [launchers, setLaunchers] = useState<Launcher[]>([]);

    useEffect(() => {
        getLaunchers().then(setLaunchers);
    }, []);

    return {
        launchers,
        setLaunchers,
    };
}
