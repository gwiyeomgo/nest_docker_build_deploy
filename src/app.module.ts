import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역에서 사용 가능(ConfigService 어디에서든  바로 사용)
      envFilePath: ['.env'], // .env 파일 경로 지정
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST ,
      port: Number(process.env.DATABASE_PORT) ,
      username: process.env.DATABASE_USER ,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME ,
      synchronize: true ,// 자동 테이블 생성
      autoLoadEntities: true, //자동 entity 등록
    }),
    TodoModule
  ]
})
export class AppModule {}
