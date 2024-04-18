// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

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

// services
import { PreferencesService } from "../internal-services/preferences.service";

// functions
import { TranslocoService } from "@jsverse/transloco";
import { ValidationService } from "../internal-services/validation.service";
import { PouchDBService } from "../internal-services/pouchdb.service";

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
    userId: string = "";

    // generalForm
    artist: string = "";
    name: string = "";

    // retention form
    difficulty: number = 0;
    volatility: number = 0;

    // instrument form
    instrument: string = "";

    // forms
    generalForm: FormGroup;
    retentionForm: FormGroup;
    instrumentForm: FormGroup;

    // translation objects
    genericLang: any;
    trackAddLang: any;

    // subscriptions
    userIdSubscription: Subscription = new Subscription();

    constructor(
        private transloco: TranslocoService,
        private validation: ValidationService,
        private pouchDB: PouchDBService,
        private preferences: PreferencesService
    ) {
        addIcons({ add });

        this.generalForm = new FormGroup({
            artist: new FormControl("", Validators.required),
            name: new FormControl("", Validators.required),
        });

        this.retentionForm = new FormGroup({
            difficulty: new FormControl("", Validators.required),
            volatility: new FormControl("", Validators.required),
        });

        this.instrumentForm = new FormGroup({
            instrument: new FormControl("", Validators.required),
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

        // get userId
        this.preferences
            .getUserId()
            .then((result) => {
                this.userIdSubscription = this.preferences.userIdSubject.subscribe((userId) => {
                    this.userId = userId;
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    selectDifficulty(event: any) {
        this.difficulty = parseInt(event.detail.value);
    }

    selectVolatility(event: any) {
        this.volatility = parseInt(event.detail.value);
    }

    selectInstrument(event: any) {
        this.instrument = event.detail.value;
    }

    addTrack() {
        let trackId = this.pouchDB.getId();

        let trackDoc = {
            _id: trackId,
            ownerId: this.userId,
            artist: this.generalForm.get("artist")?.value,
            name: this.generalForm.get("name")?.value,
            difficulty: this.difficulty,
            volatility: this.volatility,
            instrument: this.instrument,
        };

        let isValid = this.validation.validate("trackSchema", trackDoc);

        if (isValid) {
            this.pouchDB.addDocument(trackDoc);
        }
    }
}
