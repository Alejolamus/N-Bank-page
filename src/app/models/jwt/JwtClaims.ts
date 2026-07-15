export interface JwtClaims {
  id: string;
  name: string;
  sub: string;
  jti: string;
  iat: string;

  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
}