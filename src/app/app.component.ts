import { Component } from '@angular/core';
import { DbService } from './services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevOps_Maturity_Assitant';
  constructor(public _dbService: DbService) { }
  toggleSidebar() {
      this._dbService.isSidebarOpen = !this._dbService.isSidebarOpen
  }
}
