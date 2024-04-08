// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";

// functions
import { TranslocoService } from "@jsverse/transloco";

@Component({
    selector: "app-track-add",
    templateUrl: "./track-add.page.html",
    styleUrls: ["./track-add.page.scss"],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class TrackAddPage implements OnInit {
    // translation objects
    trackAddLang: any;

    constructor(private transloco: TranslocoService) {}

    ngOnInit() {
        // get trackAdd translations
        this.transloco.selectTranslateObject("trackAdd").subscribe((t) => {
            this.trackAddLang = t;
        });
    }
}
