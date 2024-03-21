// basic component
import { Component, OnInit, EnvironmentInjector } from "@angular/core";

// tabs
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/angular/standalone";

// icons
import { addIcons } from "ionicons";
import { home, book, planet, cog } from "ionicons/icons";

@Component({
    selector: "app-tabs",
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.scss"],
    standalone: true,
    imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsComponent implements OnInit {
    constructor(private environmentInjector: EnvironmentInjector) {
        addIcons({ home, book, planet, cog });
    }

    ngOnInit() {}
}
