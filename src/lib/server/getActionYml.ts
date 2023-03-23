import YAML from "yaml";
import type { Fetcher } from "./fetcher";
import type { ActionSchema } from "$lib/types/actionSchema";

export function getActionYml(fetcher: Fetcher, action: string): ActionSchema | undefined {
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