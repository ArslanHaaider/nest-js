import {  Injectable } from "@nestjs/common";
type requestGetItem = {
    title:string
}
const nftData = [
    {
      title: "Sunset Serenity",
      description: "A breathtaking digital painting capturing the tranquility of a sunset over the ocean.",
    },
    {
      title: "Midnight Dream",
      description: "An abstract representation of a dreamy midnight sky filled with stars and mystery.",
    },
    {
      title: "Enchanted Forest",
      description: "Explore the depths of an enchanted forest where magical creatures roam and ancient secrets lie hidden.",
    },
    {
      title: "Celestial Harmony",
      description: "Harmonious blend of celestial bodies dancing in the vastness of space, bringing peace and serenity to the universe.",
    },
    {
      title: "Eternal Love",
      description: "Symbolic representation of eternal love, where two souls intertwine in an everlasting bond.",
    },
    {
      title: "Whispers of Time",
      description: "Whispers of time echoing through ancient ruins, revealing stories of civilizations long forgotten.",
    },
    {
      title: "Mystic Mountains",
      description: "Journey through mystic mountains, where rugged peaks pierce the sky and secrets linger in the mist.",
    },
    {
      title: "Dreams of Tomorrow",
      description: "Visions of tomorrow's possibilities, where innovation and imagination shape the world.",
    },
    {
      title: "Ocean's Embrace",
      description: "Experience the embrace of the ocean, where waves caress the shore and seagulls soar in the endless sky.",
    },
    {
      title: "Serenade of Spring",
      description: "Nature's symphony as spring breathes new life into the world, painting landscapes with vibrant colors.",
    }
  ];
  
  console.log(nftData);
  

@Injectable()
export class ApiService{
    findItem(data:requestGetItem):object{
        const item =  nftData.find(item => item.title === data.title)
        return item
    }

}