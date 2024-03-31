// basic component
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";

// functions
import { TranslocoService } from "@jsverse/transloco";

@Component({
    selector: "app-explore",
    templateUrl: "./explore.page.html",
    styleUrls: ["./explore.page.scss"],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class ExplorePage implements OnInit {
    // translation objects
    exploreLang: any;

    constructor(private transloco: TranslocoService) {}

    ngOnInit() {
        // get explore translations
        this.transloco.selectTranslateObject("explore").subscribe((t) => {
            this.exploreLang = t;
        });
    }
}
