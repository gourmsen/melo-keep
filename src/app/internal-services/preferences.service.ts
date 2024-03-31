// basic service
import { Injectable } from "@angular/core";

// functions
import { Preferences } from "@capacitor/preferences";

@Injectable({
    providedIn: "root",
})
export class PreferencesService {
    name: string = "";

    constructor() {}

    async setName(name: string) {
        await Preferences.set({
            key: "name",
            value: name,
        });
    }

    async getName() {
        let name = await Preferences.get({ key: "name" });

        return name;
    }
}
