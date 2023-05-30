import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets'
import {Observable} from 'rxjs'

@WebSocketGateway({
  cors: true
})
export class EventsGateway {

  // @WebSocketServer() server;

  @SubscribeMessage('events')
  onEvent(client: any, payload: any) : Observable<any> | any {
    console.log('onEvent', payload)
    return {
      message: 123
    }
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
