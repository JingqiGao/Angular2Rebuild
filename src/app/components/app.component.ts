import { Component } from '@angular/core';
import {IDbConnection, IDatabase} from '../interface/IDbConnection';
import {IFileStatus, Status} from '../interface/IFileStatus';
import {IConnectionProfile} from '../interface/IConnectionProfile';
import {IConnectionProfileDetail} from '../interface/IConnectionProfileDetail';

@Component({
  selector: 'my-app',
  templateUrl: './app/components/client.component.html'
})
export class ClientComponent {
    selectedConnInfoStr: String;
    selectedConnInfo: IConnectionProfile = {profileName: '', _id: 0};
    conectionInfoList: IConnectionProfile[] = [];

    onSelectedChanged(event: any){
    	// tslint:disable-next-line:indent
    	this.selectedConnInfo = this.conectionInfoList.find(o => o.profileName === this.selectedConnInfoStr);
	}


	//connect with select profile
	// tslint:disable-next-line:indent
	//connectWithSelected(){
		// let self = this;
		// this.service.GetConnectionDetailsById(self.selectedConnInfo._id).then(
		// 			data=>{
		// 				self.dbConnection.server = data.server;
		// 				self.dbConnection.userName = data.userName;
		// 				self.dbConnection.password = data.password;
		// 				let connection:IDbConnection = {
		// 					server: data.server,
		// 					userName: data.userName,
		// 					password: data.password,
		// 					databases: []
		// 				}
		// 				self.onConnect(connection).then(()=>{
		// 					self.selectedDatabase = data.database;	
		// 				});
						
						
		// 			});					
								
	//}

	//deleteSelected(){
		// let self = this;
		// this.service.deleteConnectionInfoByName(this.selectedConnInfo.profileName)
		// 	.then(
		// 	() => {
		// 		self.loadConnectionInfo();				
		// 		if (self.conectionInfoList.length > 0)
		// 			self.selectedConnInfo = self.conectionInfoList[0];
		// 		this.clientAlert.addAlert({
		// 			message: 'Connection Info successfully deleted.',
		// 			type: 'success'
		// 		});
		// 	},
		// 	err => {
		// 		this.clientAlert.addAlert({
		// 			message: 'Error during delete connection info:' + err,
		// 			type: 'danger'
		// 		});
		// 	}
		// 	);
	//}

}
