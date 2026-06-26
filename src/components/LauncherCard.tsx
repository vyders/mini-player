import { FC } from "react";
import { ButtonItem, PanelSectionRow } from "@decky/ui";
import { Launcher } from "../types/launcher";

interface Props {
    launcher: Launcher;
}

export const LauncherCard: FC<Props> = ({ launcher }) => {
    return (
        <PanelSectionRow>
            <ButtonItem
                layout="below"
                onClick={() => {
                    console.log("Open:", launcher.url);
                }}
            >
                {launcher.title}
            </ButtonItem>
        </PanelSectionRow>
    );
};
