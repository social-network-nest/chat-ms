import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    list() {
        return 'Hello from Chat Service';
    }
}
