import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOption: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  choose(opt){
    this.menuOption = opt;
    if (opt === 1)
      this.router.navigate(['/categories']);
    else if (opt === 2)
      this.router.navigate(['/lists']);
    else if (opt === 3)
      this.router.navigate(['/items']);
  }
}
