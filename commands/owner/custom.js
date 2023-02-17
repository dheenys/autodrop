const config = require('../../config')

module.exports = {
    name: `cmd`,
    catagory: "owner",
    permissions: [],
    devOnly: true,
    run: async ({ client, message, args }) => {
        if (!args.slice(0).join(" ")) return;
        message.channel.send((args.slice(0).join(" ")));
    }
};