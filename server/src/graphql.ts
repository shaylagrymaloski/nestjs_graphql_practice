
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Time {
    hour?: number;
    min?: number;
    sec?: number;
}

export interface IQuery {
    time(): Time | Promise<Time>;
}
