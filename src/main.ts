import { enableProdMode, isDevMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouteReuseStrategy, provideRouter } from "@angular/router";
import { IonicRouteStrategy, provideIonicAngular } from "@ionic/angular/standalone";

import { routes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";
import { provideHttpClient } from "@angular/common/http";
import { TranslocoHttpLoader } from "./transloco-loader";
import { provideTransloco } from "@jsverse/transloco";

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular(),
        provideRouter(routes),
        provideHttpClient(),
        provideTransloco({
            config: {
                availableLangs: ["en", "de"],
                defaultLang: "en",
                fallbackLang: "en",
                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
            },
            loader: TranslocoHttpLoader,
        }),
    ],
});
