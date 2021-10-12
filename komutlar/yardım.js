const categorylist = require("fs")
  .readdirSync("./komutlar/")
  .filter(s => s !== "private");
for (const category of categorylist) {
  const Discord = require("discord.js");
  const { MessageButton } = require("discord-buttons");


  exports.run = async (client, message, args) => {
    const buttonDelete = new MessageButton()
      .setStyle("red")
      .setLabel("Clear")
      .setID("buttonDelete");

    let embed = new Discord.MessageEmbed()
      .setColor("#000001")
      .setTitle("Komutlar")
      .setDescription(
        "Komutlara ulaşmak için aşağıdan kategori seçin. Prefix `.`"
      );
    message.channel
      .send(embed, {
        buttons: [
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Kayıt")
            .setID("10"),
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Otorol")
            .setID("20"),
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Satış")
            .setID("30"),
        ]
      })
      .then(async function(helpMessage) {
        helpMessage
          .createButtonCollector(
            user => user.clicker.user.id == message.author.id
          )
          .on("collect", async button => {
            if (button.id == "buttonDelete") {
              message.delete().then(helpMessage.delete());

              button.reply.defer();
            } else if (button.id == "1") {
              embed.setTitle("Komutlar");
              embed.setDescription(
                "Komutlara ulaşmak için aşağıdan kategorilerden birine tıklayın. Prefix `.`"
              );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Genel")
                    .setID("10"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Moderasyon")
                    .setID("20")
                ]
              });

              button.reply.defer();
            } else if (button.id == "10") {
              embed.setTitle("Kayıt");
              embed.setDescription(
` **.alınacak-rol @rol** \n Kayıt edilen kişiden alınacak rolü ayarlar.
 **.alınacak-rol sıfırla** \n Kayıt edilen kişiden alınacak rolü sıfırlar.
 **.kayıt-kanal #kanal** \n Kayıtın yapılacağı kanalı belirlersiniz.
 **.kayıt-kanal sıfırla** \n Kayıtın yapılacağı kanalı sıfırlarsınız.
 **.kayıt-hg #kanal** \n Kayıt hoş geldin kanalını ayarlarsınız.
 **.kayıt-hg sıfırla** \n Kayıt hoş geldin kanalını sıfırlarsınız.
 **.kayıt-yetkili @rol** \n Kayıt edebilecek yetkiyi ayarlar.
 **.kayıt-yetkili sıfırla** \n Kayıt edebilecek yetkiyi sıfırlar.
 **.erkek-rol @rol** \n Kayıt edilince verilecek erkek rolü ayarlar.
 **.erkek-rol sıfırla** \n Kayıt edilince verilecek erkek rolünü sıfırlar.
 **.kız-rol @rol** \n Kayıt edilince verilecek kız rolü ayarlar.
 **.kız-rol sıfırla** \n Kayıt edilince verilecek kız rolünü sıfırlar.
 **.erkek @kullanıcı isim yaş** \n Erkekleri kayıt etmeye yarar.
 **.kız @kullanıcı isim yaş** \n Kızları kayıt etmeye yarar.
`
              );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Şikayet İçin DM")
                    .setID("40"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("⭕🧂 1")
                    .setID("50")
                ]
              });

              button.reply.defer();
            } else if (button.id == "20") {
              embed.setTitle("Otorol");
              embed.setAuthor("OtoRol", client.user.avatarURL())
    .setColor("#00ff00")
    .addField(
      "__OTOROL Ayarlamak__",
      "__**Oto-Rol-Ayarla**__  **Otorolü Ayarlar.**\n Örnek: `.otorol-ayarla @rolünüz #bildirim-mesaj-kanalı` \n \n __**;otorol-mesaj**__ <:sag:822547800481988628>  **Otorol Mesajını Ayarlar.** \n Örnek: `.otorol-mesaj -server- Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz`"
    )

    .addField(
      "__**Kullanabileceğiniz Değişkenler**__", 
` 
**-uye-** \ Sunucuya Katılan Üyeyi Etiketler.\n
**-rol-** \ Sunucuya Gelen Kişiye Verilen Rolün İsmini Yazar.\n
**-server-** \ Server İsmini Yazar.\n
**-uyesayisi-** \ Üye Sayısını Atar.\n
**-botsayisi-** \ Bot Sayısını Atar.\n
**-kanalsayisi-** \ Kanal Sayısını Atar.\n
**-bolge-** \ Sunucu Bölgesinin İsmini Atar.\n
`
              );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Şikayet İçin DM")
                    .setID("40"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("⭕🧂 1")
                    .setID("50")
                ]
              });
              
              button.reply.defer();
            } else if (button.id == "30") {
              embed.setTitle("Satış Fiyatları");
              embed.setDescription("**Kayıt Sistemi = 120k OwO Cash** 💸 \n                               \n **Oto Rol Tamamı = 60k OwO Cash** 💸 \n                               \n **Botun Aynısı = 150k OwO Cash** 💸 \n                               \n Bot Satış Sunucumuzun Linki---> https://discord.gg/vVBztnBQUc"
              );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),

                 ] 
              });
              button.reply.defer();
            }
          });
      });
  };
}

exports.conf = { aliases: [] };
exports.help = { name: "yardım" };
  