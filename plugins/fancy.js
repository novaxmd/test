const { popkid } = require("../bmbtech/popkid");
const fancy = require("../plugins/style");

popkid(
  {
    nomCom: "fancy",
    categorie: "Fun",
    reaction: "☑️"
  },
  async (dest, zk, commandeOptions) => {
    const { arg, repondre, prefixe } = commandeOptions;

    try {
      if (!arg[0]) {
        return await repondre(
          `\nExemple : ${prefixe}fancy 1 matelee\n` +
            String.fromCharCode(8206).repeat(4001) +
            fancy.list("matelee")
        );
      }

      // Extract style ID
      const id = parseInt(arg[0]);
      if (isNaN(id) || id < 1) {
        return await repondre(
          `\nExemple : ${prefixe}fancy 1 matelee\n` +
            String.fromCharCode(8206).repeat(4001) +
            fancy.list("matelee")
        );
      }

      // Extract text
      const text = arg.slice(1).join(" ");
      if (!text) return await repondre("Veuillez écrire un texte à styliser.");

      // Select style
      const selectedStyle = fancy.styles[id - 1];
      if (!selectedStyle) return await repondre("_Style introuvable :(_");

      // Apply style
      const output = fancy.apply(selectedStyle, text);
      return await repondre(output);
    } catch (error) {
      console.error("Fancy command error:", error);
      return await repondre("_Une erreur s'est produite :(_");
    }
  }
);
