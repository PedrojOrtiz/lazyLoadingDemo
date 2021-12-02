import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import {shareReplay, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const obs = interval(1000).pipe(
      take(5),
      tap(i => console.log(i)),
      //shareReplay()
    );
    obs.subscribe(value => console.log("observer 1 received " + value));

    //obs.subscribe(value => console.log("observer 2 received " + value));

  }

}
