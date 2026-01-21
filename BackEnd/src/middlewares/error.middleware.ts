import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.message);
  console.error(req);
  console.error(next);
  res.status(500).json({
    message: 'Internal server error',
    error: err.message,
  });
};
