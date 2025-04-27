import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
  ) {}

  @MessagePattern({ cmd: 'list_chat' })
  listChat(userId: string) {
    return this.chatService.listChat(userId);
  }

  @MessagePattern({ cmd: 'create_chat' })
  createChat(
    @Payload() payload: any
  ) {
    return this.chatService.createChat(payload);
  }

  @MessagePattern({ cmd: 'send_message' })
  sendMessage(
    @Payload() payload: any
  ) {
    return this.chatService.sendMessage(payload);
  }

  @MessagePattern({ cmd: 'show_message_chat' })
  showMessageChat(
    @Payload() chatId: string
  ) {
    return this.chatService.showMessageChat(chatId);
  }
}
