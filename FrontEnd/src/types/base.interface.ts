export interface IBaseMeta{
    total: number;
    page: number;
    take: number;
    pages: number,
}
export interface IBaseResponse<T>{
    data: T[];
    meta: IBaseMeta
}
