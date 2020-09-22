interface TimeDuration {
    startTime: Date;
    endTime: Date;
}

export interface WorkDay {
    mon: TimeDuration;
    tue: TimeDuration;
    wed: TimeDuration;
    thr: TimeDuration;
    fri: TimeDuration;
    sat: TimeDuration;
    sun: TimeDuration;
}

export interface PriceRange {
    lowestPrice: number;
    highestPrice: number;
}
