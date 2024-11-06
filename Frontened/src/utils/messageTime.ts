export function messageTime(dateString:string){

    const time = new Date(dateString).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return time;
}