class ErrorResponseGenerator {

    createErrorResponse(result) {
        let reponseBody = {
            message: 'Invalid payload',
            errors: []
        };

        let errors = result.errors;

        for (const key in errors) {
            let error = {
                message: '',
                code: '',
                dataPath: ''
            };

            error.message = errors[key].message;
            error.code = errors[key].code;
            error.dataPath = errors[key].dataPath;

            reponseBody.errors.push(error);
        }

        return reponseBody;
    }

}