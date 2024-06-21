import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { EmpleadorService } from './../../services/empleador.service';
import { Component, inject } from '@angular/core';
import { EmpleadorRequest } from '../../models/empleador-request.model';

@Component({
  selector: 'app-registro-empleador',
  templateUrl: './registro-empleador.component.html',
  styleUrl: './registro-empleador.component.css'
})
export class RegistroEmpleadorComponent {

  private empleadorService = inject(EmpleadorService);
  private formBuilder = inject(NonNullableFormBuilder);

  empleadorForm = this.formBuilder.group({
    nombreEmp: ['', Validators.required],
    rubro: ['', Validators.required],
    emailEmp: ['', Validators.required],
  });

  get nombreEmpField(){
    return this.empleadorForm.value.nombreEmp;
  }

  get rubroField(){
    return this.empleadorForm.value.rubro;
  }

  get emailEmpField(){
    return this.empleadorForm.value.emailEmp;
  }

  registerEmpleador(): void{

    const empleadorRequest: EmpleadorRequest= {
     nombreEmp : this.empleadorForm.value.nombreEmp,
     rubro : this.empleadorForm.value.rubro,
     emailEmp : this.empleadorForm.value.emailEmp,
    };
    
    console.log(empleadorRequest);
    
    this.empleadorService.create(empleadorRequest).subscribe({
      next: (data)=>{
        console.log(data);
        
      },error:(e)=> console.error(e)
    });
  
  }

}
