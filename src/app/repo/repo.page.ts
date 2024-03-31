// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";

// functions
import { TranslocoService } from "@jsverse/transloco";

@Component({
    selector: "app-repo",
    templateUrl: "./repo.page.html",
    styleUrls: ["./repo.page.scss"],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class RepoPage implements OnInit {
    // translation objects
    repoLang: any;

    constructor(private transloco: TranslocoService) {}

    ngOnInit() {
        // get repo translations
        this.transloco.selectTranslateObject("repo").subscribe((t) => {
            this.repoLang = t;
        });
    }
}
