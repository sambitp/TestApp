import { Injectable } from '@angular/core';

import { interval } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class CheckForUpdateService {

  constructor(updates: SwUpdate) {
    console.log('updates', updates);
    /*Add logic to handle updates */
    /*interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate());*/
  }
}
