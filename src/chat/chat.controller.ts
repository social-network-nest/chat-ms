import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from 'src/user/user.service';

@Controller()
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly userService: UserService
  ) {}

  @MessagePattern({ cmd: 'create_chat' })
  create(@Payload() payload: any) {
    return this.userService.listUsers();
  }
}
