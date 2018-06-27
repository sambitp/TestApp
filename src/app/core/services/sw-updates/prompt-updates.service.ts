import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {

  constructor(updates: SwUpdate) {
    /*forcefully update the servcice worker */
    updates.available.subscribe(event => {
      console.log('event', event);
      // if (promptUser(event)) {
      //   updates.activateUpdate().then(() => document.location.reload());
      // }
    });
  }
}
