import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UpdatedItemsModule } from './updated-items/updated-items.module';
import { UpdatedItemsnewModule } from './updated-itemsnew/updated-itemsnew.module';

@Module({
  imports: [UpdatedItemsModule, UpdatedItemsnewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
