import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    fun(): string {
        return "hello admin";
    }
}
