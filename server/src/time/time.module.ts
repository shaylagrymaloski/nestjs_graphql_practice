import { HttpModule, Module } from '@nestjs/common';
import { TimeService } from './time.service';
import { TimeResolver } from './time.resolver';

@Module({
  imports: [HttpModule],
  providers: [TimeService, TimeResolver]
})
export class TimeModule {}
