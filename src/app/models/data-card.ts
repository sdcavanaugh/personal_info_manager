import { GenericCard } from './generic-card';
import { SecurityQuestion } from './security-question';

export interface DataCard extends GenericCard {
    category: string;
    "security questions": SecurityQuestion[];
}
