import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '519efd3dc3123210ccf9f1d4e40131d0': {
                        table: 'sys_script_include'
                        id: '519efd3dc3123210ccf9f1d4e40131d0'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '4d4ba7c46e2d4875be86fbba3501ad48'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '9ab6cc93a0d74ad7b63dfc2ab3f2cae0'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '44d716a7c64f4c20a0b8fc9c96bbc671'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'f25542ba74b8471090aa34eef7c7a565'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '7d844478593f40a8996dd4ecca10756e'
                    }
                    src_server_TV4Validator_js: {
                        table: 'sys_module'
                        id: 'd52eea81b9554a53a532da91ef760bf9'
                    }
                    'tv4@1.3.0/index.js': {
                        table: 'sys_module'
                        id: '6e045d8dcffa4b75ae22cf97bab78db6'
                    }
                    'tv4@1.3.0/package.json': {
                        table: 'sys_module'
                        id: '65984aba7cec43ea81d3d07d48f2c776'
                    }
                }
            }
        }
    }
}
