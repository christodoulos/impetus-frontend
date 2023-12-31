import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAboutComponent } from '../modals/about/about.component';
import { ModalHelpComponent } from '../modals/help/help.component';
import { ModalHeatmapsComponent } from '../modals/heatmaps/heatmaps.component';
import { ApnplcModalComponent } from '../modals/apnplc/apnplc.component';
import { FarmairModalComponent } from '../modals/farmair/farmair.component';
import { SubsolModalComponent } from '../modals/subsol/subsol.component';
import { ModalNotLoggedinComponent } from '../modals/not-loggedin/not-loggedin.component';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  constructor(private modalService: NgbModal) {}

  showAbout() {
    this.modalService.open(ModalAboutComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
    });
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

  showNotLoggedIn() {
    this.modalService.open(ModalNotLoggedinComponent, {
      size: 'sm',
      centered: true,
    });
  }
}
