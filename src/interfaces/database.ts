/* the interface that shape the data of an entity */
export interface DataEntity {
    id: string;
    sprite : SpriteShape;
    collision : {
        x: number;
        y: number;
        width: number;
        height: number;
    }
}
/* the interface that shape the data of an actor */
export interface DataActor extends DataEntity {
    name: string;
    profile: string;
}

export interface SpriteShape {
    filename: string;
    index: number;
    fps: number;
}
