import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelloWorldService } from '../hello-world.service';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message :string ;

  constructor(private route: ActivatedRoute,
    private router: Router, private helloWorldService: HelloWorldService) { }

  ngOnInit()
  {
    console.log("HelloWorldComponent");
    this.helloWorldService.executeHelloWorldService().subscribe((res) => {
      this.message = res.content;
    });
  }
}
