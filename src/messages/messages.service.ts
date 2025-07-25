import { MessageRepository } from './messages.repository';
export class MessagesService {
  messageRepo: MessageRepository;
  constructor() {
    // service is creating its own dependencies
    // DONT DO this in real apps
    this.messageRepo = new MessageRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
