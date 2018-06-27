import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DateTimeMethods {
    public getTimeDiff(startTimeStr, endTime) {
        const startTime = typeof(startTimeStr) === 'string' ? Number(startTimeStr) : startTimeStr;
        const timeTaken = endTime - startTime;
        return timeTaken;
    }
}
