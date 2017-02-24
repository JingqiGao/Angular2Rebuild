import { Component } from '@angular/core';
import {IDbConnection, IDatabase} from '../interface/IDbConnection';
import {IFileStatus, Status} from '../interface/IFileStatus';
import {IConnectionProfile} from '../interface/IConnectionProfile';
import {IConnectionProfileDetail} from '../interface/IConnectionProfileDetail';
//import {MigrationService} from '../services/migration.Service';


@Component({
  selector: 'my-app',
  templateUrl: './app/components/client.component.html'
})
export class ClientComponent {
    selectedConnInfoStr: String = "Test";
    selectedConnInfo: IConnectionProfile = {profileName: '', id: 0};
    connectionInfoList: IConnectionProfile[] = [{profileName: 'Test1', id: 1}, {profileName: 'Test2', id: 2}, {profileName: 'Test3', id: 3}];

    onSelectedChanged(event: any){
    	// tslint:disable-next-line:indent
    	this.selectedConnInfo = this.connectionInfoList.find(o => o.profileName === this.selectedConnInfoStr);
	}




}
