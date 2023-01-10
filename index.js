const { Client, GatewayIntentBits, channelLink } = require('discord.js');

require('dotenv/config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', () => {
    console.log('bot is ready');
})

client.on('messageCreate', message => {

    const nounWords = ['china',
        'communist',
        'commie',
        'cappie',
        'capitalist',
        'xi',
        'jin',
        'ping',
        'mao',
        'zedong',
        'hong',
        'kong',
        'taiwan',
        'pooh',
        'winnie'
    ];
    const goodWords = ['good',
        'best',
        'luck',
        'love'
    ];
    const badWords = ['bad',
        'sucks',
        'suck',
        'ass',
        'dick',
        'dicks',
        'tiananmen',
        'pussy',
        'fuck',
        'fucking'
    ];

    const messageContent = message.content.toLowerCase();

    // picks number between 0-5
    let rollDice = Math.floor(Math.random() * 6);
    //  ignore bot messages
    if (message.author.bot) return;

    // say bad to word
    if (nounWords.some(word => messageContent.includes(word)) && badWords.some(word => messageContent.includes(word))) {
        const replyMessage = ['Shaddap',
            'nigger',
            'fuck yourself 🫵',
            'shadap nigger',
            'china sucks',
            '🤬🖕'
        ];
        message.channel.send(replyMessage[rollDice]);
    }

    // say good to word
    if (nounWords.some(word => messageContent.includes(word)) && goodWords.some(word => messageContent.includes(word))) {
        const replyMessage = ['Thank Capitalist',
            'I know right 👌',
            'Bless Capitalist',
            '😎👉👉',
            '💯💯💯',
            'Godspeed'
        ];
        message.channel.send(replyMessage[rollDice]);
    }

    // console.log(message.author);

});

client.login(process.env.TOKEN);