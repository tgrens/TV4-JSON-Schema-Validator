import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['35909ab9c3d63210ccf9f1d4e40131ea'],
    name: 'ErrorResponseGenerator',
    script: Now.include('./sys_script_include_35909ab9c3d63210ccf9f1d4e40131ea.js'),
    apiName: 'x_984628_tv4_json.ErrorResponseGenerator',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
    accessibleFrom: 'public',
})
