import { FC } from "react";
import { PanelSection } from "@decky/ui";
import { Launcher } from "../types/launcher";
import { LauncherCard } from "./LauncherCard";

interface Props {
    launchers: Launcher[];
}

export const LauncherList: FC<Props> = ({ launchers }) => {
    return (
        <PanelSection title="Mini Launcher">
            {launchers.map((launcher) => (
                <LauncherCard
                    key={launcher.id}
                    launcher={launcher}
                />
            ))}
        </PanelSection>
    );
};
