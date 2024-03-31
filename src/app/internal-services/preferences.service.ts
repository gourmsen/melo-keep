// basic service
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// functions
import { Preferences } from "@capacitor/preferences";

@Injectable({
    providedIn: "root",
})
export class PreferencesService {
    name: string = "";

    // observables
    public nameSubject = new BehaviorSubject("");

    constructor() {}

    async setName(name: string) {
        if (name) {
            await Preferences.set({
                key: "name",
                value: name,
            });
            this.nameSubject.next(name);
        } else {
            await Preferences.remove({ key: "name" });
            this.nameSubject.next("");
        }
    }

    async getName() {
        let name = await Preferences.get({ key: "name" });

        if (name.value) {
            this.nameSubject.next(name.value);
        } else {
            this.nameSubject.next("");
        }

        return name;
    }
}
