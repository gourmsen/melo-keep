// basic component
import { Component } from "@angular/core";
import { Subscription } from "rxjs";

// ionic components
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";

// services
import { PreferencesService } from "../internal-services/preferences.service";

// functions
import { TranslocoService } from "@jsverse/transloco";

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
    name: string = "";

    // translation objects
    homeLang: any;

    // subscriptions
    nameSubscription: Subscription = new Subscription();

    constructor(private transloco: TranslocoService, private preferences: PreferencesService) {}

    ngOnInit() {
        // get home translations
        this.transloco.selectTranslateObject("home").subscribe((t) => {
            this.homeLang = t;
        });

        // get name
        this.preferences
            .getName()
            .then((result) => {
                this.nameSubscription = this.preferences.nameSubject.subscribe((name) => {
                    this.name = name;
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ngOnDestroy() {
        this.nameSubscription.unsubscribe();
    }
}
