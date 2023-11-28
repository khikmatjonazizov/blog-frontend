import { User } from '@/shared/models/interfaces';

export type SessionSliceStore = {
    token: string | null;
    user: User | null;
}
