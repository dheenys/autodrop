module.exports = {
  name: "ready",
  run: async (bot) => {
    console.log('\x1b[94m%s\x1b[0m', `Logged in as ${bot.client.user.tag}`)
  },
};
