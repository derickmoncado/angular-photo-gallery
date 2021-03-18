import { Component, OnInit } from '@angular/core';
import { IPic } from '../../models/Pic';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { PhotoListService } from '../../services/photo-list.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  constructor(
    private photoList: PhotoListService,
    private modalService: NgbModal
  ) {}

  // properties
  public pics$!: Observable<IPic[]>;
  public pics = [] as any;
  public closeResult!: string;

  // fetch pics
  public getPics(): void {
    this.photoList.getPics().subscribe((data) => {
      this.pics = data;
      console.log('bloop:', data);
    });
  }

  // handle modal open
  public open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  // handle modal close
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.getPics();
  }
}
