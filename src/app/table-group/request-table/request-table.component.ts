import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { PayloadTableComponent } from '../payload-table/payload-table.component';
import { BaseApiTableComponent } from '../shared/base/base-api-table.component';

@Component({
  selector: 'app-request-table',
  standalone: true,
  templateUrl: './request-table.component.html',
  styleUrl: './request-table.component.scss',
  imports: [NgIf, PayloadTableComponent],
})
export class RequestTableComponent extends BaseApiTableComponent {}
