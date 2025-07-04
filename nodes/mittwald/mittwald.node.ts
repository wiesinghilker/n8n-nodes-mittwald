import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { N8NPropertiesBuilder, N8NPropertiesBuilderConfig } from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {};
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build();

export class mittwald implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'mittwald',
        name: 'mittwald',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with mittwald mStudio API',
        defaults: {
            name: 'mittwald',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'mittwaldApi',
                required: true,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: 'https://api.mittwald.de',
        },
        properties: properties,
    };
}