import { autoInjectable, registry, container, inject } from 'tsyringe';

export const Injectable = autoInjectable
export const Router = autoInjectable
export const Controller = autoInjectable
export const Service = autoInjectable
export const Repository = autoInjectable
export const Inject = inject
export const Entity = registry
export const Register = registry
export const Container = container