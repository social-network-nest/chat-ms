import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ChatService extends PrismaClient implements OnModuleInit {
    onModuleInit() {
        this.$connect();
    }

    list() {
        return 'List of chats';
    }

    create(payload: any) {
        const {userId, name, users} = payload;
        return this.chat.create({
            data: {
                userId: userId,
                name: name,
                users: users,
            }
        });
    }

    sendMessage(payload: any) {
        const {chatId, userId, message} = payload;
        return this.message.create({
            data: {
                chatId: chatId,
                userId: userId,
                message: message,
            }
        });
    }
}
