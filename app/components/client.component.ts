import { Component } from '@angular/core';
import {IDbConnection, IDatabase} from '../interface/IDbConnection';
import {IFileStatus, Status} from '../interface/IFileStatus';
import {IConnectionProfile} from '../interface/IConnectionProfile';
import {IConnectionProfileDetail} from '../interface/IConnectionProfileDetail';
import {MigrationService} from '../services/migration.Service';


@Component({
  selector: 'migration-app',
  templateUrl:'./app/components/client.component.html',
  styleUrls:['./app/components/client.component.css']
})
export class ClientComponent {
  selectedConnInfoStr: String = 'Test';
  selectedConnInfo: IConnectionProfile = null;
  connectionInfoList: IConnectionProfile[];

  constructor(private migrationService: MigrationService) { }

    ngOnInit() {
      this.migrationService.LoadConnectionInfoList().then(response => this.connectionInfoList = response);
    }
    
    onSelected(connInfo: IConnectionProfile): void {
      this.selectedConnInfo = connInfo;
    }
}
