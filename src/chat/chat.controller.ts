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

  @MessagePattern({ cmd: 'create_chat' })
  createChat(
    @Payload() payload: any
  ) {
    return this.chatService.create(payload);
  }

  @MessagePattern({ cmd: 'send_message' })
  sendMessage(
    @Payload() payload: any
  ) {
    return this.chatService.sendMessage(payload);
  }
}
