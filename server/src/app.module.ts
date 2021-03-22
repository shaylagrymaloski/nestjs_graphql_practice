import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeModule } from './time/time.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: { path: join(process.cwd(), 'src/graphql.ts')},
      cors: {
        origin: 'http://localhost:3000',
        credentials: false,
      },
    }),
    TimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
