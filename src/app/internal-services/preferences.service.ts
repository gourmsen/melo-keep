// basic service
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// functions
import { Preferences } from "@capacitor/preferences";

@Injectable({
    providedIn: "root",
})
export class PreferencesService {
    userId: string = "";
    name: string = "";
    language: string = "";

    // observables
    public userIdSubject = new BehaviorSubject("");
    public nameSubject = new BehaviorSubject("");
    public languageSubject = new BehaviorSubject("");

    constructor() {}

    async setUserId(userId: string) {
        if (userId) {
            await Preferences.set({
                key: "userId",
                value: userId,
            });
            this.userIdSubject.next(userId);
        } else {
            await Preferences.remove({ key: "userId" });
            this.userIdSubject.next("");
        }
    }

    async getUserId() {
        let userId = await Preferences.get({ key: "userId" });

        if (userId.value) {
            this.userIdSubject.next(userId.value);
        } else {
            this.userIdSubject.next("");
        }

        return userId;
    }

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

    async setLanguage(language: string) {
        if (language) {
            await Preferences.set({
                key: "language",
                value: language,
            });
            this.languageSubject.next(language);
        } else {
            await Preferences.remove({ key: "language" });
            this.languageSubject.next("");
        }
    }

    async getLanguage() {
        let language = await Preferences.get({ key: "language" });

        if (language.value) {
            this.languageSubject.next(language.value);
        } else {
            this.languageSubject.next("");
        }

        return language;
    }
}
