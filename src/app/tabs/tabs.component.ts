// basic component
import { Component, OnInit, EnvironmentInjector } from "@angular/core";

// tabs
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/angular/standalone";

// icons
import { addIcons } from "ionicons";
import { home, book, layers, cog } from "ionicons/icons";

// functions
import { TranslocoService } from "@jsverse/transloco";

@Component({
    selector: "app-tabs",
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.scss"],
    standalone: true,
    imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsComponent implements OnInit {
    // translation objects
    homeLang: any;
    repoLang: any;
    exploreLang: any;
    settingsLang: any;

    constructor(private environmentInjector: EnvironmentInjector, private transloco: TranslocoService) {
        addIcons({ home, book, layers, cog });
    }

    ngOnInit() {
        // get home translations
        this.transloco.selectTranslateObject("home").subscribe((t) => {
            this.homeLang = t;
        });

        // get repo translations
        this.transloco.selectTranslateObject("repo").subscribe((t) => {
            this.repoLang = t;
        });

        // get explore translations
        this.transloco.selectTranslateObject("explore").subscribe((t) => {
            this.exploreLang = t;
        });

        // get settings translations
        this.transloco.selectTranslateObject("settings").subscribe((t) => {
            this.settingsLang = t;
        });
    }
}
