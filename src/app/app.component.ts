import { Component } from "@angular/core";
import { environment } from "../environments/environment";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, getDatabase, ref, set, onValue } from "firebase/database";
import { DocumentData, Firestore } from "@firebase/firestore";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore/lite";
import { randomUUID } from "crypto";
import { Guid } from "guid-ts";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "firebase-app";
  app: FirebaseApp;
  db: Database;
  username = "";
  message = "";
  private firestore: Firestore | Promise<Firestore>;
  protected form: FormGroup = new FormGroup({});
  protected results:
    | { name: string; message: string; date: Date }[]
    | undefined;

  constructor(private fb: FormBuilder) {
    this.app = initializeApp(environment.firebase);
    this.db = getDatabase(this.app);
    this.firestore = getFirestore(this.app);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(15)]],
      message: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(150),
        ],
      ],
    });

    this.getData();
    console.log(this.results);
  }

  onChatSubmit() {
    return Promise.resolve(this.firestore).then((db) => {
      const ref = doc(db, "chat", Guid.newGuid().toString());
      return setDoc(ref, {
        username: this.form.controls["name"].value,
        message: this.form.controls["message"].value,
        date: new Date().toUTCString(),
      }).then(() => {
        this.form.controls["message"].setValue("");
        this.getData();
      });
    });
  }

  public getData(): Promise<any> {
    return Promise.resolve(this.firestore).then((db) => {
      return getDocs(collection(db, "chat")).then(
        (results) =>
          (this.results = results.docs
            .map((result) => ({
              name: result.get("username"),
              message: result.get("message"),
              date: new Date(result.get("date")),
            }))
            .sort((a, b) => b.date.getTime() - a.date.getTime()))
      );
    });
  }
}
