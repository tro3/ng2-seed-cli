import { Injectable } from '@angular/core';

@Injectable()
export class BusyService {
  busy: boolean = false

  setBusy(val:boolean) {
    console.log('Busy:', val)
    this.busy = val
  }

}
