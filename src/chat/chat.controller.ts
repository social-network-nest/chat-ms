import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
  ) {}

  @MessagePattern({ cmd: 'list' })
  list() {
    return this.chatService.list();
  }

  @MessagePattern({ cmd: 'create' })
  create(
    @Payload() payload: any
  ) {
    return payload;
    return this.chatService.create(payload);
  }
}
