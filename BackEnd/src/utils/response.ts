export class BaseTableResponse<T> {
    data:T[]
    meta:{
        total : number;
        page: number;
        take: number;
        pages: number;
    };

    constructor(data: T[] = [], total = 0, page = 1, take = 10) {
    this.data = data;
    this.meta = {
      total,
      page,
      take,
      pages: Math.ceil(total / take) || 0,
    };
  }
}

export class BaseResponse {
  message: string;
  confirmacion: boolean;

  constructor(message: string, confirmacion: boolean){
    this.confirmacion = confirmacion;
    this.message = message;
  }
}

