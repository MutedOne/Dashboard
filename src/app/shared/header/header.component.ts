import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isActiveSearch:boolean = true

  checkActive(){
    if(this.isActiveSearch == true){
      this.isActiveSearch = false
      return
    }else{
      this.isActiveSearch = true
    }
  }
}
