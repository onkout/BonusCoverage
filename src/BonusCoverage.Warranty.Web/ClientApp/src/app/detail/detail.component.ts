import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SelectTab(event: any, item: any) {
    $(".accordion").removeClass('active');
    $('div.panel').css('max-height', '0px');
    $(event.target).addClass("active");
    $(event.target).next('div.panel').addClass('active');
    $(event.target).next('div.panel').css('max-height', $(event.target).next('div.panel').prop('scrollHeight'));
  }

  MoveNext(event: any) {
    var _parent = $(event.target).closest('.panel');
    this.ValidateInput(_parent);
    if (_parent.find('input.invalid,select.invalid,checkbox.invalid').length > 0) {
      event.preventDefault();
    }
    else {
      _parent.next('.accordion').trigger('click');
    }
  }

  SubmitDetail(event: any) {
    var _parent = $(event.target).closest('.tabcontent');
    this.ValidateInput(_parent);

    if (_parent.find('input.invalid,select.invalid,checkbox.invalid').length > 0) {
      event.preventDefault();
    }
    else {
      alert('API call goes here...');
    }

    event.preventDefault();
  }

  ValidateInput(_parent: any) {
    _parent.find('input.required,select.required,input.required-check').each(function (index: any, item: any) {
      var v = $(item).val();
      
      if ($(item).is(":checkbox") && !$(item).is(":checked")) {
        $(item).addClass('invalid');
      }
      else if (!$(item).is(":checkbox") && (v == null || v == "" || v == undefined)) {
        $(item).addClass('invalid');
      }
      else {        
        $(item).removeClass('invalid');
        if ($(item).is(":checkbox")) { $(item).val("1"); }
      }
    });
  }
}
