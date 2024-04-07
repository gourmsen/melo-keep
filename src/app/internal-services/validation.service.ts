// basic service
import { Injectable } from "@angular/core";

// functions
import Ajv, { ValidateFunction } from "ajv";

// schemas
import trackSchema from "../../assets/schemas/track.schema.json";

@Injectable({
    providedIn: "root",
})
export class ValidationService {
    private ajv: Ajv;
    private validators: { [key: string]: ValidateFunction } = {};

    constructor() {
        // instantiate Ajv
        this.ajv = new Ajv();

        // compile schemas
        this.validators["trackSchema"] = this.ajv.compile(trackSchema);
    }

    validate(schemaKey: string, data: any): boolean {
        let validator: ValidateFunction = this.validators[schemaKey];

        // check for validator
        if (!validator) {
            console.error("Validator for schema '" + schemaKey + "' not found.");
            return false;
        }

        // check, whether data is valid
        let isValid: boolean = validator(data);

        if (!isValid) {
            console.error(validator.errors);
        }

        return isValid;
    }
}
