import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QuoteModel } from './GetQuote.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  model = new QuoteModel('', '', '');

  ngAfterContentInit(): void {
    eval('ApplyGiftSliders()');
  }

  ngOnInit(): void {
  }

  public onSubmit(event: any) {
    var _parent = $('#quote-form');
    this.ValidateInput(_parent);

    if (_parent.find('input.invalid,select.invalid,checkbox.invalid').length > 0) {
      event.preventDefault();
    }
    else {      
      this.router.navigate(['details'], { relativeTo: this.route });
    }    
  }

  ValidateInput(_parent: any) {
    _parent.find('input.required,select.required,input.required-check').each(function (index: any, item: any) {
      var v = $(item).val();      
      if (v == null || v == "" || v == undefined) {
        $(item).addClass('invalid');
      }
      else {
        $(item).removeClass('invalid');        
      }
    });
  }
}
