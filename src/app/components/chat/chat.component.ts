import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { conversationTree } from '../../data/conversation-tree';
import { Step } from '../models/step.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';

interface ChatMessage {
  text: string;
  sender: 'bot' | 'user';
  options?: string[];
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastrModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  messages: ChatMessage[] = [];
  newMessage: string = '';
  botName: string = 'Fikret';
  isTyping = false;
  currentStep: Step;

  constructor(private toastr: ToastrService) {}
  ngOnInit() {
    this.currentStep = conversationTree(this.botName);
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
    this.addBotMessage(
      this.currentStep.text,
      this.shuffleOptions(this.currentStep.options)
    );
  }

  sendMessage() {
    if (this.newMessage.trim() && !this.isTyping) {
      this.messages.push({
        text: this.newMessage,
        sender: 'user',
        timestamp: new Date(),
      });
      this.newMessage = '';

      this.isTyping = true;
      setTimeout(() => {
        const response = this.handleOptionSelection(
          this.currentStep.options[0]
        );
        this.addBotMessage(
          response.text,
          this.shuffleOptions(response.options)
        );
        this.isTyping = false;
      }, 1500);
    }
  }

  selectOption(option: string) {
    this.messages.push({
      text: option,
      sender: 'user',
      timestamp: new Date(),
    });

    this.isTyping = true;
    setTimeout(() => {
      const response = this.handleOptionSelection(option);
      this.addBotMessage(response.text, this.shuffleOptions(response.options));
      this.isTyping = false;
    }, 1000);
  }

  private addBotMessage(text: string, options?: string[]) {
    if (text.startsWith('Harika!')) {
      this.toastr.success(
        'Roadmap oluşturuldu! Profilinde detayları görebilirsin.',
        'Efsane Oldu!'
      );
    }

    if (text.startsWith('Başvurun tamamlandı!')) {
      this.toastr.success(
        'Başvurun tamamlandı! Müthiş bir etkinlik seni bekliyor!',
        'Harika!'
      );
    }

    this.messages.push({
      text,
      sender: 'bot',
      options,
      timestamp: new Date(),
    });
  }

  private generateResponse(): { text: string; options?: string[] } {
    // Default response if no specific logic is needed
    return {
      text: 'Size nasıl yardımcı olabilirim?',
      options: ['Bilgi Al', 'Destek', 'Diğer'],
    };
  }

  private handleOptionSelection(option: string): {
    text: string;
    options?: string[];
  } {
    if (this.currentStep.nextSteps && this.currentStep.nextSteps[0]) {
      this.currentStep = this.currentStep.nextSteps[0];
      return {
        text: this.currentStep.text,
        options: this.currentStep.options,
      };
    }

    return {
      text: 'Size nasıl yardımcı olabilirim?',
      options: ['Bilgi Al', 'Destek', 'Diğer'],
    };
  }

  shuffleOptions(options: string[]) {
    return options?.sort(() => Math.random() - 0.5);
  }
}
