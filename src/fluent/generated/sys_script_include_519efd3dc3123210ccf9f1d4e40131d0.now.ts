import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['519efd3dc3123210ccf9f1d4e40131d0'],
    name: 'SchemaValidatorFactory',
    script: Now.include('./sys_script_include_519efd3dc3123210ccf9f1d4e40131d0.js'),
    apiName: 'x_984628_tv4_json.SchemaValidatorFactory',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true,
    protectionPolicy: 'read',
    description: `Tiny Validator (for v4 JSON Schema)&#13;
&#13;
https://www.npmjs.com/package/tv4?activeTab=readme`,
})
