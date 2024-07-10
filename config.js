const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923086679730";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_53_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICA3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOWNFNEpVdldKbUVibk1NanF6dkY3cnhSdUNFWVFtcFAwUnY1WjltZ2pJST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVzBfa0RVZkFTTXlSZVYtQlRNNkRnZ1wiLFxuICBcInBob25lSWRcIjogXCI2ZmI2NjQ0My04YWZiLTQxZWItODIyMC1mZWU3NTY5NDY3YWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgMjQyLFxuICAgICAgMjIyLFxuICAgICAgNzQsXG4gICAgICAxODIsXG4gICAgICAxNjMsXG4gICAgICA4OCxcbiAgICAgIDI1MCxcbiAgICAgIDI0MyxcbiAgICAgIDE5MyxcbiAgICAgIDIxNCxcbiAgICAgIDE5MyxcbiAgICAgIDUwLFxuICAgICAgMjQzLFxuICAgICAgMTc0LFxuICAgICAgMTA0LFxuICAgICAgNTMsXG4gICAgICA5OCxcbiAgICAgIDI4LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgMzgsXG4gICAgICA0LFxuICAgICAgMTEsXG4gICAgICAzMSxcbiAgICAgIDE4OSxcbiAgICAgIDY1LFxuICAgICAgMTMxLFxuICAgICAgMjAzLFxuICAgICAgODQsXG4gICAgICAxNjAsXG4gICAgICAyMDAsXG4gICAgICAyMTIsXG4gICAgICAyMjUsXG4gICAgICAxODAsXG4gICAgICA2NSxcbiAgICAgIDUsXG4gICAgICAxOSxcbiAgICAgIDU4LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE4QktZS0JNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODY2Nzk3MzA6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk4MjI2MjU0Mzg5Mzk3OjczQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUV3pNa0hFTS9EdUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYy83SnNLcWV2N0ZLSDU0TjFOQmtlWldVMW1RaW1Jb0djaDZUMVI3Uy8wYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoenBHV2RhZTNkNXpKRWQzYVFqemRvMW9Eam5yM2lLcDQzdXdqd2tKeStGQ004dzFSRXJOQTduRW12Mk9ENHVXU2tldjQwTnRadWI4TjNyWVA3cGNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvSU1XdStQREgxNTB0dEhqTkpkc0dCU0pqYUlHdEsvbTh6UjUrYUR1TVZjZFpvbEUzalovUjBlMFNXNDBIeWluK0NORTJMVGE5MXZyK2hSNGV1TGJDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwODY2Nzk3MzA6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1OTA4MDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJU2NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlTYy5qc29uIjogIntcImtleURhdGFcIjpcImFlR21PVEVmbCt2NEx6MU1SakJGaFcxemdiNUgwa0xoRTNkSFIxZWRSV2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAzMzM5NjUxNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwNTEyNTM2MzY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
