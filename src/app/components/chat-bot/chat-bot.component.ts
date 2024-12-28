import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-chat-bot",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./chat-bot.component.html",
})
export class ChatBotComponent {
  isOpen = false;
  newMessage = "";
  messages: Array<{ text: string; sender: "bot" | "user" }> = [
    { text: "Merhaba! Size nasıl yardımcı olabilirim?", sender: "bot" },
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: "user" });
      this.newMessage = "";

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({
          text: "Teşekkürler! En kısa sürede size dönüş yapacağız.",
          sender: "bot",
        });
      }, 1000);
    }
  }
}
