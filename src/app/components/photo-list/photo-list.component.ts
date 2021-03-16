import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoListService } from '../../services/photo-list.service';
import { IPic } from '../../models/Pic';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  constructor(private photoList: PhotoListService) {}

  // properties
  public pics$!: Observable<IPic[]>;
  public pics = [] as any;

  // fetch pics
  public getPics(): void {
    this.photoList.getPics().subscribe((data) => {
      this.pics = data;
      console.log('bloop:', data);
    });
  }

  ngOnInit(): void {
    this.getPics();
  }
}
