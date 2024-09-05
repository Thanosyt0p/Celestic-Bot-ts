import { Message, Command, BaseCommand } from '../../Structures'

@Command('chess', {
    description: 'chess!',
    usage: 'chess',
    cooldown: 10,
    exp: 10,
    category: 'games'
})
export default class extends BaseCommand {
    public override execute = async (M: Message): Promise<void> => {
        const text = `â™Ÿï¸ *Chess Commands* â™Ÿï¸\n\nðŸŽ—ï¸ *${this.client.config.prefix}challenge* - Challenges the mentioned or quoted person to a chess match\n\nðŸŽ€ *${this.client.config.prefix}accept-ch* - Accpets the challenge if anyone had challenged you\n\nðŸ”° *${this.client.config.prefix}reject-ch* - Rejects the incomming challenge\n\nðŸ’ *${this.client.config.prefix}move [fromTile | 'castle'] [toTile]* - Make a move in the match (refer to the image)\n\nðŸŽ‹ *${this.client.config.prefix}forfeit-chess* - forfits the match`
        const buffer = this.client.assets.get('chess')
        if (!buffer) return void null
        return void (await M.reply(buffer, 'image', undefined, undefined, text))
    }
          }