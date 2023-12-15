import { ActivityType } from "./activityType";
import { Monitor } from "./monitor";

export interface Activity{
    id:number,
    activity_type:ActivityType,
    monitors:Monitor[],
    date_start:string,
    date_end:string

}