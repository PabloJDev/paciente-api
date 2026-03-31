import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente.interface';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() paciente: Paciente): Paciente {
    return this.pacienteService.create(paciente);
  }

  @Get()
  findAll(): Paciente[] {
    return this.pacienteService.findAll();
  }

  @Get(':cpf')
  findByCpf(@Param('cpf') cpf: string): Paciente | undefined {
    return this.pacienteService.findByCpf(cpf);
  }
}
