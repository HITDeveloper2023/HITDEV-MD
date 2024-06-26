/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．2．2                                                   // 
//                                                                                                      // 
//            ██╗  ██╗██╗████████╗██████╗ ███████╗██╗   ██╗    ███╗   ███╗██████╗                        //
//            ██║  ██║██║╚══██╔══╝██╔══██╗██╔════╝██║   ██║    ████╗ ████║██╔══██╗                       //
//            ███████║██║   ██║   ██║  ██║█████╗  ██║   ██║    ██╔████╔██║██║  ██║                       //
//            ██╔══██║██║   ██║   ██║  ██║██╔══╝  ╚██╗ ██╔╝    ██║╚██╔╝██║██║  ██║                       //
//            ██║  ██║██║   ██║   ██████╔╝███████╗ ╚████╔╝     ██║ ╚═╝ ██║██████╔╝                       //
//            ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═════╝ ╚══════╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : 
   * @author : Hitdev <https://github.com/hitdeveloper>
   * @youtube : https://www.youtube.com/c/@hitdeveloper
   * @infoription :  ,A Multi-functional whatsapp user bot.
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By HAITIAN IT Developer.
   * © 2024  ✭ ⛥.
   * plugin date : 10/6/2023
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/



const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/HitDeveloper 2023/' // Source URL
const number = '50944727644'
var name = 'HAITIAN IT Developer'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/1e60489705c851f74b55e.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
│ Name      : Losisse Alberno
│ Place     : Port-au-Prince, HAITI
│ Gender    :  ᴍᴀʟᴇ
│ Age       : 24
│ Phone     : wa.me/50944727644
│ Youtube   : Youtube.com/c/Hitdev
│ Status    : Web Developer, Graphic Designer
╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`



 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             desc: "Show intro of user",
             category: "fun",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"hitdev",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })