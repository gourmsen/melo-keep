import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
    selector: "app-repo",
    templateUrl: "./repo.page.html",
    styleUrls: ["./repo.page.scss"],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class RepoPage implements OnInit {
    constructor() {}

    ngOnInit() {}
}
