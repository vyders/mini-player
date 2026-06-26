import { FC } from "react";
import { PanelSection, PanelSectionRow } from "@decky/ui";

export const EmptyState: FC = () => {
    return (
        <PanelSection title="Mini Launcher">
            <PanelSectionRow>
                <div>No launchers yet.</div>
            </PanelSectionRow>

            <PanelSectionRow>
                <div>Add your first launcher to get started.</div>
            </PanelSectionRow>
        </PanelSection>
    );
};
