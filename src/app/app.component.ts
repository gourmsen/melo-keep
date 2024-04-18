// basic component
import { Component } from "@angular/core";
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";
import { Subscription } from "rxjs";

// services
import { PreferencesService } from "./internal-services/preferences.service";
import { TranslocoService } from "@jsverse/transloco";

// functions
import { nanoid } from "nanoid";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
    userId: string = "";

    // subscriptions
    userIdSubscription: Subscription = new Subscription();
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

        // set userId (when none exists)
        this.preferences
            .getUserId()
            .then((result) => {
                this.userIdSubscription = this.preferences.userIdSubject.subscribe((userId) => {
                    this.userId = userId;
                });

                if (!this.userId) {
                    this.preferences.setUserId(nanoid(10));
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ngOnDestroy() {
        this.userIdSubscription.unsubscribe();
        this.languageSubscription.unsubscribe();
    }
}
