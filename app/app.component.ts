import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { gsap, Back, Bounce, Elastic } from 'gsap'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  ngOnInit() {
    this.animation();
    /*
    if animation is not working in the click() try out the code like below
    var tween = gsap.to(".box1", 3, { x: 200,background:"red", ease: Elastic.easeOut, paused: true })
    document.getElementById("go").onclick = () => tween.play();
  */
  }


 onClick(){
  gsap.to(".box1", 3, { x: 200,background:"red", ease: Elastic.easeOut,  })
 }
  

  animation() {
    gsap.to(".main .box", 3, { x: 200, stagger: 0.3, ease: Bounce.easeOut })
  }



}
