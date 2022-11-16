import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckStorageService } from 'src/app/services/check-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public checkStorage: CheckStorageService, private router: Router) { }

  ngOnInit(): void {
    this.checkStorage.storageInfo();
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/register']);
    this.checkStorage.storageInfo();
  }

}
