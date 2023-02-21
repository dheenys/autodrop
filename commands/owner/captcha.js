const config = require('../../config')
module.exports = {
    name: config.verif,
    catagory: "owner",
    permissions: [],
    devOnly: true,
    run: async ({ client, message, args }) => {
        if (!args.slice(0).join(" ")) return;
        client.users.fetch('408785106942164992', false).then((user) => {
        	user.send((args.slice(0).join(" ")));
            message.react("✅");
        });
    }
};