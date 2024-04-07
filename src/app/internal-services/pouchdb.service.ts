// basic service
import { Injectable } from "@angular/core";

// functions
import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";
import { v4 as uuidv4 } from "uuid";

@Injectable({
    providedIn: "root",
})
export class PouchDBService {
    db: any;

    constructor() {
        PouchDB.plugin(PouchDBFind);
        this.initDB();
    }

    initDB() {
        this.db = new PouchDB("melo-keep");
    }

    getId(): string {
        return uuidv4();
    }

    async addDocument(doc: any) {
        try {
            let response = await this.db.put(doc);
        } catch (error) {
            console.error(error);
        }
    }

    async getDocument(docId: string) {
        try {
            let doc = await this.db.get(docId);
            return doc;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
