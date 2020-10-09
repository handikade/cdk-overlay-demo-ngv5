import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

export declare type SpeechBubbleTailPosition = 'top' | 'right' | 'bottom' | 'left';
export declare type SpeechBubbleBackgroundColor = 'blue' | 'white';

@Component({
  selector: 'paper-speech-bubble',
  templateUrl: './paper-speech-bubble.component.html',
  styleUrls: ['./paper-speech-bubble.component.css']
})
export class PaperSpeechBubbleComponent implements OnInit {
  @Input() tail_position: SpeechBubbleTailPosition = 'top';
  @Input() background_color: SpeechBubbleBackgroundColor = 'blue';

  public style_class: any = {
    'paper-speech-bubble': true,
    'paper-speech-bubble--blue-bg': true,
    'paper-speech-bubble--top-tail': true,
  }

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tail_position || changes.background_color) {
      this.reset_style();
      this.style_class[`paper-speech-bubble--${this.background_color}-bg`] = true;
      this.style_class[`paper-speech-bubble--${this.tail_position}-tail`] = true;
    }
  }

  private reset_style(): void {
    this.style_class = {
      'paper-speech-bubble': true
    };
  }
}
