import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RepoPage } from "./repo.page";

describe("RepoPage", () => {
    let component: RepoPage;
    let fixture: ComponentFixture<RepoPage>;

    beforeEach(() => {
        fixture = TestBed.createComponent(RepoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
