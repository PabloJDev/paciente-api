import { Injectable, NotFoundException } from '@nestjs/common';
import { Paciente } from './paciente.interface';

@Injectable()
export class PacienteService {
  private pacientes: Paciente[] = [];

  create(paciente: Paciente): Paciente {
    this.pacientes.push(paciente);
    return paciente;
  }

  findAll(): Paciente[] {
    return this.pacientes;
  }

  findByCpf(cpf: string): Paciente {
    const paciente = this.pacientes.find((p) => p.cpf === cpf);

    if (!paciente) {
      throw new NotFoundException(`Paciente com CPF ${cpf} não encontrado`);
    }

    return paciente;
  }
}
