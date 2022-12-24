import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xCf6e9ec8c86f80b002A49963bf4dfCeB8431C55a", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Dessert Treat",
        description: "This NFT will give you access to TreatDAO!",
        image: readFileSync("scripts/assets/dessert_treat.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();