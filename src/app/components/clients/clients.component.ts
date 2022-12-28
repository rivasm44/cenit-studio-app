import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-clients',
	templateUrl: './clients.component.html',
	styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
	clients: any;

	ngOnInit(): void {
		this.clients = [
			{
				id: '1',
				src: '../../../assets/image/clients/client.png'
			},
			{
				id: '2',
				src: '../../../assets/image/clients/client.png'
			},
			{
				id: '3',
				src: '../../../assets/image/clients/client.png'
			},
			{
				id: '4',
				src: '../../../assets/image/clients/client.png'
			},
			{
				id: '5',
				src: '../../../assets/image/clients/client.png'
			},
			{
				id: '6',
				src: '../../../assets/image/clients/client.png'
			}
		];
	}
}
