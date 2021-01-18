import { GenericCard } from './generic-card';
import { SecurityQuestion } from './security-question';

export interface DataCard extends GenericCard {
    "security questions": SecurityQuestion[];
}
