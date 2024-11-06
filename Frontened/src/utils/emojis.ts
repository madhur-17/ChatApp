export const emojis = [
    "😊", "🤫", "😒", "😝", "😂", "😁", "🤣", "😍", "😉", "😎", "😶", "😑", "🥳", "😅", "🙃", "😋", 
    "🐶", "🐱", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐥", "🐺", "🦄", "🐉", 
    "🍎", "🍊", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍", "🥥", "🥑", "🥦", "🥕", "🌽", 
    "🏀", "⚽", "⚾", "🎾", "🏐", "🏈", "🥎", "🎳", "🎯", "🏓", "🏸", "🥊", "🏹", "🎣", "🎱", "🎲", 
    "📱", "💻", "📷", "📹", "🎥", "🕹️", "📺", "📟", "💽", "💿", "📀", "📞", "📠", "📸", "🎤", "🎧", 
    "🚗", "🚕", "🚙", "🚓", "🚑", "🚒", "🚐", "🚜", "🚲", "🛴", "🚂", "✈️", "🚁", "🚀", "🛸", "🛳️", 
    "⛵", "🚤", "⛽", "🚧", "🏗️", "🏠", "🏥", "🏫", "🏛️", "🕌", "⛩️", "🕍", "🏰", "🗼", "🌋", "🗻",
  ];



  export const getRandomEmoji=()=>{
    const emoji=emojis
    return emoji[Math.floor(Math.random()*emoji.length)];
  }