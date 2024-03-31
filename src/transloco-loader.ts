// basic service
import { Injectable } from "@angular/core";

// transloco
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class TranslocoHttpLoader implements TranslocoLoader {
    constructor(private http: HttpClient) {}

    getTranslation(lang: string) {
        return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
    }
}
