import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class mittwaldApi implements ICredentialType {
    name = 'mittwaldApi';
    displayName = 'mittwald API';
    documentationUrl = 'https://developer.mittwald.de/docs/v2/api/intro/';
    properties: INodeProperties[] = [
        {
            displayName: 'API Token',
            name: 'apiToken',
            type: 'string',
            default: '',
            required: true,
            typeOptions: { password: true },
        },
    ];
    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'X-Access-Token': '={{$credentials.apiToken}}',
            },
        },
    };
    test: ICredentialTestRequest = {
        request: {
            baseURL: 'https://api.mittwald.de',
            url: '/v2/projects',
        },
    };
}