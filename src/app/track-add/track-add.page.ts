// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// ionic components
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from "@ionic/angular/standalone";

// functions
import { TranslocoService } from "@jsverse/transloco";

@Component({
    selector: "app-track-add",
    templateUrl: "./track-add.page.html",
    styleUrls: ["./track-add.page.scss"],
    standalone: true,
    imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class TrackAddPage implements OnInit {
    // translation objects
    genericLang: any;
    trackAddLang: any;

    constructor(private transloco: TranslocoService) {}

    ngOnInit() {
        // get generic translations
        this.transloco.selectTranslateObject("generic").subscribe((t) => {
            this.genericLang = t;
        });

        // get trackAdd translations
        this.transloco.selectTranslateObject("trackAdd").subscribe((t) => {
            this.trackAddLang = t;
        });
    }
}
