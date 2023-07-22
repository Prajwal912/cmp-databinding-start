import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css'],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.None is used to remove the view encapsulation of the dom to remove
  // the wierd attribute in the selector css -- it has no shadow dom the style can apply to any elem if no class is given
})
export class ServerComponentComponent implements OnInit {
  @Input('serverComp') element:{type:string, name:string, content:string};

  constructor() { }

  ngOnInit(): void {
  }


}
