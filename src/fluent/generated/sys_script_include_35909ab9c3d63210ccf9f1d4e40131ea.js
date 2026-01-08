class ErrorResponseGenerator {

    createErrorResponse(result) {
		let errors = result.errors;

        gs.debug(JSON.stringify(errors));

        for (const key in errors) {
            gs.debug(errors[key].message);
            gs.debug(errors[key].code);
            gs.debug(errors[key].dataPath);
        }
    }
}