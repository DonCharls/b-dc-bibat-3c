import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostController } from './post/post.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, PostController],
  providers: [AppService],
})
export class AppModule {}
