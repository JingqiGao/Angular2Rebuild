import { Component, Input } from '@angular/core';
import {IConnectionProfile} from '../interface/IConnectionProfile';
import {IConnectionProfileDetail} from '../interface/IConnectionProfileDetail';
@Component({
  selector: 'connection-detail',
  templateUrl: './app/components/client-detail.component.html'
})
export class ClientDetailComponent {
  @Input()
  connInfo: IConnectionProfile;
}