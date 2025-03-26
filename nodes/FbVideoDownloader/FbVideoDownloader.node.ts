import {
    IDataObject,
    IExecuteFunctions,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
    // IRequestOptions,
    // IDataObject,
    NodeConnectionType,
    // IHttpRequestOptions
} from 'n8n-workflow';

import getFBInfo, { VideoInfo } from "@xaviabot/fb-downloader"

export class FbVideoDownloader implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'FbVideoDownloader',
        name: 'fbVideoDownloader',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Download Facebook video and reel using @xaviabot/fb-downloader package',
        defaults: {
            name: 'fbVideoDownloader',
        },
        inputs: [NodeConnectionType.Main], // eslint-disable-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
        outputs: [NodeConnectionType.Main], // eslint-disable-line n8n-nodes-base/node-class-description-outputs-wrong
        credentials: [

        ],

        properties: [
            {
                displayName: 'URL',
                name: 'url',
                type: 'string',
                placeholder: 'https://www.facebook.com/reel/...',
                default: 'https://www.facebook.com/reel/1728958571008614',
                required: true,
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        let responseData: IDataObject = {}

        const url = this.getNodeParameter('url', 0) as string;

        try {

            const result: VideoInfo = await getFBInfo(url);

            responseData = { ...result, media: result.hd || result.sd } as unknown as IDataObject


        } catch (error) {
            // This node should never fail but we want to showcase how
            // to handle errors.
            if (this.continueOnFail()) {
                // handle continue on fail, maybe we return an empty array?
            } else {
                // Adding `itemIndex` allows other workflows to handle this error
                /*
                if (error.context) {
                    // If the error thrown already contains the context property,
                    // only append the itemIndex
                    error.context.itemIndex = itemIndex;
                    throw error;
                }
                throw new NodeOperationError(this.getNode(), error, {
                    itemIndex,
                });
                */
                throw error
            }
        }



        // Map data to n8n data
        // return [this.helpers.returnJsonArray(responseData)];
        return [[{ json: responseData }]];
    }
}