const {
    TV4Validator
} = require('x_984628_platform/x-984628-platform-app/1.0.0/src/server/TV4Validator.js');


class SchemaValidatorFactory {

    static getTV4Validator() {
        return TV4Validator();
    }

}