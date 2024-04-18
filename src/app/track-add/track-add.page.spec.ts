import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TrackAddPage } from "./track-add.page";

describe("TrackAddPage", () => {
    let component: TrackAddPage;
    let fixture: ComponentFixture<TrackAddPage>;

    beforeEach(() => {
        fixture = TestBed.createComponent(TrackAddPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
