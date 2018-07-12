import { Injectable } from '@angular/core';

@Injectable()
export class SharedModule {
  constructor() { }
  sharingData: any;
  setData(data) {
    this.sharingData = data;
  }
  getData() {
    return this.sharingData;
  }
} 