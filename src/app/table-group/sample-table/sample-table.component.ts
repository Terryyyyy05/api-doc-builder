import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-table',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './sample-table.component.html',
  styleUrl: './sample-table.component.scss',
})
export class SampleTableComponent {
  jsonString!: string;

  sample = {
    glossary: {
      title: 'example glossary',
      GlossDiv: {
        title: 'S',
        GlossList: {
          GlossEntry: {
            ID: 'SGML',
            SortAs: 'SGML',
            GlossTerm: 'Standard Generalized Markup Language',
            Acronym: 'SGML',
            Abbrev: 'ISO 8879:1986',
            GlossDef: {
              para: 'A meta-markup language, used to create markup languages such as DocBook.',
              GlossSeeAlso: ['GML', 'XML'],
            },
            GlossSee: 'markup',
          },
        },
      },
    },
  };

  ngOnInit(): void {
    this.jsonString = JSON.stringify(this.sample, null, 4);
  }
}
