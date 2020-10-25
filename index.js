

class webhookFinder {
    /**
     * @param {String} name
     * @param {} guild
     */
    static async find(name, guild) {
        if(!name) throw new TypeError("Please provide a name")
        if(!guild) throw new Error("Please provide the guild object example: `message.guild`")

        const w = await guild.fetchWebhooks()
        const webhook = w.find((w) => w.name === name)
        if(webhook) {
            console.log(`Found a webhook with the name ${name}`)
        }
        if(!webhook) {
            console.log(`I did not find a webhook with the name ${name}`)
        }

    }
        /**
     * @param {String} name
     * @param {} guild
     * @param {String} text
     */
    static async send(name, text, guild) {
        if(!name) throw new TypeError("Please provide a name")
        if(!guild) throw new Error("Please provide the guild object example: `message.guild`")
        if(!text) throw new Error("Please provide text!")
        const w = await guild.fetchWebhooks()
        const webhook = w.find((w) => w.name === name)
        if(webhook) {
            webhook.send(text)
        }
        if(!webhook) {
           throw new Error(`Webhook doesnt exist!`) 
        }
    }
}
module.exports = webhookFinder