import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  constructor() {
    this.loadScripts();
  }

  ngOnInit(): void {
  }
  loadScripts() {
    const dynamicScripts = [
      '../assets/js/icons/feather-icon/feather.min.js',
      '../assets/js/icons/feather-icon/feather-icon.js',
      '../assets/js/sidebar-menu.js',
      '../assets/js/chart/chartist/chartist.js',
      '../assets/js/chart/chartjs/chart.min.js',
      '../assets/js/prism/prism.min.js',
      '../assets/js/clipboard/clipboard.min.js',
      '../assets/js/custom-card/custom-card.js',
      '../assets/js/counter/jquery.waypoints.min.js',
      '../assets/js/counter/jquery.counterup.min.js',
      '../assets/js/counter/counter-custom.js',
      '../assets/js/chart/peity-chart/peity.jquery.js',
      '../assets/js/chart/sparkline/sparkline.js',
,      '../assets/js/dashboard/default.js',
      '../assets/js/chat-menu.js',
      '../assets/js/height-equal.js',
      '../assets/js/lazysizes.min.js',
      '../assets/js/admin-script.js',

      '../../../../assets/js/console.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
