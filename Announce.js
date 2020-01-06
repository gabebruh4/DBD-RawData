
{
  "name": "announce",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "JRHXH",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "permission": "MENTION_EVERYONE",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "40",
      "name": "Check Member Permissions"
    },
    {
      "condition": "0",
      "comparison": "0",
      "value": "0",
      "iftrue": "2",
      "iftrueVal": "36",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "message": "0",
      "varName": "",
      "info": "0",
      "ParamN": "1",
      "separator": "",
      "storage": "1",
      "varName2": "announce",
      "name": "Store Message Params"
    },
    {
      "condition": "0",
      "comparison": "0",
      "value": "1",
      "iftrue": "2",
      "iftrueVal": "44",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "message": "0",
      "varName": "",
      "info": "1",
      "ParamN": "2",
      "separator": "",
      "storage": "1",
      "varName2": "announceMessage",
      "name": "Store Message Params"
    },
    {
      "storage": "1",
      "varName": "announce",
      "comparison": "1",
      "value": "everyone",
      "iftrue": "2",
      "iftrueVal": "15",
      "iffalse": "0",
      "iffalseVal": "4",
      "name": "Check Variable"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "announce",
      "comparison": "1",
      "value": "here",
      "iftrue": "2",
      "iftrueVal": "22",
      "iffalse": "0",
      "iffalseVal": "8",
      "name": "Check Variable"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "announce",
      "comparison": "1",
      "value": "none",
      "iftrue": "2",
      "iftrueVal": "29",
      "iffalse": "2",
      "iffalseVal": "36",
      "name": "Check Variable"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "comment": "------EVeryone Tag------",
      "color": "#400040",
      "name": "Comment"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "@everyone",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "title": "",
      "author": "",
      "color": "BB7CF5",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "${tempVars(\"announceMessage\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "Announcement By: ${user.tag}",
      "footerIcon": "${user.displayAvatarURL}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "comment": "------Here Tag------",
      "color": "#400040",
      "name": "Comment"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "@here",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "title": "",
      "author": "",
      "color": "BB7CF5",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "${tempVars(\"announceMessage\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "Announcement By: ${user.tag}",
      "footerIcon": "${user.displayAvatarURL}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "comment": "------No Tag------",
      "color": "#400040",
      "name": "Comment"
    },
    {
      "title": "",
      "author": "",
      "color": "BB7CF5",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "${tempVars(\"announceMessage\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "Announcement By: ${user.tag}",
      "footerIcon": "${user.displayAvatarURL}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "comment": "-------ERRORS-------",
      "color": "#ff0000",
      "name": "Comment"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "title": "",
      "author": "",
      "color": "RED",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "<:xmark:654456533702279168> You need to put everyone | here | none",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "title": "",
      "author": "",
      "color": "RED",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "<:xmark:654456533702279168> You need to have `MENTION_EVERYONE` permission",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "title": "",
      "author": "",
      "color": "RED",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "<:xmark:654456533702279168> You need to put a message!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    }
  ]
}
