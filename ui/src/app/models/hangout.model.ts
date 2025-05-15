import { UserModel } from "./user.model";

export interface HangoutModel {
    id: number;
    name: string;
    description: string;
    created_by: UserModel;
    created_at: Date;
    is_active: boolean;
    members: UserModel[];
    members_count: number;
}