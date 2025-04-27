import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    list() {
        return 'List of chats';
    }

    create(payload: any) {
        return 'Chat created';
    }
}
