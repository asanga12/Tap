 
import { Component, NgZone } from '@angular/core';
import { WateringService } from '../watering.service'
import { Plant, Message } from '../Model/plant.model';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  title = 'ClientApp';
  txtMessage: string = '';
  uniqueID: string = new Date().getTime().toString();
  messages = new Array<Plant>();
  message = new Message();
  constructor(
    private service: WateringService,
    private _ngZone: NgZone
  ) {
    this.subscribeToEvents();
  }
  sendMessage(): void {
    if (this.txtMessage) {
      var p = new Plant();
      p.plantid = 99;
      p.lastwatered = new Date();
      this.message = new Message();
      this.message.clientuniqueid = this.uniqueID;
      this.message.type = "sent";
      this.message.message = this.txtMessage;
      this.message.date = new Date();
      this.messages.push(p);
     
      this.service.sendMessage(p);
      this.txtMessage = '';
    }
  }
  private subscribeToEvents(): void {

    this.service.messageReceived.subscribe((message: Plant) => {
      this._ngZone.run(() => {
  
        this.messages.push(message);
      });
    });
  }  

  public incrementCounter() {
    this.currentCount++;
  }
}
