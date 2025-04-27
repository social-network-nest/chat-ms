import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ChatService extends PrismaClient implements OnModuleInit {
    onModuleInit() {
        this.$connect();
    }

    listChat(userId: string) {
        const chats = this.chat.findMany({
            where: {
                users: {
                    has: userId,
                }
            },
            select: {
                name: true,
                users: true,
                updatedAt: true,
            }
        })
        return chats;
    }

    async createChat(payload: any) {
        const {userId, name, users} = payload;
        users.push(userId);
        const chat = await this.chat.create({
            data: {
                userId: userId,
                name: name,
                users: users,
            }
        });
        return {
            id: chat.id,
            message: 'Chat created successfully',
        }
    }

    async sendMessage(payload: any) {
        const {chatId, userId, message} = payload;
        const text = await this.message.create({
            data: {
                chatId: chatId,
                userId: userId,
                message: message,
            }
        });
        return {
            id: text.id,
            message: 'Message sent successfully',
        }
    }
}
