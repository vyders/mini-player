import { definePlugin } from "@decky/api";
import { staticClasses } from "@decky/ui";
import { FaRocket } from "react-icons/fa";

import { App } from "./App";

export default definePlugin(() => {
    console.log("Mini Launcher initialized");

    return {
        name: "Mini Launcher",

        titleView: (
            <div className={staticClasses.Title}>
                Mini Launcher
            </div>
        ),

        content: <App />,

        icon: <FaRocket />,

        onDismount() {
            console.log("Mini Launcher unloaded");
        },
    };
});
