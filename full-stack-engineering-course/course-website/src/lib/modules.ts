import { modules } from '../data/modules';
import { Module } from '../types';

export function getAllModules(): Module[] {
  return modules;
}

export function getModuleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function getModulesByPhase(phase: string): Module[] {
  return modules.filter((m) => m.phase === phase);
}

export function getAllPhases(): string[] {
  const phases = new Set(modules.map((m) => m.phase));
  return Array.from(phases);
}
