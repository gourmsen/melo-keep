// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// ionic components
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from "@ionic/angular/standalone";

// functions
import { TranslocoService } from "@jsverse/transloco";
import { RouterLink } from "@angular/router";

// icons
import { addIcons } from "ionicons";
import { addCircle } from "ionicons/icons";

@Component({
    selector: "app-repo",
    templateUrl: "./repo.page.html",
    styleUrls: ["./repo.page.scss"],
    standalone: true,
    imports: [
        IonIcon,
        IonButton,
        IonButtons,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        RouterLink,
        CommonModule,
        FormsModule,
    ],
})
export class RepoPage implements OnInit {
    // translation objects
    repoLang: any;

    constructor(private transloco: TranslocoService) {
        addIcons({ addCircle });
    }

    ngOnInit() {
        // get repo translations
        this.transloco.selectTranslateObject("repo").subscribe((t) => {
            this.repoLang = t;
        });
    }
}
