import { Component, OnInit} from '@angular/core';
import { ToogleSignals } from '../../signals/toggleSignals';

@Component({
  selector: 'app-sidenav',
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent  {
  istest:Boolean =false
  constructor(public toggleSignals: ToogleSignals){
   
  }
  toogleSidebar(){
    this.toggleSignals.isToggleSidebar()
  }
  checkToggle(){
    return this.toggleSignals.getIsSidebar()
  }
 
  checkToogleMobile(){
    return this.istest = this.toggleSignals.getIsMobileSidebar()
  }
}
