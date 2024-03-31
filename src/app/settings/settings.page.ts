// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Subscription } from "rxjs";

// components
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonText,
    IonListHeader,
    IonLabel,
    IonList,
    IonItem,
    IonNote,
} from "@ionic/angular/standalone";

// alerts
import { AlertController } from "@ionic/angular/standalone";

// services
import { PreferencesService } from "../internal-services/preferences.service";

// functions
import * as packageJSON from "../../../package.json";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.page.html",
    styleUrls: ["./settings.page.scss"],
    standalone: true,
    imports: [
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonText,
        IonListHeader,
        IonLabel,
        IonList,
        IonItem,
        IonNote,
        CommonModule,
        FormsModule,
    ],
})
export class SettingsPage implements OnInit {
    name: string = "";
    version: string = packageJSON.version;

    // subscriptions
    nameSubscription: Subscription = new Subscription();

    constructor(private alertController: AlertController, private preferences: PreferencesService) {}

    ngOnInit() {
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

    async showNameAlert() {
        let alert = await this.alertController.create({
            header: "Name",
            inputs: [
                {
                    name: "name",
                    type: "text",
                    placeholder: "Enter your name",
                    attributes: {
                        maxlength: 20,
                    },
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                },
                {
                    text: "Confirm",
                    role: "confirm",
                    handler: (data) => {
                        this.preferences.setName(data.name);
                    },
                },
            ],
        });

        alert.present();
    }

    ngOnDestroy() {
        this.nameSubscription.unsubscribe();
    }
}
