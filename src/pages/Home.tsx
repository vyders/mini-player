import { FC } from "react";
import { EmptyState } from "../components/EmptyState";
import { LauncherList } from "../components/LauncherList";
import { useLaunchers } from "../hooks/useLaunchers";

export const Home: FC = () => {
    const { launchers } = useLaunchers();

    if (launchers.length === 0) {
        return <EmptyState />;
    }

    return <LauncherList launchers={launchers} />;
};
