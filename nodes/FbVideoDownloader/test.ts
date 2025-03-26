import { IExecuteFunctions } from "n8n-workflow";
import { FbVideoDownloader } from "./FbVideoDownloader.node";




; (async function () {
    console.log("Running")

    // Mock `this` context
    const fakeThis = {
        getInputData: () => [{ json: { key: "value" } }],
        getNodeParameter: (paramName: string, index?: number) => {
            const mockParams: { [key: string]: string | number } = {
                url: "https://www.facebook.com/reel/1728958571008614"
            };
            return mockParams[paramName] || null; // Return the mock parameter
        },
    };

    const node = new FbVideoDownloader()

    const response = await node.execute.call(fakeThis as unknown as IExecuteFunctions)

    console.log(response[0][0].json)
})()