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
        const action = getActionYml(
            testFetcher,
            "https://github.com/actions/checkout/blob/v3.4.0/action.yml"
        );

        expect(action?.description).toMatchInlineSnapshot('"Checkout a Git repository at a particular version"');
        expect(action?.name).toMatchInlineSnapshot('"Checkout"');
        expect(action?.runs).toMatchInlineSnapshot(`
          {
            "main": "dist/index.js",
            "post": "dist/index.js",
            "using": "node16",
          }
        `);
        expect(action?.inputs).toMatchSnapshot();
    })
});