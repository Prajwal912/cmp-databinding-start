import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>()
 @Output() bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>()

 //by using the viewchild we can access the local refrences without paasing the argument in the html file
 @ViewChild('serverContentInput') serverContentInp: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  // newServerName = '';
  // newServerContent = '';

  onAddServer(refName:HTMLInputElement) {
    // console.log(serverNameInput)//to get the full ele
    // console.log(serverNameInput.value)//to get the full ele value
    this.serverCreated.emit({
      serverName: refName.value,
      serverContent: this.serverContentInp.nativeElement.value,
    })

  }

  onAddBlueprint(refName:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: refName.value,
      serverContent: this.serverContentInp.nativeElement.value
    })
  }

}
