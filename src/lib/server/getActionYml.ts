import YAML from "yaml";
import type { Fetcher } from "./fetcher";
import type { Action } from "$lib/types/action";

export function getActionYml(fetcher: Fetcher, action: string): Action | undefined {
    const content = fetcher.fetch(action);

    if (content !== undefined) {
        try {
            const actionYml = YAML.parse(content);
            return actionYml;
        } catch (error) {
            console.error(error);
        }
    }
}