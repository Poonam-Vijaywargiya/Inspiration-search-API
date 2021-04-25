import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "dialog-data",
  templateUrl: "./dialog-data.component.html",
  styleUrls: ["./dialog-data.component.css"]
})
export class DialogDataComponent implements OnInit {
  @Input() locations: {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit() {}
}


// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }
