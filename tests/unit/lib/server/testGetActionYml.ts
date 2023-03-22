import type { Fetcher } from "$lib/server/fetcher";
import { getActionYml } from "$lib/server/getActionYml";
import { describe, expect, it } from 'vitest'
import * as fs from "fs";
import * as path from "path";

const testFetcher: Fetcher = {
    fetch: (url: string) => {
        if (url === "https://github.com/actions/checkout/blob/v3.4.0/action.yml") {
            const ymlPath = path.join(__dirname, "actionsCheckoutAction.yml")
            return fs.readFileSync(ymlPath).toString();
        }
    }
}

describe('test get action yml', () => {
    it('works', () => {
        expect(getActionYml(testFetcher, "https://github.com/actions/checkout/blob/v3.4.0/action.yml")).toMatchSnapshot();
    })
});