const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hitdeveloper2023@gmail.com"
global.location="Port-au-Prince, Haiti."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/HITDeveloper2023/HITDEV-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDAkV9FHWqAMMHvb40b";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDAkV9FHWqAMMHvb40b" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/09bb04e12ce3828e9cd2e.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "50944727644" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50944727644";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50944727644";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50944727644,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc5LFxuICAgICAgICA0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4LFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NixcbiAgICAgICAgODQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1RFJ3YXR1cEdoakNFd21yZkt0Z0VxVHppWGJCcGZKV0VOcVNvMy9heXBNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmMUh3WkxlRFM1eTRBbHg3YURnTGJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRhMDA0MTE0LWRiZDktNGJlMC1hZjhkLWNhNjA0YzdiYTgyN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICA1MSxcbiAgICAgIDI0LFxuICAgICAgMTc1LFxuICAgICAgMTg4LFxuICAgICAgMTU2LFxuICAgICAgMjI2LFxuICAgICAgNzgsXG4gICAgICAxMixcbiAgICAgIDE2MyxcbiAgICAgIDE4NCxcbiAgICAgIDEyMyxcbiAgICAgIDIyMCxcbiAgICAgIDEwLFxuICAgICAgODIsXG4gICAgICA2OCxcbiAgICAgIDEwNSxcbiAgICAgIDY3LFxuICAgICAgMTI0LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDg3LFxuICAgICAgMTIzLFxuICAgICAgMjE0LFxuICAgICAgMTEzLFxuICAgICAgNzIsXG4gICAgICAxMDMsXG4gICAgICAxNzYsXG4gICAgICAxNjQsXG4gICAgICA1OSxcbiAgICAgIDEwOCxcbiAgICAgIDI0OCxcbiAgICAgIDQ5LFxuICAgICAgMjYsXG4gICAgICA5NixcbiAgICAgIDE1NixcbiAgICAgIDIzOSxcbiAgICAgIDU1LFxuICAgICAgNzcsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTFFNlBYWTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM3NzQ5NTI0MzozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTExMTY3MDkxNTQwMTYyOjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BQa3NhOEJFTWFmcExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFBiL3gzM0dOQXBIZEwwWkRkRWNvamIvdVNnbXI1cjJsSDI3dnVoczAzST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6b2ZTcnpXU3JaVmZodlN3S2E5eTlCdEtIQ2lWczQ4WHZDK0o2eXloNWxrRmNwc2Vwc2Y2a1Fma3lYQzcwSkJ5UVNrRjB3djJNbnNXOFJwaTNMUUVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNcXhLVW1pbFJUYnYvYW5sVllvaEhGdGhiOW94YkdQZ3hyZ0lTRG5sZ2ZiOXplMTdXMy9BbE9UWElXVGVncXprNDhQWm5mSjdwWlBrMVVkVkJaSjFqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNzc0OTUyNDM6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTg1MDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFERjVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURGNS5qc29uIjogIntcImtleURhdGFcIjpcImkybENOZ3NKZTc5RC9LeUVJelduRFovbmV3YUg1aTdYSmZ5OE02cXprQjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzY3ODE3MzI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『© 𝐇𝐀𝐈𝐓𝐈𝐀𝐍 𝐈𝐓 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜɪᴛᴅᴇᴠ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʜɪᴛᴅᴇᴠ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Hitdev",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HITDEV"  ).toUpperCase(),



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
