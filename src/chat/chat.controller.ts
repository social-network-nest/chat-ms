import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
  ) {}

  @MessagePattern({ cmd: 'list' })
  list(
    @Payload() payload: any
  ) {
    return this.chatService.list();
  }
}
