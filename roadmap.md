# Authentication — Practical Learning Roadmap

**Goal:** Understand how modern authentication works by progressively building an educational authentication library, rather than treating authentication as a black box.

**Approach:** Learn concepts as they become necessary → implement them → experiment with edge cases → verify understanding through tests.

**Tech stack:** TypeScript, Vite+, React, Hono, SQLite, Vitest, and additional libraries introduced when needed.

**Architecture:** One repository. Authentication logic remains independent of React and Hono. React acts as an interactive playground, while Hono provides HTTP endpoints for experimentation.

## Pathway

1. [ ] **Initialize the authentication laboratory**
   1. [ ] Create a single Vite+ repository containing a minimal React frontend and Hono backend.
   2. [ ] Build a simple interface for sending requests and displaying responses.
   3. [ ] Experiment with HTTP methods, headers, status codes, and request/response bodies using browser DevTools.
   4. [ ] Explore HTTP statelessness, cookies, redirects, and the purpose of HTTPS through small experiments.

2. [ ] **Build password authentication and sessions**
   1. [ ] Create a registration endpoint, introducing the distinctions between identity, authentication, and authorization.
   2. [ ] Introduce SQLite to persist users and their credentials.
   3. [ ] Explore hashing, encryption, and salts, then implement password hashing using Argon2id.
   4. [ ] Implement password verification and a login endpoint, testing correct and incorrect credentials.
   5. [ ] Investigate why successful login alone cannot maintain authentication across subsequent HTTP requests.
   6. [ ] Introduce server-side sessions and session IDs, then implement session creation and persistence.
   7. [ ] Introduce `Set-Cookie` and `Cookie` headers, then implement cookie-based authentication.
   8. [ ] Explore `HttpOnly`, `Secure`, `SameSite`, and cookie expiration through browser experiments.
   9. [ ] Implement a protected endpoint and display the authenticated user's identity in React.
   10. [ ] Implement session expiration, logout, and server-side session invalidation.
   11. [ ] Test invalid credentials, duplicate accounts, missing sessions, expired sessions, and revoked sessions.
   12. [ ] Understand basic CSRF (Cross-Site Request Forgery) and XSS (Cross-Site Scripting) risks and their relationship to cookie security.

3. [ ] **Introduce authorization**
   1. [ ] Create two test users and demonstrate that authentication doesn't automatically grant access to every resource.
   2. [ ] Implement a simple protected resource belonging to a particular user.
   3. [ ] Introduce resource ownership and permission checks, then prevent users from accessing each other's resources.
   4. [ ] Experiment with `401 Unauthorized` and `403 Forbidden`, understanding when each applies.
   5. [ ] Understand why authorization must be enforced by the backend rather than relying on frontend checks.

4. [ ] **Build token-based authentication**
   1. [ ] Introduce bearer tokens and compare them with cookie-based sessions.
   2. [ ] Implement an endpoint accepting an opaque access token through the `Authorization` header.
   3. [ ] Introduce access-token expiration and refresh tokens, then implement a minimal token-refresh flow.
   4. [ ] Understand token revocation, refresh-token rotation, and the security implications of stolen tokens.
   5. [ ] Introduce JWT (JSON Web Token), exploring its header, payload, signature, and common claims.
   6. [ ] Use `jose` to generate and verify signed JWTs, introducing JWT-based access tokens as an alternative to opaque tokens.
   7. [ ] Test tampered, expired, and incorrectly signed JWTs, including incorrect issuer and audience claims.
   8. [ ] Compare JWTs, opaque tokens, and server-side sessions, including their trade-offs and appropriate use cases.
   9. [ ] Explore where browser applications should store tokens and why sensitive tokens generally shouldn't be placed in `localStorage`.

5. [ ] **Understand and integrate OAuth 2.0**
   1. [ ] Introduce delegated authorization by examining why an application might need limited access to a user's resources held by another service.
   2. [ ] Identify the four OAuth roles: resource owner, client, authorization server, and resource server.
   3. [ ] Introduce client IDs, client secrets, scopes, consent, and redirect URIs while preparing an OAuth client.
   4. [ ] Walk through the Authorization Code Flow step by step, tracing requests, redirects, and authorization-code exchanges.
   5. [ ] Introduce PKCE (Proof Key for Code Exchange) and the `state` parameter, explaining the attacks they help prevent.
   6. [ ] Implement a minimal OAuth client integration using an established library and a suitable provider or test server, without implementing an authorization server.
   7. [ ] Use the resulting access token to request a permitted resource from the provider.
   8. [ ] Experiment with invalid authorization codes, expired codes, incorrect redirect URIs, denied permissions, and PKCE verification failures.

6. [ ] **Understand and integrate OpenID Connect (OIDC)**
   1. [ ] Explore why OAuth alone doesn't standardize user authentication and how OIDC extends it.
   2. [ ] Introduce identity providers, ID tokens, and the `openid` scope.
   3. [ ] Implement Sign in with Google using OIDC and an established client library.
   4. [ ] Trace the complete login process, including redirects, authorization codes, token exchange, and ID-token validation.
   5. [ ] Understand token signatures, issuers, audiences, expiration, and provider public keys through the validation process.
   6. [ ] Connect the authenticated Google identity to a local user account and session.
   7. [ ] Understand the basics of Single Sign-On (SSO) and the distinction between local sessions and provider sessions.
   8. [ ] Experiment with logout, expired sessions, invalid identity tokens, and attempts to link an external identity to the wrong local account.

7. [ ] **Consolidate everything learned**
   1. [ ] Review how password authentication, server-side sessions, JWTs, OAuth, and OIDC differ and relate to one another.
   2. [ ] Draw a complete flow diagram for each major authentication mechanism.
   3. [ ] Verify the implemented mechanisms using automated tests and browser experiments.
   4. [ ] Examine an established authentication solution such as Logto and identify how its components correspond to the mechanisms learned.
   5. [ ] Explain independently how a modern application's authentication works, from login through authentication persistence, authorization, token expiration, and logout.
