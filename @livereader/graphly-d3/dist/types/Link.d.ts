import { Node } from "./Node";
export interface D3Link {
    source: string | Node;
    target: string | Node;
    index?: number;
    i?: number;
}
export declare enum LinkType {
    Solid = "solid",
    Dashed = "dashed",
    Dotted = "dotted",
    Hidden = "hidden"
}
export declare enum LinkStrength {
    Strong = "strong",
    Weak = "weak",
    Loose = "loose"
}
export interface Link extends D3Link {
    id?: string;
    type?: LinkType;
    directed?: boolean;
    label?: string;
    strength?: number | LinkStrength;
    padding?: number;
    width?: number;
    curvature?: number;
    payload?: any;
}
