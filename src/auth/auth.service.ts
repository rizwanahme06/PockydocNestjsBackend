import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signIn() {
    return 'signIn';
  }

  signUp() {
    return 'singUp';
  }
}
