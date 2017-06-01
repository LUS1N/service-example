import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CommunicateService {

  // source of change
  private newStringSource = new Subject<string>();

  // observable
  public stringCreated = this.newStringSource.asObservable();

  public sendNewString(newString: string): void {
    // broadcasts the new data to every listener
    this.newStringSource.next(newString);
  }
}
