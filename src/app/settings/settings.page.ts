// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText } from "@ionic/angular/standalone";

// functions
import * as packageJSON from "../../../package.json";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.page.html",
    styleUrls: ["./settings.page.scss"],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonText, CommonModule, FormsModule],
})
export class SettingsPage implements OnInit {
    version: string = packageJSON.version;

    constructor() {}

    ngOnInit() {}
}
