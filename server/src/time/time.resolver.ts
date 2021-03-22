import { Query, Resolver } from '@nestjs/graphql';
import { TimeService } from './time.service';

@Resolver()
export class TimeResolver {

    constructor(private timeService: TimeService){}
    @Query()
    time(){ 
        return this.timeService.getTime();
    }
}
