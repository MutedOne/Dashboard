import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ToogleSignals } from '../../signals/toggleSignals';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isActiveSearch:boolean = true
  isActiveGroupNav:boolean = true
  screenWidth: number = 0;
 

  constructor(public toggleSignals: ToogleSignals){

  }
  ngOnInit() {
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth=(event.target as Window).innerWidth
    
    if(this.screenWidth>=992){
      this.isActiveGroupNav = true;
    }else{
      this.isActiveGroupNav = false;
    }
    
  }

  checkActive(){
    if(this.isActiveSearch == true){
      this.isActiveSearch = false
      return
    }else{
      this.isActiveSearch = true
    }
  }

  toggleSidenavmobile() {
   
    this.toggleSignals.isMobileToggleSidebar()
  }

  checkToggleMainSidenav(){
   return this.toggleSignals.getIsSidebar()
  }
   toggleMainSidenav(){
    this.toggleSignals.isToggleSidebar()
  }
}
