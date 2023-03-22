import YAML from "yaml";
import type { Fetcher } from "./fetcher";

export type ActionYml = {
    name: string
};

export function getActionYml(fetcher: Fetcher, action: string): ActionYml | undefined {
    const content = fetcher.fetch(action);

    if (content !== undefined) {
        try {
            return YAML.parse(content);
        } catch (error) {
            console.error(error);
        }
    }
}