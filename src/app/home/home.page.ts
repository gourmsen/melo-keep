// basic component
import { Component } from "@angular/core";

// ionic components
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";

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
    welcomeText: string = "";

    constructor(private transloco: TranslocoService) {}

    ngOnInit() {
        // get welcome text
        this.transloco.selectTranslate("home.welcome").subscribe((t) => {
            this.welcomeText = t;
        });
    }
}
