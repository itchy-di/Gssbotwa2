const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
    xfarr: 'https://api.xfarr.com',
};

// Apikey Website Api
global.APIKeys = {
    'https://api.xfarr.com': 'Uc3LRsLE2d',
};

// Set your URL and API key here
global.APIs = {
    xfarr: {
        baseURL: 'https://api.xfarr.com',
        Key: 'Uc3LRsLE2d'
    }
};
 

// Other
global.apikey = 'bf2d2cf29b3edc604b447983';
global.ownername = process.env.OWNER_NAME || "𝑫𝑨𝑴𝑰𝑹𝑼 𝓩𝓔𝓔𝓚𝓔𝓡";
global.owner = process.env.OWNER_NUMBER || ['94743747913'];
global.premium = process.env.PREMIUM_NUMBER || ['94743747913'];
global.packname = process.env.STICKER_PACKNAME || "𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢";
global.author = process.env.STICKER_AUTHOR || "𝐆𝐒𝐒 𝚩𝚯𝚻𝐖𝚫";
global.sessionName = 'session';
global.prefa = ['!', '.'];
global.sp = '✪';
global.mess = {
    banned: '`You are *Banned* fron using commands!`',
    bangc: '`This Group is *Banned* from using Commands!`',
    success: '`✓ Success`',
    admin: '`This feature is only for group admins`',
    botAdmin: '`Give me admin fucker!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
};
global.link = 'https://whatsapp.com/channel/0029VaJgHDB1t90b7wH2Lz3m'
global.linkGroup = 'https://chat.whatsapp.com/KUaPdfu5YtB1E5ZOrXEcSg'
global.autoswview = process.env.AUTO_STATUS_SEEN || "true";
global.autoread = process.env.AUTO_READ || "false";
global.autoTyping = process.env.AUTO_TYPING || "true";
global.typemenu = process.env.MENU_TYPE || "v2";
global.onlygroup = process.env.ONLY_GROUP || "false";
global.onlypc = process.env.ONLY_PC || "false";
global.welcome = process.env.WELCOME_MSG || "false";
global.autoabout = process.env.AUTO_BIO || "false";
global.limitawal = {
    premium: 'Infinity',
    free: 10
};

// Add anticall option
global.config = {
    options: {
        antiCall: true, // Set to true for anticall functionality, false otherwise
    },
};

// Ensure config object is defined before using it
if (config && config.options && config.options.antiCall) {
    let file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Update'${__filename}'`));
        delete require.cache[file];
        require(file);
    });
}
