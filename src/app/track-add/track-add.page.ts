// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";

// ionic components
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonListHeader,
    IonLabel,
    IonList,
    IonItem,
    IonInput,
    IonFab,
    IonFabButton,
    IonIcon,
    IonSelect,
    IonSelectOption,
} from "@ionic/angular/standalone";

// functions
import { TranslocoService } from "@jsverse/transloco";

// icons
import { addIcons } from "ionicons";
import { add } from "ionicons/icons";

@Component({
    selector: "app-track-add",
    templateUrl: "./track-add.page.html",
    styleUrls: ["./track-add.page.scss"],
    standalone: true,
    imports: [
        IonIcon,
        IonFabButton,
        IonFab,
        IonInput,
        IonItem,
        IonList,
        IonLabel,
        IonListHeader,
        IonBackButton,
        IonButtons,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonSelect,
        IonSelectOption,
        ReactiveFormsModule,
        CommonModule,
    ],
})
export class TrackAddPage implements OnInit {
    // generalForm
    artist: string = "";
    name: string = "";
    difficulty: number = 0;
    volatility: number = 0;

    // forms
    generalForm: FormGroup;

    // translation objects
    genericLang: any;
    trackAddLang: any;

    constructor(private transloco: TranslocoService) {
        addIcons({ add });

        this.generalForm = new FormGroup({
            artist: new FormControl("", Validators.required),
            name: new FormControl("", Validators.required),
            difficulty: new FormControl("", Validators.required),
            volatility: new FormControl("", Validators.required),
        });
    }

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

    selectDifficulty(event: any) {
        this.difficulty = event.detail.value;
    }

    selectVolatility(event: any) {
        this.volatility = event.detail.value;
    }
}
