import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface ChatMessage {
  text: string;
  sender: "bot" | "user";
  options?: string[];
  timestamp: Date;
}

@Component({
  selector: "app-chat",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild("scrollContainer") private scrollContainer!: ElementRef;

  messages: ChatMessage[] = [];
  newMessage = "";
  userData: any;
  isTyping = false;

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    this.sendWelcomeMessage();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  sendWelcomeMessage() {
    const name = this.userData.name || "ziyaretçi";
    this.addBotMessage(`Merhaba ${name}! Size nasıl yardımcı olabilirim?`, [
      "Bilgi Al",
      "Destek",
      "Demo İste",
    ]);
  }

  sendMessage() {
    if (this.newMessage.trim() && !this.isTyping) {
      this.messages.push({
        text: this.newMessage,
        sender: "user",
        timestamp: new Date(),
      });
      this.newMessage = "";

      this.isTyping = true;
      setTimeout(() => {
        const response = this.generateResponse();
        this.addBotMessage(response.text, response.options);
        this.isTyping = false;
      }, 1500);
    }
  }

  selectOption(option: string) {
    this.messages.push({
      text: option,
      sender: "user",
      timestamp: new Date(),
    });

    this.isTyping = true;
    setTimeout(() => {
      const response = this.handleOptionSelection(option);
      this.addBotMessage(response.text, response.options);
      this.isTyping = false;
    }, 1000);
  }

  private addBotMessage(text: string, options?: string[]) {
    this.messages.push({
      text,
      sender: "bot",
      options,
      timestamp: new Date(),
    });
  }

  private generateResponse(): { text: string; options?: string[] } {
    const interests = Object.keys(this.userData.interests || {}).filter(
      (key) => this.userData.interests[key]
    );

    if (interests.length > 0) {
      const randomInterest =
        interests[Math.floor(Math.random() * interests.length)];
      return {
        text: `${randomInterest} hakkında bilgi almak ister misiniz?`,
        options: ["Evet, bilgi ver", "Hayır, teşekkürler", "Başka bir konu"],
      };
    }

    return {
      text: "Size nasıl yardımcı olabilirim?",
      options: ["Bilgi Al", "Destek", "Demo İste"],
    };
  }

  private handleOptionSelection(option: string): {
    text: string;
    options?: string[];
  } {
    switch (option) {
      case "Bilgi Al":
        return {
          text: "Hangi konu hakkında bilgi almak istersiniz?",
          options: ["Ürünler", "Hizmetler", "Fiyatlandırma"],
        };
      case "Destek":
        return {
          text: "Size hangi konuda destek olabilirim?",
          options: ["Teknik Destek", "Satış Desteği", "Genel Sorular"],
        };
      case "Demo İste":
        return {
          text: "Hangi ürünümüzün demosunu görmek istersiniz?",
          options: ["AI Asistan", "Analitik Platform", "CRM Çözümü"],
        };
      default:
        return {
          text: "Başka nasıl yardımcı olabilirim?",
          options: ["Bilgi Al", "Destek", "Demo İste"],
        };
    }
  }
}
