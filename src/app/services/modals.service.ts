import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAboutComponent } from '../modals/about/about.component';
import { ModalHelpComponent } from '../modals/help/help.component';
import { ModalHeatmapsComponent } from '../modals/heatmaps/heatmaps.component';
import { ApnplcModalComponent } from '../modals/apnplc/apnplc.component';
import { FarmairModalComponent } from '../modals/farmair/farmair.component';
import { SubsolModalComponent } from '../modals/subsol/subsol.component';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  firstTimeAbout = true;

  constructor(private modalService: NgbModal) {}

  showAbout() {
    if (this.firstTimeAbout) {
      this.firstTimeAbout = false;
      this.modalService.open(ModalAboutComponent, {
        size: 'lg',
        centered: true,
        backdrop: 'static',
      });
      this.firstTimeAbout = false;
    }
  }

  showHelp() {
    this.modalService.open(ModalHelpComponent, {
      size: 'lg',
      centered: true,
    });
  }

  showHeatMaps() {
    this.modalService.open(ModalHeatmapsComponent, {
      size: 'lg',
      centered: true,
    });
  }

  showAthensPlantNursery() {
    this.modalService.open(ApnplcModalComponent, {
      size: 'lg',
      centered: true,
    });
  }

  showFarmAir() {
    this.modalService.open(FarmairModalComponent, {
      size: 'lg',
      centered: true,
    });
  }

  showSubsol() {
    this.modalService.open(SubsolModalComponent, {
      size: 'lg',
      centered: true,
    });
  }
}
