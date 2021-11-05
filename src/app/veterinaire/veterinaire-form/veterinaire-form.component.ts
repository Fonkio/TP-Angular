import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VeterinaireService} from "../../shared/api/veterinaire.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Veterinaire} from "../../shared/model/Veterinaire";

@Component({
  selector: 'app-veterinaire-form',
  templateUrl: './veterinaire-form.component.html',
  styleUrls: ['./veterinaire-form.component.scss']
})
export class VeterinaireFormComponent implements OnInit {

  vetFormGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private veterinaireService: VeterinaireService,
              private router: Router) { }

  ngOnInit(): void {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');
    if (paramId) {
      this.veterinaireService.getVeterinaire(Number(paramId)).subscribe((data) => {
        this.initForm(data);
      });
    } else {
      this.initForm();
    }
  }
  onSubmit(): void {
    if (this.vetFormGroup.valid) {
      const onSave = () => {
        this.router.navigate(['/vet']);
      };
      const model = this.vetFormGroup.value;
      if (model.id) {
        this.veterinaireService.updateVeterinaire(model).subscribe(onSave);
      } else {
        this.veterinaireService.createVeterinaire(model).subscribe(onSave);
      }
    }
  }

  private initForm(model?: Veterinaire): void {
    this.vetFormGroup = new FormGroup({
      id: new FormControl(model?.id),
      firstName: new FormControl(model?.firstName, Validators.required),
      lastName: new FormControl(model?.lastName, Validators.required),
    });
  }

}
