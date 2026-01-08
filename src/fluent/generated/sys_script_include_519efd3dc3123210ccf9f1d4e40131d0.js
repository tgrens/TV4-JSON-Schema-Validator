const {
    TV4Validator
} = require('x_984628_tv4_json/x-984628-tv-4-json-schema-validator/1.0.0/src/server/TV4Validator.js');


class SchemaValidatorFactory {

    static getTV4Validator() {
        return TV4Validator();
    }

}