// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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

// functions
import * as packageJSON from "../../../package.json";
import { Preferences } from "@capacitor/preferences";

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

    constructor(private alertController: AlertController) {}

    ngOnInit() {
        // get name
        this.getName()
            .then((result) => {
                this.name = result.value ? result.value : "";
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async setName(name: string) {
        await Preferences.set({
            key: "name",
            value: name,
        });
    }

    async getName() {
        let name = await Preferences.get({ key: "name" });

        return name;
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
                        this.setName(data.name);
                        this.name = data.name;
                    },
                },
            ],
        });

        alert.present();
    }
}
