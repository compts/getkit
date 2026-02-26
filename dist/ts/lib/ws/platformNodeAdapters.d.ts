export function platformCrypto(): any;
export function platformEmitEvent(): typeof EventEmitter | typeof EventEmitterDummy;
import { EventEmitter } from 'events';
declare class EventEmitterDummy {
    on(): void;
    emit(): void;
    removeListener(): void;
}
export {};
