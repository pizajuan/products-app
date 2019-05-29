import { Component, OnInit } from '@angular/core';
import { ProductFilters, ProductSorts } from '../product.model';

interface ISelectedChip {
  chipKey: string;
  chipValue: any;
}

interface ShowFilters {
  quantity?: boolean;
  availability?: boolean;
  name?: boolean;
  price?: boolean;
}


@Component({
  selector: 'app-filters-component',
  templateUrl: './filters-component.component.html',
  styleUrls: ['./filters-component.component.scss']
})

export class FiltersComponentComponent implements OnInit {

  filterChips: ISelectedChip[] = [];
  sortChips: ISelectedChip[] = [];
  productFilters: ProductFilters = {};
  productSorts: ProductSorts = {};

  showFilters: ShowFilters = {};
  showSorts: boolean = true;

  constructor() { }

  ngOnInit() {
    // this.selectedChips = [{chipKey: 'quantity', chipValue: 12}, {chipKey: 'availability', chipValue: true}];
    // this.sortChips = [{chipKey: 'quantity', chipValue: 'ASC'}, {chipKey: 'name', chipValue: 'DESC'}];
    this.initializeShowFilters();
    this.initializeProductFilters();
  }

  initializeShowFilters() {
    this.showFilters.availability = true;
    this.showFilters.name = true;
    this.showFilters.quantity = true;
    this.showFilters.price = true;
  }

  initializeProductFilters() {
    this.productFilters.price = {};
    this.productFilters.quantity = {};
  }

  onRemoveChip(chip: ISelectedChip) {
    console.log('elimino esta chip', chip);
    this.filterChips = this.filterChips.filter(x => x.chipKey !== chip.chipKey);
    if (chip.chipKey === 'quantity' || chip.chipKey === 'price' ) {
      this.productFilters[chip.chipKey] = {};
    } else {
      delete this.productFilters[chip.chipKey];
    }
    this.showFilters[chip.chipKey] = true;
    console.log('product filters', this.productFilters);
  }

  addFilter(chipKeyIn) {
    console.log(chipKeyIn);
    console.log('product filters', this.productFilters);
    if (chipKeyIn === 'quantity' || chipKeyIn === 'price' ) {
      const chipValueShow = this.productFilters[chipKeyIn].range + '' + this.productFilters[chipKeyIn].number;
      this.filterChips.push({chipKey: chipKeyIn, chipValue: chipValueShow });
    } else {
      this.filterChips.push({chipKey: chipKeyIn, chipValue: this.productFilters[chipKeyIn]});
    }
    this.showFilters[chipKeyIn] = false;
  }

  addSort(chipKeyIn) {
    this.sortChips.push({chipKey: chipKeyIn, chipValue: this.productSorts[chipKeyIn]});
    console.log('product sorts', this.productSorts);
    this.showSorts = false;
  }

  onRemoveSortChip(chip: ISelectedChip) {
    console.log('elimino esta chip', chip);
    this.sortChips = this.sortChips.filter(x => x.chipKey !== chip.chipKey);
    delete this.productSorts[chip.chipKey];
    this.showSorts = true;
    console.log('product sorts', this.sortChips);
  }
}
