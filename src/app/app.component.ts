import { Component } from "@angular/core";
import { Firestore, collectionData, collection } from "@angular/fire/firestore";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "firebase-app";

  constructor(private store: AngularFirestore) {}
}
