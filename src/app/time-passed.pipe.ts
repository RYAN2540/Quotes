import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: Date, postDate: Date): number {
    let timeDifference=value.getTime()-postDate.getTime();
    let minutesPassed=Math.trunc((timeDifference*0.001)/60);
    return minutesPassed;    
  }

}
