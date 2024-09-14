import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StatusController } from './hello/hello.controller';
import { RolesGuard } from './hello/guards/auth/auth.guard';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports:  [TasksModule, ProjectsModule, AuthModule, UsersModule, PaymentsModule],
  controllers: [StatusController],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: RolesGuard,// Configura RolesGuard como un Guard global
    }
  ],

})
export class AppModule {}
