export const platformCrypto: any;
export const platformEventEmitter: typeof EventEmitter | typeof EventEmitterDummy;
import { EventEmitter } from 'events';
declare class EventEmitterDummy {
    on(): void;
    emit(): void;
    removeListener(): void;
}
export {};
