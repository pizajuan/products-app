import { Component, OnInit } from '@angular/core';
import { ProductFilters, ProductSorts } from '../product.model';
import { ProductsComunicationService } from '../products-comunication.service';

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

  constructor(
    private productsComunicationService: ProductsComunicationService,
    ) { }

  ngOnInit() {
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
    this.filterChips = this.filterChips.filter(x => x.chipKey !== chip.chipKey);
    if (chip.chipKey === 'quantity' || chip.chipKey === 'price' ) {
      this.productFilters[chip.chipKey] = {};
    } else {
      delete this.productFilters[chip.chipKey];
    }
    this.showFilters[chip.chipKey] = true;
    this.productsComunicationService.productFiltersChanged(this.productFilters);
  }

  addFilter(chipKeyIn) {
    if (chipKeyIn === 'quantity' || chipKeyIn === 'price' ) {
      const chipValueShow = this.productFilters[chipKeyIn].range + '' + this.productFilters[chipKeyIn].number;
      this.filterChips.push({chipKey: chipKeyIn, chipValue: chipValueShow });
    } else {
      this.filterChips.push({chipKey: chipKeyIn, chipValue: this.productFilters[chipKeyIn]});
    }
    this.showFilters[chipKeyIn] = false;
    this.productsComunicationService.productFiltersChanged(this.productFilters);
  }

  addSort(chipKeyIn) {
    this.sortChips.push({chipKey: chipKeyIn, chipValue: this.productSorts[chipKeyIn]});
    this.showSorts = false;
    this.productsComunicationService.productSortsChanged(this.productSorts);
  }

  onRemoveSortChip(chip: ISelectedChip) {
    this.sortChips = this.sortChips.filter(x => x.chipKey !== chip.chipKey);
    delete this.productSorts[chip.chipKey];
    this.showSorts = true;
    this.productsComunicationService.productSortsChanged(this.productSorts);
  }
}
