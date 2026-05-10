import {z} from 'zod';

export const createToDoSchema = z.object({
    name: z.string().min(4),
   done: z.boolean()
   
})
