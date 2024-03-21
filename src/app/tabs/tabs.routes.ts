import { Routes } from "@angular/router";
import { TabsComponent } from "./tabs.component";

export const routes: Routes = [
    {
        path: "tabs",
        component: TabsComponent,
        children: [
            {
                path: "home",
                loadComponent: () => import("../home/home.page").then((m) => m.HomePage),
            },
            {
                path: "repo",
                loadComponent: () => import("../repo/repo.page").then((m) => m.RepoPage),
            },
            {
                path: "hub",
                loadComponent: () => import("../hub/hub.page").then((m) => m.HubPage),
            },
            {
                path: "settings",
                loadComponent: () => import("../settings/settings.page").then((m) => m.SettingsPage),
            },
            {
                path: "",
                redirectTo: "/tabs/home",
                pathMatch: "full",
            },
        ],
    },
    {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
    },
];
