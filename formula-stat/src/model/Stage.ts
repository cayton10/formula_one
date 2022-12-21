export interface Stage {
    id: string,
    description: string,
    scheduled: string,
    scheduled_end: string,
    type?: string,
    single_event: boolean
    stages?: Array<Stage>
}