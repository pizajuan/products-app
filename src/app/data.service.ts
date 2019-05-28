import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb() {

    const products: Product[] =  [
      {
        quantity: 308,
        price: '$8,958',
        availability: false,
        name: 'aute',
        id: '58b5a5b1b6b6c7aacc25b3fb'
      },
      {
        quantity: 2,
        price: '$5,450',
        availability: true,
        name: 'mollit',
        id: '58b5a5b117bf36cf8aed54ab'
      },
      {
        quantity: 698,
        price: '$17,001',
        availability: false,
        name: 'eiusmod',
        id: '58b5a5b18607b1071fb5ab5b'
      },
      {
        quantity: 449,
        price: '$6,864',
        availability: true,
        name: 'proident',
        id: '58b5a5b13881e97291384813'
      },
      {
        quantity: 736,
        price: '$13,253',
        availability: false,
        name: 'laboris',
        id: '58b5a5b1b82dc20c7dd52260'
      },
      {
        quantity: 850,
        price: '$10,930',
        availability: false,
        name: 'anim',
        id: '58b5a5b1996384dbbc556718'
      },
      {
        quantity: 644,
        price: '$16,972',
        availability: true,
        name: 'duis',
        id: '58b5a5b17326875fe21aebc1'
      },
      {
        quantity: 722,
        price: '$6,904',
        availability: true,
        name: 'sunt',
        id: '58b5a5b1ac8306b5d1d3d5fd'
      },
      {
        quantity: 620,
        price: '$13,813',
        availability: true,
        name: 'reprehenderit',
        id: '58b5a5b1f9ebd51b88636467'
      },
      {
        quantity: 297,
        price: '$14,552',
        availability: true,
        name: 'non',
        id: '58b5a5b1a20b39205ba99c50'
      },
      {
        quantity: 514,
        price: '$11,042',
        availability: false,
        name: 'dolor',
        id: '58b5a5b11f741600608205ca'
      },
      {
        quantity: 887,
        price: '$17,532',
        availability: true,
        name: 'dolor',
        id: '58b5a5b1ef62cb996bb87c45'
      },
      {
        quantity: 202,
        price: '$6,174',
        availability: true,
        name: 'enim',
        id: '58b5a5b1a089200683925a83'
      },
      {
        quantity: 700,
        price: '$1,904',
        availability: false,
        name: 'ad',
        id: '58b5a5b12d7859f999ecccf1'
      },
      {
        quantity: 343,
        price: '$14,388',
        availability: false,
        name: 'ullamco',
        id: '58b5a5b1563189cbccc9adc7'
      },
      {
        quantity: 435,
        price: '$6,809',
        availability: false,
        name: 'mollit',
        id: '58b5a5b18f0d9e833ed59bcd'
      },
      {
        quantity: 104,
        price: '$9,341',
        availability: true,
        name: 'aute',
        id: '58b5a5b18041ec3e1f95de07'
      },
      {
        quantity: 888,
        price: '$3,793',
        availability: true,
        name: 'magna',
        id: '58b5a5b1b88a817e7b059cba'
      },
      {
        quantity: 888,
        price: '$13,110',
        availability: false,
        name: 'aliqua',
        id: '58b5a5b1c9a8564521717e20'
      },
      {
        quantity: 724,
        price: '$5,827',
        availability: true,
        name: 'irure',
        id: '58b5a5b1da0b4a52b88fc9f9'
      },
      {
        quantity: 119,
        price: '$14,457',
        availability: false,
        name: 'nulla',
        id: '58b5a5b1762f69a24c1b3026'
      },
      {
        quantity: 104,
        price: '$1,449',
        availability: false,
        name: 'elit',
        id: '58b5a5b10448a50924813126'
      },
      {
        quantity: 296,
        price: '$9,619',
        availability: false,
        name: 'ea',
        id: '58b5a5b1404bba7aeef39ef8'
      },
      {
        quantity: 585,
        price: '$18,849',
        availability: true,
        name: 'occaecat',
        id: '58b5a5b1abd8ab6045ca08cc'
      },
      {
        quantity: 936,
        price: '$2,843',
        availability: true,
        name: 'quis',
        id: '58b5a5b116513baf9ffc5444'
      },
      {
        quantity: 399,
        price: '$12,902',
        availability: false,
        name: 'jagsd',
        id: '58b5a5b17ab1bf66a2c7b61b'
      },
      {
        quantity: 735,
        price: '$9,048',
        availability: false,
        name: 'nostrud',
        id: '58b5a5b1d99c26ea37cb738c'
      },
      {
        quantity: 116,
        price: '$1,482',
        availability: false,
        name: 'reprehenderit',
        id: '58b5a5b186acbed348266f1c'
      },
      {
        quantity: 649,
        price: '$5,673',
        availability: true,
        name: 'voluptate',
        id: '58b5a5b1b00bd95c14066c8b'
      },
      {
        quantity: 839,
        price: '$3,767',
        availability: false,
        name: 'est',
        id: '58b5a5b18f96294f880390c3'
      },
      {
        quantity: 706,
        price: '$17,417',
        availability: true,
        name: 'aliqua',
        id: '58b5a5b17e64c90c960eb3c7'
      },
      {
        quantity: 566,
        price: '$5,023',
        availability: false,
        name: 'eu',
        id: '58b5a5b1bba25641557222f1'
      },
      {
        quantity: 331,
        price: '$9,972',
        availability: false,
        name: 'Lorem',
        id: '58b5a5b174071d8ab7ca7ee1'
      },
      {
        quantity: 975,
        price: '$10,987',
        availability: false,
        name: 'exercitation',
        id: '58b5a5b1c2935d0602b9ccc5'
      },
      {
        quantity: 340,
        price: '$7,533',
        availability: true,
        name: 'quis',
        id: '58b5a5b17b4c47445bf6a234'
      },
      {
        quantity: 543,
        price: '$18,332',
        availability: false,
        name: 'ad',
        id: '58b5a5b1c2b40cb8d3976126'
      },
      {
        quantity: 687,
        price: '$15,006',
        availability: true,
        name: 'proident',
        id: '58b5a5b1b7b2382511968d1e'
      },
      {
        quantity: 217,
        price: '$8,651',
        availability: true,
        name: 'asdfhgf',
        id: '58b5a5b11d6d4b1ec9db971c'
      },
      {
        quantity: 466,
        price: '$8,376',
        availability: false,
        name: 'laborum',
        id: '58b5a5b1e26c8f68850e2ceb'
      },
      {
        quantity: 922,
        price: '$8,732',
        availability: true,
        name: 'non',
        id: '58b5a5b13163243d012fb89a'
      },
      {
        quantity: 553,
        price: '$6,444',
        availability: false,
        name: 'labore',
        id: '58b5a5b1f3bf845c50e56244'
      },
      {
        quantity: 859,
        price: '$9,423',
        availability: true,
        name: 'qui',
        id: '58b5a5b1d24839bdfbc43800'
      },
      {
        quantity: 842,
        price: '$5,653',
        availability: true,
        name: 'eiusmod',
        id: '58b5a5b14a40d79ef80972fe'
      },
      {
        quantity: 967,
        price: '$15,468',
        availability: true,
        name: 'mollit',
        id: '58b5a5b17c36901b87f4f85a'
      },
      {
        quantity: 102,
        price: '$17,712',
        availability: true,
        name: 'consequat',
        id: '58b5a5b12cd2fb555a91652b'
      },
      {
        quantity: 240,
        price: '$2,192',
        availability: true,
        name: 'enim',
        id: '58b5a5b13bc95b01816c05b1'
      },
      {
        quantity: 994,
        price: '$18,523',
        availability: true,
        name: 'occaecat',
        id: '58b5a5b12bf26721f9eb7666'
      },
      {
        quantity: 429,
        price: '$12,909',
        availability: false,
        name: 'elit',
        id: '58b5a5b1ffde2a73491feb07'
      },
      {
        quantity: 597,
        price: '$14,970',
        availability: true,
        name: 'sint',
        id: '58b5a5b1c60cafd804b3bfc9'
      },
      {
        quantity: 898,
        price: '$9,091',
        availability: true,
        name: 'in',
        id: '58b5a5b148f556bae5c7d094'
      },
      {
        quantity: 410,
        price: '$5,525',
        availability: false,
        name: 'excepteur',
        id: '58b5a5b1ba6292fc572e9aaf'
      },
      {
        quantity: 176,
        price: '$15,789',
        availability: false,
        name: 'irure',
        id: '58b5a5b1f58fc52adfda923b'
      },
      {
        quantity: 198,
        price: '$15,502',
        availability: false,
        name: 'dolore',
        id: '58b5a5b137ecc41faaea9240'
      },
      {
        quantity: 835,
        price: '$10,050',
        availability: false,
        name: 'ad',
        id: '58b5a5b1b64b6d32f2c76262'
      },
      {
        quantity: 144,
        price: '$6,603',
        availability: false,
        name: 'pariatur',
        id: '58b5a5b12c5ceb44d1462659'
      },
      {
        quantity: 977,
        price: '$18,389',
        availability: false,
        name: 'duis',
        id: '58b5a5b13d958af8c892213b'
      },
      {
        quantity: 806,
        price: '$2,056',
        availability: false,
        name: 'ut',
        id: '58b5a5b11a61d1be3c7314ec'
      },
      {
        quantity: 639,
        price: '$4,262',
        availability: true,
        name: 'aliquip',
        id: '58b5a5b19b7d5b4d3f844ade'
      },
      {
        quantity: 767,
        price: '$10,651',
        availability: true,
        name: 'aliqua',
        id: '58b5a5b147af435dcecd4c7e'
      },
      {
        quantity: 758,
        price: '$16,235',
        availability: false,
        name: 'mnbfdfgh',
        id: '58b5a5b1101a59975b4c30b2'
      },
      {
        quantity: 546,
        price: '$5,982',
        availability: true,
        name: 'non',
        id: '58b5a5b13f6e3eef1f16b817'
      },
      {
        quantity: 592,
        price: '$7,678',
        availability: false,
        name: 'reprehenderit',
        id: '58b5a5b18dbb3f02cb1629f5'
      },
      {
        quantity: 945,
        price: '$17,532',
        availability: false,
        name: 'tempor',
        id: '58b5a5b19212e84560bfd56a'
      },
      {
        quantity: 307,
        price: '$9,036',
        availability: false,
        name: 'non',
        id: '58b5a5b1c89c18d8ccc31f5a'
      },
      {
        quantity: 378,
        price: '$13,615',
        availability: false,
        name: 'pariatur',
        id: '58b5a5b136fe73b240c6bd7a'
      },
      {
        quantity: 346,
        price: '$7,621',
        availability: false,
        name: 'reprehenderit',
        id: '58b5a5b1cc7575c1f6358150'
      },
      {
        quantity: 150,
        price: '$14,842',
        availability: true,
        name: 'aliquip',
        id: '58b5a5b1be154bf75f25dec5'
      },
      {
        quantity: 905,
        price: '$17,876',
        availability: false,
        name: 'veniam',
        id: '58b5a5b144f5f4fa8c040060'
      },
      {
        quantity: 717,
        price: '$6,521',
        availability: false,
        name: 'magna',
        id: '58b5a5b1f5c3bb7704c16a2d'
      },
      {
        quantity: 235,
        price: '$2,504',
        availability: true,
        name: 'tempor',
        id: '58b5a5b1b37cd67f8371b4e3'
      }
    ];

    return {products};

   }
}
