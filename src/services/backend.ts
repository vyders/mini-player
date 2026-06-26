import { Launcher } from "../types/launcher";

export async function getLaunchers(): Promise<Launcher[]> {
    return [];
}

export async function saveLaunchers(
    launchers: Launcher[],
): Promise<void> {}

export async function openLauncher(
    launcher: Launcher,
): Promise<void> {}
