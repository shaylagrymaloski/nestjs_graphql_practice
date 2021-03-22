import { Injectable } from '@nestjs/common';
import { runInThisContext } from 'node:vm';

@Injectable()
export class TimeService {
    getTime(){
        let today = new Date();
       
        return {
            hour: today.getHours(),
            min: today.getMinutes(),
            sec: today.getSeconds() } ;
    }
}
