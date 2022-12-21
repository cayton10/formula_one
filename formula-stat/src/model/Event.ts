import { Circuit } from "./Circuit"
import { Stage } from "./Stage"

export interface Event {
    id: string,
    description: string,
    scheduled: Date,
    scheduled_end: Date,
    type?: string,
    single_event: boolean
    circuit: Circuit,
    stages?: Array<Stage>
}