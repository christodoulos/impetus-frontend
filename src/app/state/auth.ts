import { SocialUser } from '@abacritt/angularx-social-login';

interface AuthState {
  loggedIn: boolean;
  user: SocialUser | null;
}
