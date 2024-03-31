// basic component
import { Component } from "@angular/core";
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";
import { Subscription } from "rxjs";

// services
import { PreferencesService } from "./internal-services/preferences.service";
import { TranslocoService } from "@jsverse/transloco";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
    languageSubscription: Subscription = new Subscription();

    constructor(private preferences: PreferencesService, private transloco: TranslocoService) {}

    ngOnInit() {
        // set language
        this.preferences
            .getLanguage()
            .then((result) => {
                this.languageSubscription = this.preferences.languageSubject.subscribe((language) => {
                    this.transloco.setActiveLang(language);
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ngOnDestroy() {
        this.languageSubscription.unsubscribe();
    }
}
