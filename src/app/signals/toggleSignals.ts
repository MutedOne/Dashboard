import { Injectable, signal, WritableSignal } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ToogleSignals {
     isMobileSidebar:WritableSignal<boolean>  = signal(true);
     isSidebar:WritableSignal<boolean>  = signal(true);
     isMobileToggleSidebar(){
        if(this.isMobileSidebar()){
            this.isMobileSidebar.set(false);
        }else{
            this.isMobileSidebar.set(true);
        }
     }
     getIsMobileSidebar(){
       return this.isMobileSidebar()
     }

      isToggleSidebar(){
        if(this.isSidebar()){
            this.isSidebar.set(false);
        }else{
            this.isSidebar.set(true);
        }


     }

      getIsSidebar(){
       return this.isSidebar()
     }
}
  