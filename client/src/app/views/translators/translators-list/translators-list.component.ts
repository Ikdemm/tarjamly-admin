import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Translator } from '../../../models/translator.model';
import { TranslatorDetailsComponent } from '../translator-details/translator-details.component';

@Component({
  selector: 'app-translators-list',
  templateUrl: './translators-list.component.html',
  styleUrls: ['./translators-list.component.css']
})
export class TranslatorsListComponent implements OnInit {

  translators: Array<Translator>

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

}
