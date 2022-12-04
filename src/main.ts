import * as fs from 'fs';
import * as core from '@actions/core'
import {ChromeWebStore} from "./chrome_webstore.js";
import {getWebStoreInputs, ChromeInputs, FirefoxInputs} from "./get_inputs.js";

/**
 * Runs the Chrome store logic
 * @param inp Chrome Store inputs
 */
async function runChrome(inp: ChromeInputs): Promise<void> {
    try {
        core.info(`Uploading extension ${inp.extensionId}...`)

        const store = new ChromeWebStore(
            inp.extensionId,
            inp.clientId,
            inp.refreshToken,
            inp.clientSecret,
        );
        const chrome_res = await store.uploadExistingFile(inp.file)
        core.info(JSON.stringify(chrome_res))
        if (inp.publish) {
            const publish_res = await store.publish()
            core.info(JSON.stringify(publish_res))
        }
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message)
    }
}

/**
 * Runs the Firefox store logic
 * @param inp
 */
async function runFirefox(inp: FirefoxInputs): Promise<void> {

}

/**
 * Run all
 */
async function run(): Promise<void> {
    core.info("Running webstore upload workflow.")
    const inputs = getWebStoreInputs()
    if (inputs.chrome) {
        await runChrome(inputs.chrome)
    } else {
        core.info("No Chrome extension ID specified, skipping Chrome...")
    }
    if (inputs.firefox) {
        await runFirefox(inputs.firefox)
    } else {
        core.info("No Firefox extension ID specified, skipping Firefox...")
    }
}

run().then()
