/*! For license information please see ug4nu.64.678ef41b.chunk.js.LICENSE.txt */

!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0208c435-2dd7-518c-b63d-01642b24aa83");
  } catch (e) {}
}();
export const id = 64;
export const ids = [64];
export const modules = {
  24060: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      ActionCodeOperation: () => QH,
      ActionCodeURL: () => bI,
      AuthCredential: () => aI,
      AuthErrorCodes: () => MH,
      EmailAuthCredential: () => wI,
      EmailAuthProvider: () => xI,
      FacebookAuthProvider: () => RE,
      FactorId: () => GH,
      GithubAuthProvider: () => TE,
      GoogleAuthProvider: () => hE,
      OAuthCredential: () => tI,
      OAuthProvider: () => EE,
      OperationType: () => YH,
      PhoneAuthCredential: () => vI,
      PhoneAuthProvider: () => Ih,
      PhoneMultiFactorGenerator: () => HT,
      ProviderId: () => AH,
      RecaptchaVerifier: () => tR,
      SAMLAuthProvider: () => eE,
      SignInMethod: () => VH,
      TotpMultiFactorGenerator: () => IT,
      TotpSecret: () => RT,
      TwitterAuthProvider: () => GE,
      applyActionCode: () => CE,
      beforeAuthStateChanged: () => hR,
      browserLocalPersistence: () => ih,
      browserPopupRedirectResolver: () => bh,
      browserSessionPersistence: () => PR,
      checkActionCode: () => cE,
      confirmPasswordReset: () => kR,
      connectAuthEmulator: () => WI,
      createUserWithEmailAndPassword: () => WE,
      debugErrorMap: () => OH,
      deleteUser: () => AR,
      fetchSignInMethodsForEmail: () => pE,
      getAdditionalUserInfo: () => HR,
      getAuth: () => YT,
      getIdToken: () => wH,
      getIdTokenResult: () => zH,
      getMultiFactorResolver: () => QR,
      getRedirectResult: () => mT,
      inMemoryPersistence: () => eI,
      indexedDBLocalPersistence: () => fR,
      initializeAuth: () => UI,
      initializeRecaptchaConfig: () => ER,
      isSignInWithEmailLink: () => aE,
      linkWithCredential: () => XE,
      linkWithPhoneNumber: () => bR,
      linkWithPopup: () => Yh,
      linkWithRedirect: () => Xh,
      multiFactor: () => rR,
      onAuthStateChanged: () => TR,
      onIdTokenChanged: () => RR,
      parseActionCodeURL: () => SI,
      prodErrorMap: () => rH,
      reauthenticateWithCredential: () => mR,
      reauthenticateWithPhoneNumber: () => SR,
      reauthenticateWithPopup: () => Vh,
      reauthenticateWithRedirect: () => Ph,
      reload: () => HI,
      sendEmailVerification: () => dE,
      sendPasswordResetEmail: () => oE,
      sendSignInLinkToEmail: () => fE,
      setPersistence: () => IR,
      signInAnonymously: () => QE,
      signInWithCredential: () => PE,
      signInWithCustomToken: () => ZE,
      signInWithEmailAndPassword: () => BE,
      signInWithEmailLink: () => nE,
      signInWithPhoneNumber: () => vR,
      signInWithPopup: () => Ah,
      signInWithRedirect: () => Dh,
      signOut: () => GR,
      unlink: () => FE,
      updateCurrentUser: () => eR,
      updateEmail: () => KE,
      updatePassword: () => wE,
      updatePhoneNumber: () => Hh,
      updateProfile: () => lE,
      useDeviceLanguage: () => sR,
      verifyBeforeUpdateEmail: () => uE,
      verifyPasswordResetCode: () => UE
    });
    var RH = EH(24049),
      hH = EH(24032);
    function TH(HH, IH) {
      var EH = {};
      for (var RH in HH) Object.prototype.hasOwnProperty.call(HH, RH) && IH.indexOf(RH) < 0 && (EH[RH] = HH[RH]);
      if (null != HH && "function" === typeof Object.getOwnPropertySymbols) {
        var hH = 0;
        for (RH = Object.getOwnPropertySymbols(HH); hH < RH.length; hH++) IH.indexOf(RH[hH]) < 0 && Object.prototype.propertyIsEnumerable.call(HH, RH[hH]) && (EH[RH[hH]] = HH[RH[hH]]);
      }
      return EH;
    }
    Object.create;
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var sH = EH(24054),
      eH = EH(24040);
    const GH = {
        PHONE: "phone",
        TOTP: "totp"
      },
      AH = {
        FACEBOOK: "facebook.com",
        GITHUB: "github.com",
        GOOGLE: "google.com",
        PASSWORD: "password",
        PHONE: "phone",
        TWITTER: "twitter.com"
      },
      VH = {
        EMAIL_LINK: "emailLink",
        EMAIL_PASSWORD: "password",
        FACEBOOK: "facebook.com",
        GITHUB: "github.com",
        GOOGLE: "google.com",
        PHONE: "phone",
        TWITTER: "twitter.com"
      },
      YH = {
        LINK: "link",
        REAUTHENTICATE: "reauthenticate",
        SIGN_IN: "signIn"
      },
      QH = {
        EMAIL_SIGNIN: "EMAIL_SIGNIN",
        PASSWORD_RESET: "PASSWORD_RESET",
        RECOVER_EMAIL: "RECOVER_EMAIL",
        REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
        VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
        VERIFY_EMAIL: "VERIFY_EMAIL"
      };
    function JH() {
      return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
      };
    }
    const OH = function () {
        return {
          "admin-restricted-operation": "This operation is restricted to administrators only.",
          "argument-error": "",
          "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
          "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
          "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
          "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
          "cordova-not-ready": "Cordova framework is not ready.",
          "cors-unsupported": "This browser is not supported.",
          "credential-already-in-use": "This credential is already associated with a different user account.",
          "custom-token-mismatch": "The custom token corresponds to a different audience.",
          "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
          "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
          "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
          "email-change-needs-verification": "Multi-factor users must always have a verified email.",
          "email-already-in-use": "The email address is already in use by another account.",
          "emulator-config-failed": 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
          "expired-action-code": "The action code has expired.",
          "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
          "internal-error": "An internal AuthError has occurred.",
          "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
          "invalid-app-id": "The mobile app identifier is not registed for the current project.",
          "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
          "invalid-auth-event": "An internal AuthError has occurred.",
          "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
          "invalid-continue-uri": "The continue URL provided in the request is invalid.",
          "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
          "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
          "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
          "invalid-email": "The email address is badly formatted.",
          "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).",
          "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
          "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
          "invalid-credential": "The supplied auth credential is malformed or has expired.",
          "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
          "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
          "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
          "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
          "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
          "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
          "wrong-password": "The password is invalid or the user does not have a password.",
          "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
          "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
          "invalid-provider-id": "The specified provider ID is invalid.",
          "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
          "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
          "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
          "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
          "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
          "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
          "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
          "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
          "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
          "missing-continue-uri": "A continue URL must be provided in the request.",
          "missing-iframe-start": "An internal AuthError has occurred.",
          "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
          "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
          "missing-password": "A non-empty password must be provided",
          "missing-multi-factor-info": "No second factor identifier is provided.",
          "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
          "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
          "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
          "app-deleted": "This instance of FirebaseApp has been deleted.",
          "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
          "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
          "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
          "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
          "no-auth-event": "An internal AuthError has occurred.",
          "no-such-provider": "User was not linked to an account with the given provider.",
          "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
          "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
          "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
          "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
          "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
          "provider-already-linked": "User can only be linked to one identity for the given provider.",
          "quota-exceeded": "The project's quota for this operation has been exceeded.",
          "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
          "redirect-operation-pending": "A redirect sign-in operation is already pending.",
          "rejected-credential": "The request contains malformed or mismatching credentials.",
          "second-factor-already-in-use": "The second factor is already enrolled on this account.",
          "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
          "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
          timeout: "The operation has timed out.",
          "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
          "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
          "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
          "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
          "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
          "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
          "unverified-email": "The operation requires a verified email.",
          "user-cancelled": "The user did not grant your application the permissions it requested.",
          "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
          "user-disabled": "The user account has been disabled by an administrator.",
          "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
          "user-signed-out": "",
          "weak-password": "The password must be 6 characters long or more.",
          "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.",
          "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
          "missing-recaptcha-token": "The reCAPTCHA token is missing when sending request to the backend.",
          "invalid-recaptcha-token": "The reCAPTCHA token is invalid when sending request to the backend.",
          "invalid-recaptcha-action": "The reCAPTCHA action is invalid when sending request to the backend.",
          "recaptcha-not-enabled": "reCAPTCHA Enterprise integration is not enabled for this project.",
          "missing-client-type": "The reCAPTCHA client type is missing when sending request to the backend.",
          "missing-recaptcha-version": "The reCAPTCHA version is missing when sending request to the backend.",
          "invalid-req-type": "Invalid request parameters.",
          "invalid-recaptcha-version": "The reCAPTCHA version is invalid when sending request to the backend."
        };
      },
      rH = JH,
      FH = new RH.f("auth", "Firebase", {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
      }),
      MH = {
        ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
        ARGUMENT_ERROR: "auth/argument-error",
        APP_NOT_AUTHORIZED: "auth/app-not-authorized",
        APP_NOT_INSTALLED: "auth/app-not-installed",
        CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
        CODE_EXPIRED: "auth/code-expired",
        CORDOVA_NOT_READY: "auth/cordova-not-ready",
        CORS_UNSUPPORTED: "auth/cors-unsupported",
        CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
        CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
        DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
        DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
        EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
        EMAIL_EXISTS: "auth/email-already-in-use",
        EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
        EXPIRED_OOB_CODE: "auth/expired-action-code",
        EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
        INTERNAL_ERROR: "auth/internal-error",
        INVALID_API_KEY: "auth/invalid-api-key",
        INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
        INVALID_APP_ID: "auth/invalid-app-id",
        INVALID_AUTH: "auth/invalid-user-token",
        INVALID_AUTH_EVENT: "auth/invalid-auth-event",
        INVALID_CERT_HASH: "auth/invalid-cert-hash",
        INVALID_CODE: "auth/invalid-verification-code",
        INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
        INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
        INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
        INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
        INVALID_EMAIL: "auth/invalid-email",
        INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
        INVALID_IDP_RESPONSE: "auth/invalid-credential",
        INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
        INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
        INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
        INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
        INVALID_OOB_CODE: "auth/invalid-action-code",
        INVALID_ORIGIN: "auth/unauthorized-domain",
        INVALID_PASSWORD: "auth/wrong-password",
        INVALID_PERSISTENCE: "auth/invalid-persistence-type",
        INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
        INVALID_PROVIDER_ID: "auth/invalid-provider-id",
        INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
        INVALID_SENDER: "auth/invalid-sender",
        INVALID_SESSION_INFO: "auth/invalid-verification-id",
        INVALID_TENANT_ID: "auth/invalid-tenant-id",
        MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
        MFA_REQUIRED: "auth/multi-factor-auth-required",
        MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
        MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
        MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
        MISSING_CODE: "auth/missing-verification-code",
        MISSING_CONTINUE_URI: "auth/missing-continue-uri",
        MISSING_IFRAME_START: "auth/missing-iframe-start",
        MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
        MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
        MISSING_MFA_INFO: "auth/missing-multi-factor-info",
        MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
        MISSING_PHONE_NUMBER: "auth/missing-phone-number",
        MISSING_SESSION_INFO: "auth/missing-verification-id",
        MODULE_DESTROYED: "auth/app-deleted",
        NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
        NETWORK_REQUEST_FAILED: "auth/network-request-failed",
        NULL_USER: "auth/null-user",
        NO_AUTH_EVENT: "auth/no-auth-event",
        NO_SUCH_PROVIDER: "auth/no-such-provider",
        OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
        OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
        POPUP_BLOCKED: "auth/popup-blocked",
        POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
        PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
        QUOTA_EXCEEDED: "auth/quota-exceeded",
        REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
        REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
        REJECTED_CREDENTIAL: "auth/rejected-credential",
        SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
        TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
        TIMEOUT: "auth/timeout",
        TOKEN_EXPIRED: "auth/user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
        UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
        UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
        UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
        UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
        UNVERIFIED_EMAIL: "auth/unverified-email",
        USER_CANCELLED: "auth/user-cancelled",
        USER_DELETED: "auth/user-not-found",
        USER_DISABLED: "auth/user-disabled",
        USER_MISMATCH: "auth/user-mismatch",
        USER_SIGNED_OUT: "auth/user-signed-out",
        WEAK_PASSWORD: "auth/weak-password",
        WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
        ALREADY_INITIALIZED: "auth/already-initialized",
        RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
        MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
        INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
        INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
        MISSING_CLIENT_TYPE: "auth/missing-client-type",
        MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
        INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
        INVALID_REQ_TYPE: "auth/invalid-req-type"
      },
      NH = new sH.d("@firebase/auth");
    function iI(HH) {
      if (NH.logLevel <= sH.c.ERROR) {
        for (var IH = arguments.length, EH = new Array(IH > 1 ? IH - 1 : 0), RH = 1; RH < IH; RH++) EH[RH - 1] = arguments[RH];
        NH.error("Auth (".concat(hH.g, "): ").concat(HH), ...EH);
      }
    }
    function DH(HH) {
      for (var IH = arguments.length, EH = new Array(IH > 1 ? IH - 1 : 0), RH = 1; RH < IH; RH++) EH[RH - 1] = arguments[RH];
      throw ZH(HH, ...EH);
    }
    function PH(HH) {
      for (var IH = arguments.length, EH = new Array(IH > 1 ? IH - 1 : 0), RH = 1; RH < IH; RH++) EH[RH - 1] = arguments[RH];
      return ZH(HH, ...EH);
    }
    function XH(HH, IH, EH) {
      const hH = Object.assign(Object.assign({}, rH()), {
        [IH]: EH
      });
      return new RH.f("auth", "Firebase", hH).create(IH, {
        appName: HH.name
      });
    }
    function mI(HH, IH, EH) {
      if (!(IH instanceof EH)) throw EH.name !== IH.constructor.name && DH(HH, "argument-error"), XH(HH, "argument-error", "Type of ".concat(IH.constructor.name, " does not match expected instance.") + "Did you pass a reference from a different Auth SDK?");
    }
    function ZH(HH) {
      for (var IH = arguments.length, EH = new Array(IH > 1 ? IH - 1 : 0), RH = 1; RH < IH; RH++) EH[RH - 1] = arguments[RH];
      if ("string" !== typeof HH) {
        const IH = EH[0],
          RH = [...EH.slice(1)];
        return RH[0] && (RH[0].appName = HH.name), HH._errorFactory.create(IH, ...RH);
      }
      return FH.create(HH, ...EH);
    }
    function qH(HH, IH) {
      if (!HH) {
        for (var EH = arguments.length, RH = new Array(EH > 2 ? EH - 2 : 0), hH = 2; hH < EH; hH++) RH[hH - 2] = arguments[hH];
        throw ZH(IH, ...RH);
      }
    }
    function LH(HH) {
      const IH = "INTERNAL ASSERTION FAILED: " + HH;
      throw iI(IH), new Error(IH);
    }
    function gH(HH, IH) {
      HH || LH(IH);
    }
    function yH() {
      var HH;
      return "undefined" !== typeof self && (null === (HH = self.location) || void 0 === HH ? void 0 : HH.href) || "";
    }
    function oH() {
      return "http:" === kI() || "https:" === kI();
    }
    function kI() {
      var HH;
      return "undefined" !== typeof self && (null === (HH = self.location) || void 0 === HH ? void 0 : HH.protocol) || null;
    }
    class CH {
      constructor(HH, IH) {
        this.shortDelay = HH, this.longDelay = IH, gH(IH > HH, "Short delay should be less than long delay!"), this.isMobile = (0, RH.X)() || (0, RH.Z)();
      }
      get() {
        return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (oH() || (0, RH.M)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay;
      }
    }
    function cH(HH, IH) {
      gH(HH.emulator, "Emulator should always be set here");
      const {
        url: EH
      } = HH.emulator;
      return IH ? "".concat(EH).concat(IH.startsWith("/") ? IH.slice(1) : IH) : EH;
    }
    class UH {
      static initialize(HH, IH, EH) {
        this.fetchImpl = HH, IH && (this.headersImpl = IH), EH && (this.responseImpl = EH);
      }
      static fetch() {
        return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void LH("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static headers() {
        return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void LH("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static response() {
        return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void LH("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
    }
    const WH = {
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_PASSWORD: "wrong-password",
        MISSING_PASSWORD: "missing-password",
        EMAIL_EXISTS: "email-already-in-use",
        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
        INVALID_IDP_RESPONSE: "invalid-credential",
        INVALID_PENDING_TOKEN: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
        MISSING_REQ_TYPE: "internal-error",
        EMAIL_NOT_FOUND: "user-not-found",
        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
        EXPIRED_OOB_CODE: "expired-action-code",
        INVALID_OOB_CODE: "invalid-action-code",
        MISSING_OOB_CODE: "internal-error",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token",
        TOKEN_EXPIRED: "user-token-expired",
        USER_NOT_FOUND: "user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
        INVALID_CODE: "invalid-verification-code",
        INVALID_SESSION_INFO: "invalid-verification-id",
        INVALID_TEMPORARY_PROOF: "invalid-credential",
        MISSING_SESSION_INFO: "missing-verification-id",
        SESSION_EXPIRED: "code-expired",
        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
        BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
        RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
        MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
        INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
        INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
        MISSING_CLIENT_TYPE: "missing-client-type",
        MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
        INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
        INVALID_REQ_TYPE: "invalid-req-type"
      },
      BH = new CH(3e4, 6e4);
    function fH(HH, IH) {
      return HH.tenantId && !IH.tenantId ? Object.assign(Object.assign({}, IH), {
        tenantId: HH.tenantId
      }) : IH;
    }
    async function aH(HH, IH, EH, hH) {
      return nH(HH, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, async () => {
        let TH = {},
          sH = {};
        hH && ("GET" === IH ? sH = hH : TH = {
          body: JSON.stringify(hH)
        });
        const eH = (0, RH.ab)(Object.assign({
            key: HH.config.apiKey
          }, sH)).slice(1),
          GH = await HH._getAdditionalHeaders();
        return GH["Content-Type"] = "application/json", HH.languageCode && (GH["X-Firebase-Locale"] = HH.languageCode), UH.fetch()(dH(HH, HH.config.apiHost, EH, eH), Object.assign({
          method: IH,
          headers: GH,
          referrerPolicy: "no-referrer"
        }, TH));
      });
    }
    async function nH(HH, IH, EH) {
      HH._canInitEmulator = !1;
      const hH = Object.assign(Object.assign({}, WH), IH);
      try {
        const IH = new uH(HH),
          RH = await Promise.race([EH(), IH.promise]);
        IH.clearNetworkTimeout();
        const TH = await RH.json();
        if ("needConfirmation" in TH) throw lH(HH, "account-exists-with-different-credential", TH);
        if (RH.ok && !("errorMessage" in TH)) return TH;
        {
          const IH = RH.ok ? TH.errorMessage : TH.error.message,
            [EH, sH] = IH.split(" : ");
          if ("FEDERATED_USER_ID_ALREADY_LINKED" === EH) throw lH(HH, "credential-already-in-use", TH);
          if ("EMAIL_EXISTS" === EH) throw lH(HH, "email-already-in-use", TH);
          if ("USER_DISABLED" === EH) throw lH(HH, "user-disabled", TH);
          const eH = hH[EH] || EH.toLowerCase().replace(/[_\s]+/g, "-");
          if (sH) throw XH(HH, eH, sH);
          DH(HH, eH);
        }
      } catch (TH) {
        if (TH instanceof RH.h) throw TH;
        DH(HH, "network-request-failed", {
          message: String(TH)
        });
      }
    }
    async function pH(HH, IH, EH, RH) {
      let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const TH = await aH(HH, IH, EH, RH, hH);
      return "mfaPendingCredential" in TH && DH(HH, "multi-factor-auth-required", {
        _serverResponse: TH
      }), TH;
    }
    function dH(HH, IH, EH, RH) {
      const hH = "".concat(IH).concat(EH, "?").concat(RH);
      return HH.config.emulator ? cH(HH.config, hH) : "".concat(HH.config.apiScheme, "://").concat(hH);
    }
    class uH {
      constructor(HH) {
        this.auth = HH, this.timer = null, this.promise = new Promise((HH, IH) => {
          this.timer = setTimeout(() => IH(PH(this.auth, "network-request-failed")), BH.get());
        });
      }
      clearNetworkTimeout() {
        clearTimeout(this.timer);
      }
    }
    function lH(HH, IH, EH) {
      const RH = {
        appName: HH.name
      };
      EH.email && (RH.email = EH.email), EH.phoneNumber && (RH.phoneNumber = EH.phoneNumber);
      const hH = PH(HH, IH, RH);
      return hH.customData._tokenResponse = EH, hH;
    }
    function KH(HH) {
      if (HH) try {
        const IH = new Date(Number(HH));
        if (!isNaN(IH.getTime())) return IH.toUTCString();
      } catch (IH) {}
    }
    function wH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (0, RH.G)(HH).getIdToken(IH);
    }
    async function zH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const EH = (0, RH.G)(HH),
        hH = await EH.getIdToken(IH),
        TH = jI(hH);
      qH(TH && TH.exp && TH.auth_time && TH.iat, EH.auth, "internal-error");
      const sH = "object" === typeof TH.firebase ? TH.firebase : void 0,
        eH = null === sH || void 0 === sH ? void 0 : sH.sign_in_provider;
      return {
        claims: TH,
        token: hH,
        authTime: KH(tH(TH.auth_time)),
        issuedAtTime: KH(tH(TH.iat)),
        expirationTime: KH(tH(TH.exp)),
        signInProvider: eH || null,
        signInSecondFactor: (null === sH || void 0 === sH ? void 0 : sH.sign_in_second_factor) || null
      };
    }
    function tH(HH) {
      return 1e3 * Number(HH);
    }
    function jI(HH) {
      const [IH, EH, hH] = HH.split(".");
      if (void 0 === IH || void 0 === EH || void 0 === hH) return iI("JWT malformed, contained fewer than 3 sections"), null;
      try {
        const HH = (0, RH.l)(EH);
        return HH ? JSON.parse(HH) : (iI("Failed to decode base64 JWT payload"), null);
      } catch (TH) {
        return iI("Caught error parsing JWT payload as JSON", null === TH || void 0 === TH ? void 0 : TH.toString()), null;
      }
    }
    async function vH(HH, IH) {
      if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return IH;
      try {
        return await IH;
      } catch (EH) {
        throw EH instanceof RH.h && function (HH) {
          let {
            code: IH
          } = HH;
          return IH === "auth/".concat("user-disabled") || IH === "auth/".concat("user-token-expired");
        }(EH) && HH.auth.currentUser === HH && (await HH.auth.signOut()), EH;
      }
    }
    class bH {
      constructor(HH) {
        this.user = HH, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
      }
      _start() {
        this.isRunning || (this.isRunning = !0, this.schedule());
      }
      _stop() {
        this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId));
      }
      getInterval(HH) {
        var IH;
        if (HH) {
          const HH = this.errorBackoff;
          return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), HH;
        }
        {
          this.errorBackoff = 3e4;
          const HH = (null !== (IH = this.user.stsTokenManager.expirationTime) && void 0 !== IH ? IH : 0) - Date.now() - 3e5;
          return Math.max(0, HH);
        }
      }
      schedule() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.isRunning) return;
        const IH = this.getInterval(HH);
        this.timerId = setTimeout(async () => {
          await this.iteration();
        }, IH);
      }
      async iteration() {
        try {
          await this.user.getIdToken(!0);
        } catch (HH) {
          return void ((null === HH || void 0 === HH ? void 0 : HH.code) === "auth/".concat("network-request-failed") && this.schedule(!0));
        }
        this.schedule();
      }
    }
    class SH {
      constructor(HH, IH) {
        this.createdAt = HH, this.lastLoginAt = IH, this._initializeTime();
      }
      _initializeTime() {
        this.lastSignInTime = KH(this.lastLoginAt), this.creationTime = KH(this.createdAt);
      }
      _copy(HH) {
        this.createdAt = HH.createdAt, this.lastLoginAt = HH.lastLoginAt, this._initializeTime();
      }
      toJSON() {
        return {
          createdAt: this.createdAt,
          lastLoginAt: this.lastLoginAt
        };
      }
    }
    async function xH(HH) {
      var IH;
      const EH = HH.auth,
        RH = await HH.getIdToken(),
        hH = await vH(HH, async function (HH, IH) {
          return aH(HH, "POST", "/v1/accounts:lookup", IH);
        }(EH, {
          idToken: RH
        }));
      qH(null === hH || void 0 === hH ? void 0 : hH.users.length, EH, "internal-error");
      const sH = hH.users[0];
      HH._notifyReloadListener(sH);
      const eH = (null === (IH = sH.providerUserInfo) || void 0 === IH ? void 0 : IH.length) ? sH.providerUserInfo.map(HH => {
        var {
            providerId: IH
          } = HH,
          EH = TH(HH, ["providerId"]);
        return {
          providerId: IH,
          uid: EH.rawId || "",
          displayName: EH.displayName || null,
          email: EH.email || null,
          phoneNumber: EH.phoneNumber || null,
          photoURL: EH.photoUrl || null
        };
      }) : [];
      const GH = (AH = HH.providerData, VH = eH, [...AH.filter(HH => !VH.some(IH => IH.providerId === HH.providerId)), ...VH]);
      var AH, VH;
      const YH = HH.isAnonymous,
        QH = !(HH.email && sH.passwordHash) && !(null === GH || void 0 === GH ? void 0 : GH.length),
        JH = !!YH && QH,
        OH = {
          uid: sH.localId,
          displayName: sH.displayName || null,
          photoURL: sH.photoUrl || null,
          email: sH.email || null,
          emailVerified: sH.emailVerified || !1,
          phoneNumber: sH.phoneNumber || null,
          tenantId: sH.tenantId || null,
          providerData: GH,
          metadata: new SH(sH.createdAt, sH.lastLoginAt),
          isAnonymous: JH
        };
      Object.assign(HH, OH);
    }
    async function HI(HH) {
      const IH = (0, RH.G)(HH);
      await xH(IH), await IH.auth._persistUserIfCurrent(IH), IH.auth._notifyListenersIfCurrent(IH);
    }
    class II {
      constructor() {
        this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
      }
      updateFromServerResponse(HH) {
        qH(HH.idToken, "internal-error"), qH("undefined" !== typeof HH.idToken, "internal-error"), qH("undefined" !== typeof HH.refreshToken, "internal-error");
        const IH = "expiresIn" in HH && "undefined" !== typeof HH.expiresIn ? Number(HH.expiresIn) : function (HH) {
          const IH = jI(HH);
          return qH(IH, "internal-error"), qH("undefined" !== typeof IH.exp, "internal-error"), qH("undefined" !== typeof IH.iat, "internal-error"), Number(IH.exp) - Number(IH.iat);
        }(HH.idToken);
        this.updateTokensAndExpiration(HH.idToken, HH.refreshToken, IH);
      }
      async getToken(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return qH(!this.accessToken || this.refreshToken, HH, "user-token-expired"), IH || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(HH, this.refreshToken), this.accessToken) : null : this.accessToken;
      }
      clearRefreshToken() {
        this.refreshToken = null;
      }
      async refresh(HH, IH) {
        const {
          accessToken: EH,
          refreshToken: hH,
          expiresIn: TH
        } = await async function (HH, IH) {
          const EH = await nH(HH, {}, async () => {
            const EH = (0, RH.ab)({
                grant_type: "refresh_token",
                refresh_token: IH
              }).slice(1),
              {
                tokenApiHost: hH,
                apiKey: TH
              } = HH.config,
              sH = dH(HH, hH, "/v1/token", "key=".concat(TH)),
              eH = await HH._getAdditionalHeaders();
            return eH["Content-Type"] = "application/x-www-form-urlencoded", UH.fetch()(sH, {
              method: "POST",
              headers: eH,
              body: EH
            });
          });
          return {
            accessToken: EH.access_token,
            expiresIn: EH.expires_in,
            refreshToken: EH.refresh_token
          };
        }(HH, IH);
        this.updateTokensAndExpiration(EH, hH, Number(TH));
      }
      updateTokensAndExpiration(HH, IH, EH) {
        this.refreshToken = IH || null, this.accessToken = HH || null, this.expirationTime = Date.now() + 1e3 * EH;
      }
      static fromJSON(HH, IH) {
        const {
            refreshToken: EH,
            accessToken: RH,
            expirationTime: hH
          } = IH,
          TH = new II();
        return EH && (qH("string" === typeof EH, "internal-error", {
          appName: HH
        }), TH.refreshToken = EH), RH && (qH("string" === typeof RH, "internal-error", {
          appName: HH
        }), TH.accessToken = RH), hH && (qH("number" === typeof hH, "internal-error", {
          appName: HH
        }), TH.expirationTime = hH), TH;
      }
      toJSON() {
        return {
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          expirationTime: this.expirationTime
        };
      }
      _assign(HH) {
        this.accessToken = HH.accessToken, this.refreshToken = HH.refreshToken, this.expirationTime = HH.expirationTime;
      }
      _clone() {
        return Object.assign(new II(), this.toJSON());
      }
      _performRefresh() {
        return LH("not implemented");
      }
    }
    function EI(HH, IH) {
      qH("string" === typeof HH || "undefined" === typeof HH, "internal-error", {
        appName: IH
      });
    }
    class RI {
      constructor(HH) {
        var {
            uid: IH,
            auth: EH,
            stsTokenManager: RH
          } = HH,
          hH = TH(HH, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase", this.proactiveRefresh = new bH(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = IH, this.auth = EH, this.stsTokenManager = RH, this.accessToken = RH.accessToken, this.displayName = hH.displayName || null, this.email = hH.email || null, this.emailVerified = hH.emailVerified || !1, this.phoneNumber = hH.phoneNumber || null, this.photoURL = hH.photoURL || null, this.isAnonymous = hH.isAnonymous || !1, this.tenantId = hH.tenantId || null, this.providerData = hH.providerData ? [...hH.providerData] : [], this.metadata = new SH(hH.createdAt || void 0, hH.lastLoginAt || void 0);
      }
      async getIdToken(HH) {
        const IH = await vH(this, this.stsTokenManager.getToken(this.auth, HH));
        return qH(IH, this.auth, "internal-error"), this.accessToken !== IH && (this.accessToken = IH, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), IH;
      }
      getIdTokenResult(HH) {
        return zH(this, HH);
      }
      reload() {
        return HI(this);
      }
      _assign(HH) {
        this !== HH && (qH(this.uid === HH.uid, this.auth, "internal-error"), this.displayName = HH.displayName, this.photoURL = HH.photoURL, this.email = HH.email, this.emailVerified = HH.emailVerified, this.phoneNumber = HH.phoneNumber, this.isAnonymous = HH.isAnonymous, this.tenantId = HH.tenantId, this.providerData = HH.providerData.map(HH => Object.assign({}, HH)), this.metadata._copy(HH.metadata), this.stsTokenManager._assign(HH.stsTokenManager));
      }
      _clone(HH) {
        const IH = new RI(Object.assign(Object.assign({}, this), {
          auth: HH,
          stsTokenManager: this.stsTokenManager._clone()
        }));
        return IH.metadata._copy(this.metadata), IH;
      }
      _onReload(HH) {
        qH(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = HH, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
      }
      _notifyReloadListener(HH) {
        this.reloadListener ? this.reloadListener(HH) : this.reloadUserInfo = HH;
      }
      _startProactiveRefresh() {
        this.proactiveRefresh._start();
      }
      _stopProactiveRefresh() {
        this.proactiveRefresh._stop();
      }
      async _updateTokensIfNecessary(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = !1;
        HH.idToken && HH.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(HH), EH = !0), IH && (await xH(this)), await this.auth._persistUserIfCurrent(this), EH && this.auth._notifyListenersIfCurrent(this);
      }
      async delete() {
        const HH = await this.getIdToken();
        return await vH(this, async function (HH, IH) {
          return aH(HH, "POST", "/v1/accounts:delete", IH);
        }(this.auth, {
          idToken: HH
        })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
      }
      toJSON() {
        return Object.assign(Object.assign({
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map(HH => Object.assign({}, HH)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
          apiKey: this.auth.config.apiKey,
          appName: this.auth.name
        });
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
      }
      static _fromJSON(HH, IH) {
        var EH, RH, hH, TH, sH, eH, GH, AH;
        const VH = null !== (EH = IH.displayName) && void 0 !== EH ? EH : void 0,
          YH = null !== (RH = IH.email) && void 0 !== RH ? RH : void 0,
          QH = null !== (hH = IH.phoneNumber) && void 0 !== hH ? hH : void 0,
          JH = null !== (TH = IH.photoURL) && void 0 !== TH ? TH : void 0,
          OH = null !== (sH = IH.tenantId) && void 0 !== sH ? sH : void 0,
          rH = null !== (eH = IH._redirectEventId) && void 0 !== eH ? eH : void 0,
          FH = null !== (GH = IH.createdAt) && void 0 !== GH ? GH : void 0,
          MH = null !== (AH = IH.lastLoginAt) && void 0 !== AH ? AH : void 0,
          {
            uid: NH,
            emailVerified: iI,
            isAnonymous: DH,
            providerData: PH,
            stsTokenManager: XH
          } = IH;
        qH(NH && XH, HH, "internal-error");
        const mI = II.fromJSON(this.name, XH);
        qH("string" === typeof NH, HH, "internal-error"), EI(VH, HH.name), EI(YH, HH.name), qH("boolean" === typeof iI, HH, "internal-error"), qH("boolean" === typeof DH, HH, "internal-error"), EI(QH, HH.name), EI(JH, HH.name), EI(OH, HH.name), EI(rH, HH.name), EI(FH, HH.name), EI(MH, HH.name);
        const ZH = new RI({
          uid: NH,
          auth: HH,
          email: YH,
          emailVerified: iI,
          displayName: VH,
          isAnonymous: DH,
          photoURL: JH,
          phoneNumber: QH,
          tenantId: OH,
          stsTokenManager: mI,
          createdAt: FH,
          lastLoginAt: MH
        });
        return PH && Array.isArray(PH) && (ZH.providerData = PH.map(HH => Object.assign({}, HH))), rH && (ZH._redirectEventId = rH), ZH;
      }
      static async _fromIdTokenResponse(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const RH = new II();
        RH.updateFromServerResponse(IH);
        const hH = new RI({
          uid: IH.localId,
          auth: HH,
          stsTokenManager: RH,
          isAnonymous: EH
        });
        return await xH(hH), hH;
      }
    }
    const hI = new Map();
    function TI(HH) {
      gH(HH instanceof Function, "Expected a class definition");
      let IH = hI.get(HH);
      return IH ? (gH(IH instanceof HH, "Instance stored in cache mismatched with class"), IH) : (IH = new HH(), hI.set(HH, IH), IH);
    }
    class sI {
      constructor() {
        this.type = "NONE", this.storage = {};
      }
      async _isAvailable() {
        return !0;
      }
      async _set(HH, IH) {
        this.storage[HH] = IH;
      }
      async _get(HH) {
        const IH = this.storage[HH];
        return void 0 === IH ? null : IH;
      }
      async _remove(HH) {
        delete this.storage[HH];
      }
      _addListener(HH, IH) {}
      _removeListener(HH, IH) {}
    }
    sI.type = "NONE";
    const eI = sI;
    function GI(HH, IH, EH) {
      return "firebase".concat(":", HH, ":").concat(IH, ":").concat(EH);
    }
    class AI {
      constructor(HH, IH, EH) {
        this.persistence = HH, this.auth = IH, this.userKey = EH;
        const {
          config: RH,
          name: hH
        } = this.auth;
        this.fullUserKey = GI(this.userKey, RH.apiKey, hH), this.fullPersistenceKey = GI("persistence", RH.apiKey, hH), this.boundEventHandler = IH._onStorageEvent.bind(IH), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
      }
      setCurrentUser(HH) {
        return this.persistence._set(this.fullUserKey, HH.toJSON());
      }
      async getCurrentUser() {
        const HH = await this.persistence._get(this.fullUserKey);
        return HH ? RI._fromJSON(this.auth, HH) : null;
      }
      removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey);
      }
      savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
      }
      async setPersistence(HH) {
        if (this.persistence === HH) return;
        const IH = await this.getCurrentUser();
        return await this.removeCurrentUser(), this.persistence = HH, IH ? this.setCurrentUser(IH) : void 0;
      }
      delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
      }
      static async create(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
        if (!IH.length) return new AI(TI(eI), HH, EH);
        const RH = (await Promise.all(IH.map(async HH => {
          if (await HH._isAvailable()) return HH;
        }))).filter(HH => HH);
        let hH = RH[0] || TI(eI);
        const TH = GI(EH, HH.config.apiKey, HH.name);
        let sH = null;
        for (const AH of IH) try {
          const IH = await AH._get(TH);
          if (IH) {
            const EH = RI._fromJSON(HH, IH);
            AH !== hH && (sH = EH), hH = AH;
            break;
          }
        } catch (GH) {}
        const eH = RH.filter(HH => HH._shouldAllowMigration);
        return hH._shouldAllowMigration && eH.length ? (hH = eH[0], sH && (await hH._set(TH, sH.toJSON())), await Promise.all(IH.map(async HH => {
          if (HH !== hH) try {
            await HH._remove(TH);
          } catch (GH) {}
        })), new AI(hH, HH, EH)) : new AI(hH, HH, EH);
      }
    }
    function VI(HH) {
      const IH = HH.toLowerCase();
      if (IH.includes("opera/") || IH.includes("opr/") || IH.includes("opios/")) return "Opera";
      if (OI(IH)) return "IEMobile";
      if (IH.includes("msie") || IH.includes("trident/")) return "IE";
      if (IH.includes("edge/")) return "Edge";
      if (YI(IH)) return "Firefox";
      if (IH.includes("silk/")) return "Silk";
      if (FI(IH)) return "Blackberry";
      if (MI(IH)) return "Webos";
      if (QI(IH)) return "Safari";
      if ((IH.includes("chrome/") || JI(IH)) && !IH.includes("edge/")) return "Chrome";
      if (rI(IH)) return "Android";
      {
        const IH = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
          EH = HH.match(IH);
        if (2 === (null === EH || void 0 === EH ? void 0 : EH.length)) return EH[1];
      }
      return "Other";
    }
    function YI() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)();
      return /firefox\//i.test(HH);
    }
    function QI() {
      const HH = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)()).toLowerCase();
      return HH.includes("safari/") && !HH.includes("chrome/") && !HH.includes("crios/") && !HH.includes("android");
    }
    function JI() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)();
      return /crios\//i.test(HH);
    }
    function OI() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)();
      return /iemobile/i.test(HH);
    }
    function rI() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)();
      return /android/i.test(HH);
    }
    function FI() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)();
      return /blackberry/i.test(HH);
    }
    function MI() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)();
      return /webos/i.test(HH);
    }
    function NI() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)();
      return /iphone|ipad|ipod/i.test(HH) || /macintosh/i.test(HH) && /mobile/i.test(HH);
    }
    function iE() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)();
      return NI(HH) || rI(HH) || MI(HH) || FI(HH) || /windows phone/i.test(HH) || OI(HH);
    }
    function DI(HH) {
      let IH,
        EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      switch (HH) {
        case "Browser":
          IH = VI((0, RH.I)());
          break;
        case "Worker":
          IH = "".concat(VI((0, RH.I)()), "-").concat(HH);
          break;
        default:
          IH = HH;
      }
      const TH = EH.length ? EH.join(",") : "FirebaseCore-web";
      return "".concat(IH, "/", "JsCore", "/").concat(hH.g, "/").concat(TH);
    }
    async function PI(HH, IH) {
      return aH(HH, "GET", "/v2/recaptchaConfig", fH(HH, IH));
    }
    function XI(HH) {
      return void 0 !== HH && void 0 !== HH.getResponse;
    }
    function mE(HH) {
      return void 0 !== HH && void 0 !== HH.enterprise;
    }
    class ZI {
      constructor(HH) {
        if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === HH.recaptchaKey) throw new Error("recaptchaKey undefined");
        this.siteKey = HH.recaptchaKey.split("/")[3], this.emailPasswordEnabled = HH.recaptchaEnforcementState.some(HH => "EMAIL_PASSWORD_PROVIDER" === HH.provider && "OFF" !== HH.enforcementState);
      }
    }
    function qI(HH) {
      return new Promise((IH, EH) => {
        const RH = document.createElement("script");
        RH.setAttribute("src", HH), RH.onload = IH, RH.onerror = HH => {
          const IH = PH("internal-error");
          IH.customData = HH, EH(IH);
        }, RH.type = "text/javascript", RH.charset = "UTF-8", function () {
          var HH, IH;
          return null !== (IH = null === (HH = document.getElementsByTagName("head")) || void 0 === HH ? void 0 : HH[0]) && void 0 !== IH ? IH : document;
        }().appendChild(RH);
      });
    }
    function LI(HH) {
      return "__".concat(HH).concat(Math.floor(1e6 * Math.random()));
    }
    class gI {
      constructor(HH) {
        this.type = "recaptcha-enterprise", this.auth = CI(HH);
      }
      async verify() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
          IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        function EH(IH, EH, RH) {
          const hH = window.grecaptcha;
          mE(hH) ? hH.enterprise.ready(() => {
            hH.enterprise.execute(IH, {
              action: HH
            }).then(HH => {
              EH(HH);
            }).catch(() => {
              EH("NO_RECAPTCHA");
            });
          }) : RH(Error("No reCAPTCHA enterprise script loaded."));
        }
        return new Promise((HH, RH) => {
          (async function (HH) {
            if (!IH) {
              if (null == HH.tenantId && null != HH._agentRecaptchaConfig) return HH._agentRecaptchaConfig.siteKey;
              if (null != HH.tenantId && void 0 !== HH._tenantRecaptchaConfigs[HH.tenantId]) return HH._tenantRecaptchaConfigs[HH.tenantId].siteKey;
            }
            return new Promise(async (IH, EH) => {
              PI(HH, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }).then(RH => {
                if (void 0 !== RH.recaptchaKey) {
                  const EH = new ZI(RH);
                  return null == HH.tenantId ? HH._agentRecaptchaConfig = EH : HH._tenantRecaptchaConfigs[HH.tenantId] = EH, IH(EH.siteKey);
                }
                EH(new Error("recaptcha Enterprise site key undefined"));
              }).catch(HH => {
                EH(HH);
              });
            });
          })(this.auth).then(hH => {
            if (!IH && mE(window.grecaptcha)) EH(hH, HH, RH);else {
              if ("undefined" === typeof window) return void RH(new Error("RecaptchaVerifier is only supported in browser"));
              qI("https://www.google.com/recaptcha/enterprise.js?render=" + hH).then(() => {
                EH(hH, HH, RH);
              }).catch(HH => {
                RH(HH);
              });
            }
          }).catch(HH => {
            RH(HH);
          });
        });
      }
    }
    async function yI(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const hH = new gI(HH);
      let TH;
      try {
        TH = await hH.verify(EH);
      } catch (eH) {
        TH = await hH.verify(EH, !0);
      }
      const sH = Object.assign({}, IH);
      return RH ? Object.assign(sH, {
        captchaResp: TH
      }) : Object.assign(sH, {
        captchaResponse: TH
      }), Object.assign(sH, {
        clientType: "CLIENT_TYPE_WEB"
      }), Object.assign(sH, {
        recaptchaVersion: "RECAPTCHA_ENTERPRISE"
      }), sH;
    }
    class oI {
      constructor(HH) {
        this.auth = HH, this.queue = [];
      }
      pushCallback(HH, IH) {
        const EH = IH => new Promise((EH, RH) => {
          try {
            EH(HH(IH));
          } catch (hH) {
            RH(hH);
          }
        });
        EH.onAbort = IH, this.queue.push(EH);
        const RH = this.queue.length - 1;
        return () => {
          this.queue[RH] = () => Promise.resolve();
        };
      }
      async runMiddleware(HH) {
        if (this.auth.currentUser === HH) return;
        const IH = [];
        try {
          for (const EH of this.queue) await EH(HH), EH.onAbort && IH.push(EH.onAbort);
        } catch (EH) {
          IH.reverse();
          for (const HH of IH) try {
            HH();
          } catch (RH) {}
          throw this.auth._errorFactory.create("login-blocked", {
            originalMessage: null === EH || void 0 === EH ? void 0 : EH.message
          });
        }
      }
    }
    class kE {
      constructor(HH, IH, EH, RH) {
        this.app = HH, this.heartbeatServiceProvider = IH, this.appCheckServiceProvider = EH, this.config = RH, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new cI(this), this.idTokenSubscription = new cI(this), this.beforeStateQueue = new oI(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = FH, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
          appVerificationDisabledForTesting: !1
        }, this.frameworks = [], this.name = HH.name, this.clientVersion = RH.sdkClientVersion;
      }
      _initializeWithPersistence(HH, IH) {
        return IH && (this._popupRedirectResolver = TI(IH)), this._initializationPromise = this.queue(async () => {
          var EH, RH;
          if (!this._deleted && (this.persistenceManager = await AI.create(this, HH), !this._deleted)) {
            if (null === (EH = this._popupRedirectResolver) || void 0 === EH ? void 0 : EH._shouldInitProactively) try {
              await this._popupRedirectResolver._initialize(this);
            } catch (hH) {}
            await this.initializeCurrentUser(IH), this.lastNotifiedUid = (null === (RH = this.currentUser) || void 0 === RH ? void 0 : RH.uid) || null, this._deleted || (this._isInitialized = !0);
          }
        }), this._initializationPromise;
      }
      async _onStorageEvent() {
        if (this._deleted) return;
        const HH = await this.assertedPersistence.getCurrentUser();
        return this.currentUser || HH ? this.currentUser && HH && this.currentUser.uid === HH.uid ? (this._currentUser._assign(HH), void (await this.currentUser.getIdToken())) : void (await this._updateCurrentUser(HH, !0)) : void 0;
      }
      async initializeCurrentUser(HH) {
        var IH;
        const EH = await this.assertedPersistence.getCurrentUser();
        let RH = EH,
          hH = !1;
        if (HH && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const EH = null === (IH = this.redirectUser) || void 0 === IH ? void 0 : IH._redirectEventId,
            TH = null === RH || void 0 === RH ? void 0 : RH._redirectEventId,
            sH = await this.tryRedirectSignIn(HH);
          EH && EH !== TH || !(null === sH || void 0 === sH ? void 0 : sH.user) || (RH = sH.user, hH = !0);
        }
        if (!RH) return this.directlySetCurrentUser(null);
        if (!RH._redirectEventId) {
          if (hH) try {
            await this.beforeStateQueue.runMiddleware(RH);
          } catch (TH) {
            RH = EH, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(TH));
          }
          return RH ? this.reloadAndSetCurrentUserOrClear(RH) : this.directlySetCurrentUser(null);
        }
        return qH(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === RH._redirectEventId ? this.directlySetCurrentUser(RH) : this.reloadAndSetCurrentUserOrClear(RH);
      }
      async tryRedirectSignIn(HH) {
        let IH = null;
        try {
          IH = await this._popupRedirectResolver._completeRedirectFn(this, HH, !0);
        } catch (EH) {
          await this._setRedirectUser(null);
        }
        return IH;
      }
      async reloadAndSetCurrentUserOrClear(HH) {
        try {
          await xH(HH);
        } catch (IH) {
          if ((null === IH || void 0 === IH ? void 0 : IH.code) !== "auth/".concat("network-request-failed")) return this.directlySetCurrentUser(null);
        }
        return this.directlySetCurrentUser(HH);
      }
      useDeviceLanguage() {
        this.languageCode = function () {
          if ("undefined" === typeof navigator) return null;
          const HH = navigator;
          return HH.languages && HH.languages[0] || HH.language || null;
        }();
      }
      async _delete() {
        this._deleted = !0;
      }
      async updateCurrentUser(HH) {
        const IH = HH ? (0, RH.G)(HH) : null;
        return IH && qH(IH.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(IH && IH._clone(this));
      }
      async _updateCurrentUser(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._deleted) return HH && qH(this.tenantId === HH.tenantId, this, "tenant-id-mismatch"), IH || (await this.beforeStateQueue.runMiddleware(HH)), this.queue(async () => {
          await this.directlySetCurrentUser(HH), this.notifyAuthListeners();
        });
      }
      async signOut() {
        return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && (await this._setRedirectUser(null)), this._updateCurrentUser(null, !0);
      }
      setPersistence(HH) {
        return this.queue(async () => {
          await this.assertedPersistence.setPersistence(TI(HH));
        });
      }
      async initializeRecaptchaConfig() {
        const HH = await PI(this, {
            clientType: "CLIENT_TYPE_WEB",
            version: "RECAPTCHA_ENTERPRISE"
          }),
          IH = new ZI(HH);
        if (null == this.tenantId ? this._agentRecaptchaConfig = IH : this._tenantRecaptchaConfigs[this.tenantId] = IH, IH.emailPasswordEnabled) {
          new gI(this).verify();
        }
      }
      _getRecaptchaConfig() {
        return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
      }
      _getPersistence() {
        return this.assertedPersistence.persistence.type;
      }
      _updateErrorMap(HH) {
        this._errorFactory = new RH.f("auth", "Firebase", HH());
      }
      onAuthStateChanged(HH, IH, EH) {
        return this.registerStateListener(this.authStateSubscription, HH, IH, EH);
      }
      beforeAuthStateChanged(HH, IH) {
        return this.beforeStateQueue.pushCallback(HH, IH);
      }
      onIdTokenChanged(HH, IH, EH) {
        return this.registerStateListener(this.idTokenSubscription, HH, IH, EH);
      }
      toJSON() {
        var HH;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser: null === (HH = this._currentUser) || void 0 === HH ? void 0 : HH.toJSON()
        };
      }
      async _setRedirectUser(HH, IH) {
        const EH = await this.getOrInitRedirectPersistenceManager(IH);
        return null === HH ? EH.removeCurrentUser() : EH.setCurrentUser(HH);
      }
      async getOrInitRedirectPersistenceManager(HH) {
        if (!this.redirectPersistenceManager) {
          const IH = HH && TI(HH) || this._popupRedirectResolver;
          qH(IH, this, "argument-error"), this.redirectPersistenceManager = await AI.create(this, [TI(IH._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
        }
        return this.redirectPersistenceManager;
      }
      async _redirectUserForId(HH) {
        var IH, EH;
        return this._isInitialized && (await this.queue(async () => {})), (null === (IH = this._currentUser) || void 0 === IH ? void 0 : IH._redirectEventId) === HH ? this._currentUser : (null === (EH = this.redirectUser) || void 0 === EH ? void 0 : EH._redirectEventId) === HH ? this.redirectUser : null;
      }
      async _persistUserIfCurrent(HH) {
        if (HH === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(HH));
      }
      _notifyListenersIfCurrent(HH) {
        HH === this.currentUser && this.notifyAuthListeners();
      }
      _key() {
        return "".concat(this.config.authDomain, ":").concat(this.config.apiKey, ":").concat(this.name);
      }
      _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
      }
      _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
      }
      get _currentUser() {
        return this.currentUser;
      }
      notifyAuthListeners() {
        var HH, IH;
        if (!this._isInitialized) return;
        this.idTokenSubscription.next(this.currentUser);
        const EH = null !== (IH = null === (HH = this.currentUser) || void 0 === HH ? void 0 : HH.uid) && void 0 !== IH ? IH : null;
        this.lastNotifiedUid !== EH && (this.lastNotifiedUid = EH, this.authStateSubscription.next(this.currentUser));
      }
      registerStateListener(HH, IH, EH, RH) {
        if (this._deleted) return () => {};
        const hH = "function" === typeof IH ? IH : IH.next.bind(IH),
          TH = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        return qH(TH, this, "internal-error"), TH.then(() => hH(this.currentUser)), "function" === typeof IH ? HH.addObserver(IH, EH, RH) : HH.addObserver(IH);
      }
      async directlySetCurrentUser(HH) {
        this.currentUser && this.currentUser !== HH && this._currentUser._stopProactiveRefresh(), HH && this.isProactiveRefreshEnabled && HH._startProactiveRefresh(), this.currentUser = HH, HH ? await this.assertedPersistence.setCurrentUser(HH) : await this.assertedPersistence.removeCurrentUser();
      }
      queue(HH) {
        return this.operations = this.operations.then(HH, HH), this.operations;
      }
      get assertedPersistence() {
        return qH(this.persistenceManager, this, "internal-error"), this.persistenceManager;
      }
      _logFramework(HH) {
        HH && !this.frameworks.includes(HH) && (this.frameworks.push(HH), this.frameworks.sort(), this.clientVersion = DI(this.config.clientPlatform, this._getFrameworks()));
      }
      _getFrameworks() {
        return this.frameworks;
      }
      async _getAdditionalHeaders() {
        var HH;
        const IH = {
          "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (IH["X-Firebase-gmpid"] = this.app.options.appId);
        const EH = await (null === (HH = this.heartbeatServiceProvider.getImmediate({
          optional: !0
        })) || void 0 === HH ? void 0 : HH.getHeartbeatsHeader());
        EH && (IH["X-Firebase-Client"] = EH);
        const RH = await this._getAppCheckToken();
        return RH && (IH["X-Firebase-AppCheck"] = RH), IH;
      }
      async _getAppCheckToken() {
        var HH;
        const IH = await (null === (HH = this.appCheckServiceProvider.getImmediate({
          optional: !0
        })) || void 0 === HH ? void 0 : HH.getToken());
        return (null === IH || void 0 === IH ? void 0 : IH.error) && function (HH) {
          if (NH.logLevel <= sH.c.WARN) {
            for (var IH = arguments.length, EH = new Array(IH > 1 ? IH - 1 : 0), RH = 1; RH < IH; RH++) EH[RH - 1] = arguments[RH];
            NH.warn("Auth (".concat(hH.g, "): ").concat(HH), ...EH);
          }
        }("Error while retrieving App Check token: ".concat(IH.error)), null === IH || void 0 === IH ? void 0 : IH.token;
      }
    }
    function CI(HH) {
      return (0, RH.G)(HH);
    }
    class cI {
      constructor(HH) {
        this.auth = HH, this.observer = null, this.addObserver = (0, RH.s)(HH => this.observer = HH);
      }
      get next() {
        return qH(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
      }
    }
    function UI(HH, IH) {
      const EH = (0, hH.F)(HH, "auth");
      if (EH.isInitialized()) {
        const HH = EH.getImmediate(),
          hH = EH.getOptions();
        if ((0, RH.t)(hH, null !== IH && void 0 !== IH ? IH : {})) return HH;
        DH(HH, "already-initialized");
      }
      return EH.initialize({
        options: IH
      });
    }
    function WI(HH, IH, EH) {
      const RH = CI(HH);
      qH(RH._canInitEmulator, RH, "emulator-config-failed"), qH(/^https?:\/\//.test(IH), RH, "invalid-emulator-scheme");
      const hH = !!(null === EH || void 0 === EH ? void 0 : EH.disableWarnings),
        TH = BI(IH),
        {
          host: sH,
          port: eH
        } = function (HH) {
          const IH = BI(HH),
            EH = /(\/\/)?([^?#/]+)/.exec(HH.substr(IH.length));
          if (!EH) return {
            host: "",
            port: null
          };
          const RH = EH[2].split("@").pop() || "",
            hH = /^(\[[^\]]+\])(:|$)/.exec(RH);
          if (hH) {
            const HH = hH[1];
            return {
              host: HH,
              port: fI(RH.substr(HH.length + 1))
            };
          }
          {
            const [HH, IH] = RH.split(":");
            return {
              host: HH,
              port: fI(IH)
            };
          }
        }(IH),
        GH = null === eH ? "" : ":".concat(eH);
      RH.config.emulator = {
        url: "".concat(TH, "//").concat(sH).concat(GH, "/")
      }, RH.settings.appVerificationDisabledForTesting = !0, RH.emulatorConfig = Object.freeze({
        host: sH,
        port: eH,
        protocol: TH.replace(":", ""),
        options: Object.freeze({
          disableWarnings: hH
        })
      }), hH || function () {
        function HH() {
          const HH = document.createElement("p"),
            IH = HH.style;
          HH.innerText = "Running in emulator mode. Do not use with production credentials.", IH.position = "fixed", IH.width = "100%", IH.backgroundColor = "#ffffff", IH.border = ".1em solid #000000", IH.color = "#b50000", IH.bottom = "0px", IH.left = "0px", IH.margin = "0px", IH.zIndex = "10000", IH.textAlign = "center", HH.classList.add("firebase-emulator-warning"), document.body.appendChild(HH);
        }
        "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
        "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", HH) : HH());
      }();
    }
    function BI(HH) {
      const IH = HH.indexOf(":");
      return IH < 0 ? "" : HH.substr(0, IH + 1);
    }
    function fI(HH) {
      if (!HH) return null;
      const IH = Number(HH);
      return isNaN(IH) ? null : IH;
    }
    class aI {
      constructor(HH, IH) {
        this.providerId = HH, this.signInMethod = IH;
      }
      toJSON() {
        return LH("not implemented");
      }
      _getIdTokenResponse(HH) {
        return LH("not implemented");
      }
      _linkToIdToken(HH, IH) {
        return LH("not implemented");
      }
      _getReauthenticationResolver(HH) {
        return LH("not implemented");
      }
    }
    async function nI(HH, IH) {
      return aH(HH, "POST", "/v1/accounts:resetPassword", fH(HH, IH));
    }
    async function pI(HH, IH) {
      return aH(HH, "POST", "/v1/accounts:update", IH);
    }
    async function dI(HH, IH) {
      return pH(HH, "POST", "/v1/accounts:signInWithPassword", fH(HH, IH));
    }
    async function uI(HH, IH) {
      return aH(HH, "POST", "/v1/accounts:sendOobCode", fH(HH, IH));
    }
    async function lI(HH, IH) {
      return uI(HH, IH);
    }
    async function KI(HH, IH) {
      return uI(HH, IH);
    }
    class wI extends aI {
      constructor(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super("password", EH), this._email = HH, this._password = IH, this._tenantId = RH;
      }
      static _fromEmailAndPassword(HH, IH) {
        return new wI(HH, IH, "password");
      }
      static _fromEmailAndCode(HH, IH) {
        return new wI(HH, IH, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
      }
      toJSON() {
        return {
          email: this._email,
          password: this._password,
          signInMethod: this.signInMethod,
          tenantId: this._tenantId
        };
      }
      static fromJSON(HH) {
        const IH = "string" === typeof HH ? JSON.parse(HH) : HH;
        if ((null === IH || void 0 === IH ? void 0 : IH.email) && (null === IH || void 0 === IH ? void 0 : IH.password)) {
          if ("password" === IH.signInMethod) return this._fromEmailAndPassword(IH.email, IH.password);
          if ("emailLink" === IH.signInMethod) return this._fromEmailAndCode(IH.email, IH.password, IH.tenantId);
        }
        return null;
      }
      async _getIdTokenResponse(HH) {
        var IH;
        switch (this.signInMethod) {
          case "password":
            const EH = {
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB"
            };
            if (null === (IH = HH._getRecaptchaConfig()) || void 0 === IH ? void 0 : IH.emailPasswordEnabled) {
              const IH = await yI(HH, EH, "signInWithPassword");
              return dI(HH, IH);
            }
            return dI(HH, EH).catch(async IH => {
              if (IH.code === "auth/".concat("missing-recaptcha-token")) {
                console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                const IH = await yI(HH, EH, "signInWithPassword");
                return dI(HH, IH);
              }
              return Promise.reject(IH);
            });
          case "emailLink":
            return async function (HH, IH) {
              return pH(HH, "POST", "/v1/accounts:signInWithEmailLink", fH(HH, IH));
            }(HH, {
              email: this._email,
              oobCode: this._password
            });
          default:
            DH(HH, "internal-error");
        }
      }
      async _linkToIdToken(HH, IH) {
        switch (this.signInMethod) {
          case "password":
            return pI(HH, {
              idToken: IH,
              returnSecureToken: !0,
              email: this._email,
              password: this._password
            });
          case "emailLink":
            return async function (HH, IH) {
              return pH(HH, "POST", "/v1/accounts:signInWithEmailLink", fH(HH, IH));
            }(HH, {
              idToken: IH,
              email: this._email,
              oobCode: this._password
            });
          default:
            DH(HH, "internal-error");
        }
      }
      _getReauthenticationResolver(HH) {
        return this._getIdTokenResponse(HH);
      }
    }
    async function zI(HH, IH) {
      return pH(HH, "POST", "/v1/accounts:signInWithIdp", fH(HH, IH));
    }
    class tI extends aI {
      constructor() {
        super(...arguments), this.pendingToken = null;
      }
      static _fromParams(HH) {
        const IH = new tI(HH.providerId, HH.signInMethod);
        return HH.idToken || HH.accessToken ? (HH.idToken && (IH.idToken = HH.idToken), HH.accessToken && (IH.accessToken = HH.accessToken), HH.nonce && !HH.pendingToken && (IH.nonce = HH.nonce), HH.pendingToken && (IH.pendingToken = HH.pendingToken)) : HH.oauthToken && HH.oauthTokenSecret ? (IH.accessToken = HH.oauthToken, IH.secret = HH.oauthTokenSecret) : DH("argument-error"), IH;
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod
        };
      }
      static fromJSON(HH) {
        const IH = "string" === typeof HH ? JSON.parse(HH) : HH,
          {
            providerId: EH,
            signInMethod: RH
          } = IH,
          hH = TH(IH, ["providerId", "signInMethod"]);
        if (!EH || !RH) return null;
        const sH = new tI(EH, RH);
        return sH.idToken = hH.idToken || void 0, sH.accessToken = hH.accessToken || void 0, sH.secret = hH.secret, sH.nonce = hH.nonce, sH.pendingToken = hH.pendingToken || null, sH;
      }
      _getIdTokenResponse(HH) {
        return zI(HH, this.buildRequest());
      }
      _linkToIdToken(HH, IH) {
        const EH = this.buildRequest();
        return EH.idToken = IH, zI(HH, EH);
      }
      _getReauthenticationResolver(HH) {
        const IH = this.buildRequest();
        return IH.autoCreate = !1, zI(HH, IH);
      }
      buildRequest() {
        const HH = {
          requestUri: "http://localhost",
          returnSecureToken: !0
        };
        if (this.pendingToken) HH.pendingToken = this.pendingToken;else {
          const IH = {};
          this.idToken && (IH.id_token = this.idToken), this.accessToken && (IH.access_token = this.accessToken), this.secret && (IH.oauth_token_secret = this.secret), IH.providerId = this.providerId, this.nonce && !this.pendingToken && (IH.nonce = this.nonce), HH.postBody = (0, RH.ab)(IH);
        }
        return HH;
      }
    }
    const jE = {
      USER_NOT_FOUND: "user-not-found"
    };
    class vI extends aI {
      constructor(HH) {
        super("phone", "phone"), this.params = HH;
      }
      static _fromVerification(HH, IH) {
        return new vI({
          verificationId: HH,
          verificationCode: IH
        });
      }
      static _fromTokenResponse(HH, IH) {
        return new vI({
          phoneNumber: HH,
          temporaryProof: IH
        });
      }
      _getIdTokenResponse(HH) {
        return async function (HH, IH) {
          return pH(HH, "POST", "/v1/accounts:signInWithPhoneNumber", fH(HH, IH));
        }(HH, this._makeVerificationRequest());
      }
      _linkToIdToken(HH, IH) {
        return async function (HH, IH) {
          const EH = await pH(HH, "POST", "/v1/accounts:signInWithPhoneNumber", fH(HH, IH));
          if (EH.temporaryProof) throw lH(HH, "account-exists-with-different-credential", EH);
          return EH;
        }(HH, Object.assign({
          idToken: IH
        }, this._makeVerificationRequest()));
      }
      _getReauthenticationResolver(HH) {
        return async function (HH, IH) {
          return pH(HH, "POST", "/v1/accounts:signInWithPhoneNumber", fH(HH, Object.assign(Object.assign({}, IH), {
            operation: "REAUTH"
          })), jE);
        }(HH, this._makeVerificationRequest());
      }
      _makeVerificationRequest() {
        const {
          temporaryProof: HH,
          phoneNumber: IH,
          verificationId: EH,
          verificationCode: RH
        } = this.params;
        return HH && IH ? {
          temporaryProof: HH,
          phoneNumber: IH
        } : {
          sessionInfo: EH,
          code: RH
        };
      }
      toJSON() {
        const HH = {
          providerId: this.providerId
        };
        return this.params.phoneNumber && (HH.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (HH.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (HH.verificationCode = this.params.verificationCode), this.params.verificationId && (HH.verificationId = this.params.verificationId), HH;
      }
      static fromJSON(HH) {
        "string" === typeof HH && (HH = JSON.parse(HH));
        const {
          verificationId: IH,
          verificationCode: EH,
          phoneNumber: RH,
          temporaryProof: hH
        } = HH;
        return EH || IH || RH || hH ? new vI({
          verificationId: IH,
          verificationCode: EH,
          phoneNumber: RH,
          temporaryProof: hH
        }) : null;
      }
    }
    class bI {
      constructor(HH) {
        var IH, EH, hH, TH, sH, eH;
        const GH = (0, RH._)((0, RH.x)(HH)),
          AH = null !== (IH = GH.apiKey) && void 0 !== IH ? IH : null,
          VH = null !== (EH = GH.oobCode) && void 0 !== EH ? EH : null,
          YH = function (HH) {
            switch (HH) {
              case "recoverEmail":
                return "RECOVER_EMAIL";
              case "resetPassword":
                return "PASSWORD_RESET";
              case "signIn":
                return "EMAIL_SIGNIN";
              case "verifyEmail":
                return "VERIFY_EMAIL";
              case "verifyAndChangeEmail":
                return "VERIFY_AND_CHANGE_EMAIL";
              case "revertSecondFactorAddition":
                return "REVERT_SECOND_FACTOR_ADDITION";
              default:
                return null;
            }
          }(null !== (hH = GH.mode) && void 0 !== hH ? hH : null);
        qH(AH && VH && YH, "argument-error"), this.apiKey = AH, this.operation = YH, this.code = VH, this.continueUrl = null !== (TH = GH.continueUrl) && void 0 !== TH ? TH : null, this.languageCode = null !== (sH = GH.languageCode) && void 0 !== sH ? sH : null, this.tenantId = null !== (eH = GH.tenantId) && void 0 !== eH ? eH : null;
      }
      static parseLink(HH) {
        const IH = function (HH) {
          const IH = (0, RH._)((0, RH.x)(HH)).link,
            EH = IH ? (0, RH._)((0, RH.x)(IH)).deep_link_id : null,
            hH = (0, RH._)((0, RH.x)(HH)).deep_link_id;
          return (hH ? (0, RH._)((0, RH.x)(hH)).link : null) || hH || EH || IH || HH;
        }(HH);
        try {
          return new bI(IH);
        } catch (EH) {
          return null;
        }
      }
    }
    function SI(HH) {
      return bI.parseLink(HH);
    }
    class xI {
      constructor() {
        this.providerId = xI.PROVIDER_ID;
      }
      static credential(HH, IH) {
        return wI._fromEmailAndPassword(HH, IH);
      }
      static credentialWithLink(HH, IH) {
        const EH = bI.parseLink(IH);
        return qH(EH, "argument-error"), wI._fromEmailAndCode(HH, EH.code, EH.tenantId);
      }
    }
    xI.PROVIDER_ID = "password", xI.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", xI.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
    class HE {
      constructor(HH) {
        this.providerId = HH, this.defaultLanguageCode = null, this.customParameters = {};
      }
      setDefaultLanguage(HH) {
        this.defaultLanguageCode = HH;
      }
      setCustomParameters(HH) {
        return this.customParameters = HH, this;
      }
      getCustomParameters() {
        return this.customParameters;
      }
    }
    class IE extends HE {
      constructor() {
        super(...arguments), this.scopes = [];
      }
      addScope(HH) {
        return this.scopes.includes(HH) || this.scopes.push(HH), this;
      }
      getScopes() {
        return [...this.scopes];
      }
    }
    class EE extends IE {
      static credentialFromJSON(HH) {
        const IH = "string" === typeof HH ? JSON.parse(HH) : HH;
        return qH("providerId" in IH && "signInMethod" in IH, "argument-error"), tI._fromParams(IH);
      }
      credential(HH) {
        return this._credential(Object.assign(Object.assign({}, HH), {
          nonce: HH.rawNonce
        }));
      }
      _credential(HH) {
        return qH(HH.idToken || HH.accessToken, "argument-error"), tI._fromParams(Object.assign(Object.assign({}, HH), {
          providerId: this.providerId,
          signInMethod: this.providerId
        }));
      }
      static credentialFromResult(HH) {
        return EE.oauthCredentialFromTaggedObject(HH);
      }
      static credentialFromError(HH) {
        return EE.oauthCredentialFromTaggedObject(HH.customData || {});
      }
      static oauthCredentialFromTaggedObject(HH) {
        let {
          _tokenResponse: IH
        } = HH;
        if (!IH) return null;
        const {
          oauthIdToken: EH,
          oauthAccessToken: RH,
          oauthTokenSecret: hH,
          pendingToken: TH,
          nonce: sH,
          providerId: eH
        } = IH;
        if (!RH && !hH && !EH && !TH) return null;
        if (!eH) return null;
        try {
          return new EE(eH)._credential({
            idToken: EH,
            accessToken: RH,
            nonce: sH,
            pendingToken: TH
          });
        } catch (GH) {
          return null;
        }
      }
    }
    class RE extends IE {
      constructor() {
        super("facebook.com");
      }
      static credential(HH) {
        return tI._fromParams({
          providerId: RE.PROVIDER_ID,
          signInMethod: RE.FACEBOOK_SIGN_IN_METHOD,
          accessToken: HH
        });
      }
      static credentialFromResult(HH) {
        return RE.credentialFromTaggedObject(HH);
      }
      static credentialFromError(HH) {
        return RE.credentialFromTaggedObject(HH.customData || {});
      }
      static credentialFromTaggedObject(HH) {
        let {
          _tokenResponse: IH
        } = HH;
        if (!IH || !("oauthAccessToken" in IH)) return null;
        if (!IH.oauthAccessToken) return null;
        try {
          return RE.credential(IH.oauthAccessToken);
        } catch (EH) {
          return null;
        }
      }
    }
    RE.FACEBOOK_SIGN_IN_METHOD = "facebook.com", RE.PROVIDER_ID = "facebook.com";
    class hE extends IE {
      constructor() {
        super("google.com"), this.addScope("profile");
      }
      static credential(HH, IH) {
        return tI._fromParams({
          providerId: hE.PROVIDER_ID,
          signInMethod: hE.GOOGLE_SIGN_IN_METHOD,
          idToken: HH,
          accessToken: IH
        });
      }
      static credentialFromResult(HH) {
        return hE.credentialFromTaggedObject(HH);
      }
      static credentialFromError(HH) {
        return hE.credentialFromTaggedObject(HH.customData || {});
      }
      static credentialFromTaggedObject(HH) {
        let {
          _tokenResponse: IH
        } = HH;
        if (!IH) return null;
        const {
          oauthIdToken: EH,
          oauthAccessToken: RH
        } = IH;
        if (!EH && !RH) return null;
        try {
          return hE.credential(EH, RH);
        } catch (hH) {
          return null;
        }
      }
    }
    hE.GOOGLE_SIGN_IN_METHOD = "google.com", hE.PROVIDER_ID = "google.com";
    class TE extends IE {
      constructor() {
        super("github.com");
      }
      static credential(HH) {
        return tI._fromParams({
          providerId: TE.PROVIDER_ID,
          signInMethod: TE.GITHUB_SIGN_IN_METHOD,
          accessToken: HH
        });
      }
      static credentialFromResult(HH) {
        return TE.credentialFromTaggedObject(HH);
      }
      static credentialFromError(HH) {
        return TE.credentialFromTaggedObject(HH.customData || {});
      }
      static credentialFromTaggedObject(HH) {
        let {
          _tokenResponse: IH
        } = HH;
        if (!IH || !("oauthAccessToken" in IH)) return null;
        if (!IH.oauthAccessToken) return null;
        try {
          return TE.credential(IH.oauthAccessToken);
        } catch (EH) {
          return null;
        }
      }
    }
    TE.GITHUB_SIGN_IN_METHOD = "github.com", TE.PROVIDER_ID = "github.com";
    class sE extends aI {
      constructor(HH, IH) {
        super(HH, HH), this.pendingToken = IH;
      }
      _getIdTokenResponse(HH) {
        return zI(HH, this.buildRequest());
      }
      _linkToIdToken(HH, IH) {
        const EH = this.buildRequest();
        return EH.idToken = IH, zI(HH, EH);
      }
      _getReauthenticationResolver(HH) {
        const IH = this.buildRequest();
        return IH.autoCreate = !1, zI(HH, IH);
      }
      toJSON() {
        return {
          signInMethod: this.signInMethod,
          providerId: this.providerId,
          pendingToken: this.pendingToken
        };
      }
      static fromJSON(HH) {
        const IH = "string" === typeof HH ? JSON.parse(HH) : HH,
          {
            providerId: EH,
            signInMethod: RH,
            pendingToken: hH
          } = IH;
        return EH && RH && hH && EH === RH ? new sE(EH, hH) : null;
      }
      static _create(HH, IH) {
        return new sE(HH, IH);
      }
      buildRequest() {
        return {
          requestUri: "http://localhost",
          returnSecureToken: !0,
          pendingToken: this.pendingToken
        };
      }
    }
    class eE extends HE {
      constructor(HH) {
        qH(HH.startsWith("saml."), "argument-error"), super(HH);
      }
      static credentialFromResult(HH) {
        return eE.samlCredentialFromTaggedObject(HH);
      }
      static credentialFromError(HH) {
        return eE.samlCredentialFromTaggedObject(HH.customData || {});
      }
      static credentialFromJSON(HH) {
        const IH = sE.fromJSON(HH);
        return qH(IH, "argument-error"), IH;
      }
      static samlCredentialFromTaggedObject(HH) {
        let {
          _tokenResponse: IH
        } = HH;
        if (!IH) return null;
        const {
          pendingToken: EH,
          providerId: RH
        } = IH;
        if (!EH || !RH) return null;
        try {
          return sE._create(RH, EH);
        } catch (hH) {
          return null;
        }
      }
    }
    class GE extends IE {
      constructor() {
        super("twitter.com");
      }
      static credential(HH, IH) {
        return tI._fromParams({
          providerId: GE.PROVIDER_ID,
          signInMethod: GE.TWITTER_SIGN_IN_METHOD,
          oauthToken: HH,
          oauthTokenSecret: IH
        });
      }
      static credentialFromResult(HH) {
        return GE.credentialFromTaggedObject(HH);
      }
      static credentialFromError(HH) {
        return GE.credentialFromTaggedObject(HH.customData || {});
      }
      static credentialFromTaggedObject(HH) {
        let {
          _tokenResponse: IH
        } = HH;
        if (!IH) return null;
        const {
          oauthAccessToken: EH,
          oauthTokenSecret: RH
        } = IH;
        if (!EH || !RH) return null;
        try {
          return GE.credential(EH, RH);
        } catch (hH) {
          return null;
        }
      }
    }
    async function AE(HH, IH) {
      return pH(HH, "POST", "/v1/accounts:signUp", fH(HH, IH));
    }
    GE.TWITTER_SIGN_IN_METHOD = "twitter.com", GE.PROVIDER_ID = "twitter.com";
    class VE {
      constructor(HH) {
        this.user = HH.user, this.providerId = HH.providerId, this._tokenResponse = HH._tokenResponse, this.operationType = HH.operationType;
      }
      static async _fromIdTokenResponse(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const hH = await RI._fromIdTokenResponse(HH, EH, RH),
          TH = YE(EH);
        return new VE({
          user: hH,
          providerId: TH,
          _tokenResponse: EH,
          operationType: IH
        });
      }
      static async _forOperation(HH, IH, EH) {
        await HH._updateTokensIfNecessary(EH, !0);
        const RH = YE(EH);
        return new VE({
          user: HH,
          providerId: RH,
          _tokenResponse: EH,
          operationType: IH
        });
      }
    }
    function YE(HH) {
      return HH.providerId ? HH.providerId : "phoneNumber" in HH ? "phone" : null;
    }
    async function QE(HH) {
      var IH;
      const EH = CI(HH);
      if (await EH._initializationPromise, null === (IH = EH.currentUser) || void 0 === IH ? void 0 : IH.isAnonymous) return new VE({
        user: EH.currentUser,
        providerId: null,
        operationType: "signIn"
      });
      const RH = await AE(EH, {
          returnSecureToken: !0
        }),
        hH = await VE._fromIdTokenResponse(EH, "signIn", RH, !0);
      return await EH._updateCurrentUser(hH.user), hH;
    }
    class JE extends RH.h {
      constructor(HH, IH, EH, RH) {
        var hH;
        super(IH.code, IH.message), this.operationType = EH, this.user = RH, Object.setPrototypeOf(this, JE.prototype), this.customData = {
          appName: HH.name,
          tenantId: null !== (hH = HH.tenantId) && void 0 !== hH ? hH : void 0,
          _serverResponse: IH.customData._serverResponse,
          operationType: EH
        };
      }
      static _fromErrorAndOperation(HH, IH, EH, RH) {
        return new JE(HH, IH, EH, RH);
      }
    }
    function OE(HH, IH, EH, RH) {
      return ("reauthenticate" === IH ? EH._getReauthenticationResolver(HH) : EH._getIdTokenResponse(HH)).catch(EH => {
        if (EH.code === "auth/".concat("multi-factor-auth-required")) throw JE._fromErrorAndOperation(HH, EH, IH, RH);
        throw EH;
      });
    }
    function rE(HH) {
      return new Set(HH.map(HH => {
        let {
          providerId: IH
        } = HH;
        return IH;
      }).filter(HH => !!HH));
    }
    async function FE(HH, IH) {
      const EH = (0, RH.G)(HH);
      await NE(!0, EH, IH);
      const {
          providerUserInfo: hH
        } = await async function (HH, IH) {
          return aH(HH, "POST", "/v1/accounts:update", IH);
        }(EH.auth, {
          idToken: await EH.getIdToken(),
          deleteProvider: [IH]
        }),
        TH = rE(hH || []);
      return EH.providerData = EH.providerData.filter(HH => TH.has(HH.providerId)), TH.has("phone") || (EH.phoneNumber = null), await EH.auth._persistUserIfCurrent(EH), EH;
    }
    async function ME(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const RH = await vH(HH, IH._linkToIdToken(HH.auth, await HH.getIdToken()), EH);
      return VE._forOperation(HH, "link", RH);
    }
    async function NE(HH, IH, EH) {
      await xH(IH);
      const RH = !1 === HH ? "provider-already-linked" : "no-such-provider";
      qH(rE(IH.providerData).has(EH) === HH, IH.auth, RH);
    }
    async function iR(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
          auth: RH
        } = HH,
        hH = "reauthenticate";
      try {
        const TH = await vH(HH, OE(RH, hH, IH, HH), EH);
        qH(TH.idToken, RH, "internal-error");
        const sH = jI(TH.idToken);
        qH(sH, RH, "internal-error");
        const {
          sub: eH
        } = sH;
        return qH(HH.uid === eH, RH, "user-mismatch"), VE._forOperation(HH, hH, TH);
      } catch (TH) {
        throw (null === TH || void 0 === TH ? void 0 : TH.code) === "auth/".concat("user-not-found") && DH(RH, "user-mismatch"), TH;
      }
    }
    async function DE(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const RH = "signIn",
        hH = await OE(HH, RH, IH),
        TH = await VE._fromIdTokenResponse(HH, RH, hH);
      return EH || (await HH._updateCurrentUser(TH.user)), TH;
    }
    async function PE(HH, IH) {
      return DE(CI(HH), IH);
    }
    async function XE(HH, IH) {
      const EH = (0, RH.G)(HH);
      return await NE(!1, EH, IH.providerId), ME(EH, IH);
    }
    async function mR(HH, IH) {
      return iR((0, RH.G)(HH), IH);
    }
    async function ZE(HH, IH) {
      const EH = CI(HH),
        RH = await async function (HH, IH) {
          return pH(HH, "POST", "/v1/accounts:signInWithCustomToken", fH(HH, IH));
        }(EH, {
          token: IH,
          returnSecureToken: !0
        }),
        hH = await VE._fromIdTokenResponse(EH, "signIn", RH);
      return await EH._updateCurrentUser(hH.user), hH;
    }
    class qE {
      constructor(HH, IH) {
        this.factorId = HH, this.uid = IH.mfaEnrollmentId, this.enrollmentTime = new Date(IH.enrolledAt).toUTCString(), this.displayName = IH.displayName;
      }
      static _fromServerResponse(HH, IH) {
        return "phoneInfo" in IH ? LE._fromServerResponse(HH, IH) : "totpInfo" in IH ? gE._fromServerResponse(HH, IH) : DH(HH, "internal-error");
      }
    }
    class LE extends qE {
      constructor(HH) {
        super("phone", HH), this.phoneNumber = HH.phoneInfo;
      }
      static _fromServerResponse(HH, IH) {
        return new LE(IH);
      }
    }
    class gE extends qE {
      constructor(HH) {
        super("totp", HH);
      }
      static _fromServerResponse(HH, IH) {
        return new gE(IH);
      }
    }
    function yE(HH, IH, EH) {
      var RH;
      qH((null === (RH = EH.url) || void 0 === RH ? void 0 : RH.length) > 0, HH, "invalid-continue-uri"), qH("undefined" === typeof EH.dynamicLinkDomain || EH.dynamicLinkDomain.length > 0, HH, "invalid-dynamic-link-domain"), IH.continueUrl = EH.url, IH.dynamicLinkDomain = EH.dynamicLinkDomain, IH.canHandleCodeInApp = EH.handleCodeInApp, EH.iOS && (qH(EH.iOS.bundleId.length > 0, HH, "missing-ios-bundle-id"), IH.iOSBundleId = EH.iOS.bundleId), EH.android && (qH(EH.android.packageName.length > 0, HH, "missing-android-pkg-name"), IH.androidInstallApp = EH.android.installApp, IH.androidMinimumVersionCode = EH.android.minimumVersion, IH.androidPackageName = EH.android.packageName);
    }
    async function oE(HH, IH, EH) {
      var RH;
      const hH = CI(HH),
        TH = {
          requestType: "PASSWORD_RESET",
          email: IH,
          clientType: "CLIENT_TYPE_WEB"
        };
      if (null === (RH = hH._getRecaptchaConfig()) || void 0 === RH ? void 0 : RH.emailPasswordEnabled) {
        const HH = await yI(hH, TH, "getOobCode", !0);
        EH && yE(hH, HH, EH), await lI(hH, HH);
      } else EH && yE(hH, TH, EH), await lI(hH, TH).catch(async HH => {
        if (HH.code !== "auth/".concat("missing-recaptcha-token")) return Promise.reject(HH);
        {
          console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
          const HH = await yI(hH, TH, "getOobCode", !0);
          EH && yE(hH, HH, EH), await lI(hH, HH);
        }
      });
    }
    async function kR(HH, IH, EH) {
      await nI((0, RH.G)(HH), {
        oobCode: IH,
        newPassword: EH
      });
    }
    async function CE(HH, IH) {
      await async function (HH, IH) {
        return aH(HH, "POST", "/v1/accounts:update", fH(HH, IH));
      }((0, RH.G)(HH), {
        oobCode: IH
      });
    }
    async function cE(HH, IH) {
      const EH = (0, RH.G)(HH),
        hH = await nI(EH, {
          oobCode: IH
        }),
        TH = hH.requestType;
      switch (qH(TH, EH, "internal-error"), TH) {
        case "EMAIL_SIGNIN":
          break;
        case "VERIFY_AND_CHANGE_EMAIL":
          qH(hH.newEmail, EH, "internal-error");
          break;
        case "REVERT_SECOND_FACTOR_ADDITION":
          qH(hH.mfaInfo, EH, "internal-error");
        default:
          qH(hH.email, EH, "internal-error");
      }
      let sH = null;
      return hH.mfaInfo && (sH = qE._fromServerResponse(CI(EH), hH.mfaInfo)), {
        data: {
          email: ("VERIFY_AND_CHANGE_EMAIL" === hH.requestType ? hH.newEmail : hH.email) || null,
          previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === hH.requestType ? hH.email : hH.newEmail) || null,
          multiFactorInfo: sH
        },
        operation: TH
      };
    }
    async function UE(HH, IH) {
      const {
        data: EH
      } = await cE((0, RH.G)(HH), IH);
      return EH.email;
    }
    async function WE(HH, IH, EH) {
      var RH;
      const hH = CI(HH),
        TH = {
          returnSecureToken: !0,
          email: IH,
          password: EH,
          clientType: "CLIENT_TYPE_WEB"
        };
      let sH;
      if (null === (RH = hH._getRecaptchaConfig()) || void 0 === RH ? void 0 : RH.emailPasswordEnabled) {
        const HH = await yI(hH, TH, "signUpPassword");
        sH = AE(hH, HH);
      } else sH = AE(hH, TH).catch(async HH => {
        if (HH.code === "auth/".concat("missing-recaptcha-token")) {
          console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
          const HH = await yI(hH, TH, "signUpPassword");
          return AE(hH, HH);
        }
        return Promise.reject(HH);
      });
      const eH = await sH.catch(HH => Promise.reject(HH)),
        GH = await VE._fromIdTokenResponse(hH, "signIn", eH);
      return await hH._updateCurrentUser(GH.user), GH;
    }
    function BE(HH, IH, EH) {
      return PE((0, RH.G)(HH), xI.credential(IH, EH));
    }
    async function fE(HH, IH, EH) {
      var RH;
      const hH = CI(HH),
        TH = {
          requestType: "EMAIL_SIGNIN",
          email: IH,
          clientType: "CLIENT_TYPE_WEB"
        };
      function sH(HH, IH) {
        qH(IH.handleCodeInApp, hH, "argument-error"), IH && yE(hH, HH, IH);
      }
      if (null === (RH = hH._getRecaptchaConfig()) || void 0 === RH ? void 0 : RH.emailPasswordEnabled) {
        const HH = await yI(hH, TH, "getOobCode", !0);
        sH(HH, EH), await KI(hH, HH);
      } else sH(TH, EH), await KI(hH, TH).catch(async HH => {
        if (HH.code !== "auth/".concat("missing-recaptcha-token")) return Promise.reject(HH);
        {
          console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
          const HH = await yI(hH, TH, "getOobCode", !0);
          sH(HH, EH), await KI(hH, HH);
        }
      });
    }
    function aE(HH, IH) {
      const EH = bI.parseLink(IH);
      return "EMAIL_SIGNIN" === (null === EH || void 0 === EH ? void 0 : EH.operation);
    }
    async function nE(HH, IH, EH) {
      const hH = (0, RH.G)(HH),
        TH = xI.credentialWithLink(IH, EH || yH());
      return qH(TH._tenantId === (hH.tenantId || null), hH, "tenant-id-mismatch"), PE(hH, TH);
    }
    async function pE(HH, IH) {
      const EH = {
          identifier: IH,
          continueUri: oH() ? yH() : "http://localhost"
        },
        {
          signinMethods: hH
        } = await async function (HH, IH) {
          return aH(HH, "POST", "/v1/accounts:createAuthUri", fH(HH, IH));
        }((0, RH.G)(HH), EH);
      return hH || [];
    }
    async function dE(HH, IH) {
      const EH = (0, RH.G)(HH),
        hH = {
          requestType: "VERIFY_EMAIL",
          idToken: await HH.getIdToken()
        };
      IH && yE(EH.auth, hH, IH);
      const {
        email: TH
      } = await async function (HH, IH) {
        return uI(HH, IH);
      }(EH.auth, hH);
      TH !== HH.email && (await HH.reload());
    }
    async function uE(HH, IH, EH) {
      const hH = (0, RH.G)(HH),
        TH = {
          requestType: "VERIFY_AND_CHANGE_EMAIL",
          idToken: await HH.getIdToken(),
          newEmail: IH
        };
      EH && yE(hH.auth, TH, EH);
      const {
        email: sH
      } = await async function (HH, IH) {
        return uI(HH, IH);
      }(hH.auth, TH);
      sH !== HH.email && (await HH.reload());
    }
    async function lE(HH, IH) {
      let {
        displayName: EH,
        photoURL: hH
      } = IH;
      if (void 0 === EH && void 0 === hH) return;
      const TH = (0, RH.G)(HH),
        sH = {
          idToken: await TH.getIdToken(),
          displayName: EH,
          photoUrl: hH,
          returnSecureToken: !0
        },
        eH = await vH(TH, async function (HH, IH) {
          return aH(HH, "POST", "/v1/accounts:update", IH);
        }(TH.auth, sH));
      TH.displayName = eH.displayName || null, TH.photoURL = eH.photoUrl || null;
      const GH = TH.providerData.find(HH => {
        let {
          providerId: IH
        } = HH;
        return "password" === IH;
      });
      GH && (GH.displayName = TH.displayName, GH.photoURL = TH.photoURL), await TH._updateTokensIfNecessary(eH);
    }
    function KE(HH, IH) {
      return zE((0, RH.G)(HH), IH, null);
    }
    function wE(HH, IH) {
      return zE((0, RH.G)(HH), null, IH);
    }
    async function zE(HH, IH, EH) {
      const {
          auth: RH
        } = HH,
        hH = {
          idToken: await HH.getIdToken(),
          returnSecureToken: !0
        };
      IH && (hH.email = IH), EH && (hH.password = EH);
      const TH = await vH(HH, pI(RH, hH));
      await HH._updateTokensIfNecessary(TH, !0);
    }
    class tE {
      constructor(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.isNewUser = HH, this.providerId = IH, this.profile = EH;
      }
    }
    class jR extends tE {
      constructor(HH, IH, EH, RH) {
        super(HH, IH, EH), this.username = RH;
      }
    }
    class vE extends tE {
      constructor(HH, IH) {
        super(HH, "facebook.com", IH);
      }
    }
    class bE extends jR {
      constructor(HH, IH) {
        super(HH, "github.com", IH, "string" === typeof (null === IH || void 0 === IH ? void 0 : IH.login) ? null === IH || void 0 === IH ? void 0 : IH.login : null);
      }
    }
    class SE extends tE {
      constructor(HH, IH) {
        super(HH, "google.com", IH);
      }
    }
    class xE extends jR {
      constructor(HH, IH, EH) {
        super(HH, "twitter.com", IH, EH);
      }
    }
    function HR(HH) {
      const {
        user: IH,
        _tokenResponse: EH
      } = HH;
      return IH.isAnonymous && !EH ? {
        providerId: null,
        isNewUser: !1,
        profile: null
      } : function (HH) {
        var IH, EH;
        if (!HH) return null;
        const {
            providerId: RH
          } = HH,
          hH = HH.rawUserInfo ? JSON.parse(HH.rawUserInfo) : {},
          TH = HH.isNewUser || "identitytoolkit#SignupNewUserResponse" === HH.kind;
        if (!RH && (null === HH || void 0 === HH ? void 0 : HH.idToken)) {
          const RH = null === (EH = null === (IH = jI(HH.idToken)) || void 0 === IH ? void 0 : IH.firebase) || void 0 === EH ? void 0 : EH.sign_in_provider;
          if (RH) return new tE(TH, "anonymous" !== RH && "custom" !== RH ? RH : null);
        }
        if (!RH) return null;
        switch (RH) {
          case "facebook.com":
            return new vE(TH, hH);
          case "github.com":
            return new bE(TH, hH);
          case "google.com":
            return new SE(TH, hH);
          case "twitter.com":
            return new xE(TH, hH, HH.screenName || null);
          case "custom":
          case "anonymous":
            return new tE(TH, null);
          default:
            return new tE(TH, RH, hH);
        }
      }(EH);
    }
    function IR(HH, IH) {
      return (0, RH.G)(HH).setPersistence(IH);
    }
    function ER(HH) {
      return CI(HH).initializeRecaptchaConfig();
    }
    function RR(HH, IH, EH, hH) {
      return (0, RH.G)(HH).onIdTokenChanged(IH, EH, hH);
    }
    function hR(HH, IH, EH) {
      return (0, RH.G)(HH).beforeAuthStateChanged(IH, EH);
    }
    function TR(HH, IH, EH, hH) {
      return (0, RH.G)(HH).onAuthStateChanged(IH, EH, hH);
    }
    function sR(HH) {
      (0, RH.G)(HH).useDeviceLanguage();
    }
    function eR(HH, IH) {
      return (0, RH.G)(HH).updateCurrentUser(IH);
    }
    function GR(HH) {
      return (0, RH.G)(HH).signOut();
    }
    async function AR(HH) {
      return (0, RH.G)(HH).delete();
    }
    class VR {
      constructor(HH, IH, EH) {
        this.type = HH, this.credential = IH, this.auth = EH;
      }
      static _fromIdtoken(HH, IH) {
        return new VR("enroll", HH, IH);
      }
      static _fromMfaPendingCredential(HH) {
        return new VR("signin", HH);
      }
      toJSON() {
        const HH = "enroll" === this.type ? "idToken" : "pendingCredential";
        return {
          multiFactorSession: {
            [HH]: this.credential
          }
        };
      }
      static fromJSON(HH) {
        var IH, EH;
        if (null === HH || void 0 === HH ? void 0 : HH.multiFactorSession) {
          if (null === (IH = HH.multiFactorSession) || void 0 === IH ? void 0 : IH.pendingCredential) return VR._fromMfaPendingCredential(HH.multiFactorSession.pendingCredential);
          if (null === (EH = HH.multiFactorSession) || void 0 === EH ? void 0 : EH.idToken) return VR._fromIdtoken(HH.multiFactorSession.idToken);
        }
        return null;
      }
    }
    class YR {
      constructor(HH, IH, EH) {
        this.session = HH, this.hints = IH, this.signInResolver = EH;
      }
      static _fromError(HH, IH) {
        const EH = CI(HH),
          RH = IH.customData._serverResponse,
          hH = (RH.mfaInfo || []).map(HH => qE._fromServerResponse(EH, HH));
        qH(RH.mfaPendingCredential, EH, "internal-error");
        const TH = VR._fromMfaPendingCredential(RH.mfaPendingCredential);
        return new YR(TH, hH, async HH => {
          const hH = await HH._process(EH, TH);
          delete RH.mfaInfo, delete RH.mfaPendingCredential;
          const sH = Object.assign(Object.assign({}, RH), {
            idToken: hH.idToken,
            refreshToken: hH.refreshToken
          });
          switch (IH.operationType) {
            case "signIn":
              const HH = await VE._fromIdTokenResponse(EH, IH.operationType, sH);
              return await EH._updateCurrentUser(HH.user), HH;
            case "reauthenticate":
              return qH(IH.user, EH, "internal-error"), VE._forOperation(IH.user, IH.operationType, sH);
            default:
              DH(EH, "internal-error");
          }
        });
      }
      async resolveSignIn(HH) {
        const IH = HH;
        return this.signInResolver(IH);
      }
    }
    function QR(HH, IH) {
      var EH;
      const hH = (0, RH.G)(HH),
        TH = IH;
      return qH(IH.customData.operationType, hH, "argument-error"), qH(null === (EH = TH.customData._serverResponse) || void 0 === EH ? void 0 : EH.mfaPendingCredential, hH, "argument-error"), YR._fromError(hH, TH);
    }
    class JR {
      constructor(HH) {
        this.user = HH, this.enrolledFactors = [], HH._onReload(IH => {
          IH.mfaInfo && (this.enrolledFactors = IH.mfaInfo.map(IH => qE._fromServerResponse(HH.auth, IH)));
        });
      }
      static _fromUser(HH) {
        return new JR(HH);
      }
      async getSession() {
        return VR._fromIdtoken(await this.user.getIdToken(), this.user.auth);
      }
      async enroll(HH, IH) {
        const EH = HH,
          RH = await this.getSession(),
          hH = await vH(this.user, EH._process(this.user.auth, RH, IH));
        return await this.user._updateTokensIfNecessary(hH), this.user.reload();
      }
      async unenroll(HH) {
        const IH = "string" === typeof HH ? HH : HH.uid,
          EH = await this.user.getIdToken();
        try {
          const HH = await vH(this.user, (RH = this.user.auth, hH = {
            idToken: EH,
            mfaEnrollmentId: IH
          }, aH(RH, "POST", "/v2/accounts/mfaEnrollment:withdraw", fH(RH, hH))));
          this.enrolledFactors = this.enrolledFactors.filter(HH => {
            let {
              uid: EH
            } = HH;
            return EH !== IH;
          }), await this.user._updateTokensIfNecessary(HH), await this.user.reload();
        } catch (TH) {
          throw TH;
        }
        var RH, hH;
      }
    }
    const OR = new WeakMap();
    function rR(HH) {
      const IH = (0, RH.G)(HH);
      return OR.has(IH) || OR.set(IH, JR._fromUser(IH)), OR.get(IH);
    }
    const FR = "__sak";
    class MR {
      constructor(HH, IH) {
        this.storageRetriever = HH, this.type = IH;
      }
      _isAvailable() {
        try {
          return this.storage ? (this.storage.setItem(FR, "1"), this.storage.removeItem(FR), Promise.resolve(!0)) : Promise.resolve(!1);
        } catch (HH) {
          return Promise.resolve(!1);
        }
      }
      _set(HH, IH) {
        return this.storage.setItem(HH, JSON.stringify(IH)), Promise.resolve();
      }
      _get(HH) {
        const IH = this.storage.getItem(HH);
        return Promise.resolve(IH ? JSON.parse(IH) : null);
      }
      _remove(HH) {
        return this.storage.removeItem(HH), Promise.resolve();
      }
      get storage() {
        return this.storageRetriever();
      }
    }
    class NR extends MR {
      constructor() {
        super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (HH, IH) => this.onStorageEvent(HH, IH), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function () {
          const HH = (0, RH.I)();
          return QI(HH) || NI(HH);
        }() && function () {
          try {
            return !(!window || window === window.top);
          } catch (HH) {
            return !1;
          }
        }(), this.fallbackToPolling = iE(), this._shouldAllowMigration = !0;
      }
      forAllChangedKeys(HH) {
        for (const IH of Object.keys(this.listeners)) {
          const EH = this.storage.getItem(IH),
            RH = this.localCache[IH];
          EH !== RH && HH(IH, RH, EH);
        }
      }
      onStorageEvent(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!HH.key) return void this.forAllChangedKeys((HH, IH, EH) => {
          this.notifyListeners(HH, EH);
        });
        const EH = HH.key;
        if (IH ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
          const RH = this.storage.getItem(EH);
          if (HH.newValue !== RH) null !== HH.newValue ? this.storage.setItem(EH, HH.newValue) : this.storage.removeItem(EH);else if (this.localCache[EH] === HH.newValue && !IH) return;
        }
        const hH = () => {
            const HH = this.storage.getItem(EH);
            (IH || this.localCache[EH] !== HH) && this.notifyListeners(EH, HH);
          },
          TH = this.storage.getItem(EH);
        (0, RH.S)() && 10 === document.documentMode && TH !== HH.newValue && HH.newValue !== HH.oldValue ? setTimeout(hH, 10) : hH();
      }
      notifyListeners(HH, IH) {
        this.localCache[HH] = IH;
        const EH = this.listeners[HH];
        if (EH) for (const RH of Array.from(EH)) RH(IH ? JSON.parse(IH) : IH);
      }
      startPolling() {
        this.stopPolling(), this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((HH, IH, EH) => {
            this.onStorageEvent(new StorageEvent("storage", {
              key: HH,
              oldValue: IH,
              newValue: EH
            }), !0);
          });
        }, 1e3);
      }
      stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
      }
      attachListener() {
        window.addEventListener("storage", this.boundEventHandler);
      }
      detachListener() {
        window.removeEventListener("storage", this.boundEventHandler);
      }
      _addListener(HH, IH) {
        0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[HH] || (this.listeners[HH] = new Set(), this.localCache[HH] = this.storage.getItem(HH)), this.listeners[HH].add(IH);
      }
      _removeListener(HH, IH) {
        this.listeners[HH] && (this.listeners[HH].delete(IH), 0 === this.listeners[HH].size && delete this.listeners[HH]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling());
      }
      async _set(HH, IH) {
        await super._set(HH, IH), this.localCache[HH] = JSON.stringify(IH);
      }
      async _get(HH) {
        const IH = await super._get(HH);
        return this.localCache[HH] = JSON.stringify(IH), IH;
      }
      async _remove(HH) {
        await super._remove(HH), delete this.localCache[HH];
      }
    }
    NR.type = "LOCAL";
    const ih = NR;
    class DR extends MR {
      constructor() {
        super(() => window.sessionStorage, "SESSION");
      }
      _addListener(HH, IH) {}
      _removeListener(HH, IH) {}
    }
    DR.type = "SESSION";
    const PR = DR;
    class XR {
      constructor(HH) {
        this.eventTarget = HH, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
      }
      static _getInstance(HH) {
        const IH = this.receivers.find(IH => IH.isListeningto(HH));
        if (IH) return IH;
        const EH = new XR(HH);
        return this.receivers.push(EH), EH;
      }
      isListeningto(HH) {
        return this.eventTarget === HH;
      }
      async handleEvent(HH) {
        const IH = HH,
          {
            eventId: EH,
            eventType: RH,
            data: hH
          } = IH.data,
          TH = this.handlersMap[RH];
        if (!(null === TH || void 0 === TH ? void 0 : TH.size)) return;
        IH.ports[0].postMessage({
          status: "ack",
          eventId: EH,
          eventType: RH
        });
        const sH = Array.from(TH).map(async HH => HH(IH.origin, hH)),
          eH = await function (HH) {
            return Promise.all(HH.map(async HH => {
              try {
                return {
                  fulfilled: !0,
                  value: await HH
                };
              } catch (IH) {
                return {
                  fulfilled: !1,
                  reason: IH
                };
              }
            }));
          }(sH);
        IH.ports[0].postMessage({
          status: "done",
          eventId: EH,
          eventType: RH,
          response: eH
        });
      }
      _subscribe(HH, IH) {
        0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[HH] || (this.handlersMap[HH] = new Set()), this.handlersMap[HH].add(IH);
      }
      _unsubscribe(HH, IH) {
        this.handlersMap[HH] && IH && this.handlersMap[HH].delete(IH), IH && 0 !== this.handlersMap[HH].size || delete this.handlersMap[HH], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler);
      }
    }
    function mh() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
        EH = "";
      for (let RH = 0; RH < IH; RH++) EH += Math.floor(10 * Math.random());
      return HH + EH;
    }
    XR.receivers = [];
    class ZR {
      constructor(HH) {
        this.target = HH, this.handlers = new Set();
      }
      removeMessageHandler(HH) {
        HH.messageChannel && (HH.messageChannel.port1.removeEventListener("message", HH.onMessage), HH.messageChannel.port1.close()), this.handlers.delete(HH);
      }
      async _send(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
        const RH = "undefined" !== typeof MessageChannel ? new MessageChannel() : null;
        if (!RH) throw new Error("connection_unavailable");
        let hH, TH;
        return new Promise((sH, eH) => {
          const GH = mh("", 20);
          RH.port1.start();
          const AH = setTimeout(() => {
            eH(new Error("unsupported_event"));
          }, EH);
          TH = {
            messageChannel: RH,
            onMessage(HH) {
              const IH = HH;
              if (IH.data.eventId === GH) switch (IH.data.status) {
                case "ack":
                  clearTimeout(AH), hH = setTimeout(() => {
                    eH(new Error("timeout"));
                  }, 3e3);
                  break;
                case "done":
                  clearTimeout(hH), sH(IH.data.response);
                  break;
                default:
                  clearTimeout(AH), clearTimeout(hH), eH(new Error("invalid_response"));
              }
            }
          }, this.handlers.add(TH), RH.port1.addEventListener("message", TH.onMessage), this.target.postMessage({
            eventType: HH,
            eventId: GH,
            data: IH
          }, [RH.port2]);
        }).finally(() => {
          TH && this.removeMessageHandler(TH);
        });
      }
    }
    function qR() {
      return window;
    }
    function LR() {
      return "undefined" !== typeof qR().WorkerGlobalScope && "function" === typeof qR().importScripts;
    }
    const gR = "firebaseLocalStorageDb",
      yR = "firebaseLocalStorage",
      oR = "fbase_key";
    class kh {
      constructor(HH) {
        this.request = HH;
      }
      toPromise() {
        return new Promise((HH, IH) => {
          this.request.addEventListener("success", () => {
            HH(this.request.result);
          }), this.request.addEventListener("error", () => {
            IH(this.request.error);
          });
        });
      }
    }
    function CR(HH, IH) {
      return HH.transaction([yR], IH ? "readwrite" : "readonly").objectStore(yR);
    }
    function cR() {
      const HH = indexedDB.open(gR, 1);
      return new Promise((IH, EH) => {
        HH.addEventListener("error", () => {
          EH(HH.error);
        }), HH.addEventListener("upgradeneeded", () => {
          const IH = HH.result;
          try {
            IH.createObjectStore(yR, {
              keyPath: oR
            });
          } catch (RH) {
            EH(RH);
          }
        }), HH.addEventListener("success", async () => {
          const EH = HH.result;
          EH.objectStoreNames.contains(yR) ? IH(EH) : (EH.close(), await function () {
            const HH = indexedDB.deleteDatabase(gR);
            return new kh(HH).toPromise();
          }(), IH(await cR()));
        });
      });
    }
    async function UR(HH, IH, EH) {
      const RH = CR(HH, !0).put({
        [oR]: IH,
        value: EH
      });
      return new kh(RH).toPromise();
    }
    function WR(HH, IH) {
      const EH = CR(HH, !0).delete(IH);
      return new kh(EH).toPromise();
    }
    class BR {
      constructor() {
        this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
      }
      async _openDb() {
        return this.db || (this.db = await cR()), this.db;
      }
      async _withRetries(HH) {
        let IH = 0;
        for (;;) try {
          const IH = await this._openDb();
          return await HH(IH);
        } catch (EH) {
          if (IH++ > 3) throw EH;
          this.db && (this.db.close(), this.db = void 0);
        }
      }
      async initializeServiceWorkerMessaging() {
        return LR() ? this.initializeReceiver() : this.initializeSender();
      }
      async initializeReceiver() {
        this.receiver = XR._getInstance(LR() ? self : null), this.receiver._subscribe("keyChanged", async (HH, IH) => ({
          keyProcessed: (await this._poll()).includes(IH.key)
        })), this.receiver._subscribe("ping", async (HH, IH) => ["keyChanged"]);
      }
      async initializeSender() {
        var HH, IH;
        if (this.activeServiceWorker = await async function () {
          if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
          try {
            return (await navigator.serviceWorker.ready).active;
          } catch (HH) {
            return null;
          }
        }(), !this.activeServiceWorker) return;
        this.sender = new ZR(this.activeServiceWorker);
        const EH = await this.sender._send("ping", {}, 800);
        EH && (null === (HH = EH[0]) || void 0 === HH ? void 0 : HH.fulfilled) && (null === (IH = EH[0]) || void 0 === IH ? void 0 : IH.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0);
      }
      async notifyServiceWorker(HH) {
        if (this.sender && this.activeServiceWorker && function () {
          var HH;
          return (null === (HH = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === HH ? void 0 : HH.controller) || null;
        }() === this.activeServiceWorker) try {
          await this.sender._send("keyChanged", {
            key: HH
          }, this.serviceWorkerReceiverAvailable ? 800 : 50);
        } catch (IH) {}
      }
      async _isAvailable() {
        try {
          if (!indexedDB) return !1;
          const HH = await cR();
          return await UR(HH, FR, "1"), await WR(HH, FR), !0;
        } catch (HH) {}
        return !1;
      }
      async _withPendingWrite(HH) {
        this.pendingWrites++;
        try {
          await HH();
        } finally {
          this.pendingWrites--;
        }
      }
      async _set(HH, IH) {
        return this._withPendingWrite(async () => (await this._withRetries(EH => UR(EH, HH, IH)), this.localCache[HH] = IH, this.notifyServiceWorker(HH)));
      }
      async _get(HH) {
        const IH = await this._withRetries(IH => async function (HH, IH) {
          const EH = CR(HH, !1).get(IH),
            RH = await new kh(EH).toPromise();
          return void 0 === RH ? null : RH.value;
        }(IH, HH));
        return this.localCache[HH] = IH, IH;
      }
      async _remove(HH) {
        return this._withPendingWrite(async () => (await this._withRetries(IH => WR(IH, HH)), delete this.localCache[HH], this.notifyServiceWorker(HH)));
      }
      async _poll() {
        const HH = await this._withRetries(HH => {
          const IH = CR(HH, !1).getAll();
          return new kh(IH).toPromise();
        });
        if (!HH) return [];
        if (0 !== this.pendingWrites) return [];
        const IH = [],
          EH = new Set();
        for (const {
          fbase_key: RH,
          value: hH
        } of HH) EH.add(RH), JSON.stringify(this.localCache[RH]) !== JSON.stringify(hH) && (this.notifyListeners(RH, hH), IH.push(RH));
        for (const RH of Object.keys(this.localCache)) this.localCache[RH] && !EH.has(RH) && (this.notifyListeners(RH, null), IH.push(RH));
        return IH;
      }
      notifyListeners(HH, IH) {
        this.localCache[HH] = IH;
        const EH = this.listeners[HH];
        if (EH) for (const RH of Array.from(EH)) RH(IH);
      }
      startPolling() {
        this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), 800);
      }
      stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
      }
      _addListener(HH, IH) {
        0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[HH] || (this.listeners[HH] = new Set(), this._get(HH)), this.listeners[HH].add(IH);
      }
      _removeListener(HH, IH) {
        this.listeners[HH] && (this.listeners[HH].delete(IH), 0 === this.listeners[HH].size && delete this.listeners[HH]), 0 === Object.keys(this.listeners).length && this.stopPolling();
      }
    }
    BR.type = "LOCAL";
    const fR = BR;
    const aR = 1e12;
    class nR {
      constructor(HH) {
        this.auth = HH, this.counter = aR, this._widgets = new Map();
      }
      render(HH, IH) {
        const EH = this.counter;
        return this._widgets.set(EH, new pR(HH, this.auth.name, IH || {})), this.counter++, EH;
      }
      reset(HH) {
        var IH;
        const EH = HH || aR;
        null === (IH = this._widgets.get(EH)) || void 0 === IH || IH.delete(), this._widgets.delete(EH);
      }
      getResponse(HH) {
        var IH;
        const EH = HH || aR;
        return (null === (IH = this._widgets.get(EH)) || void 0 === IH ? void 0 : IH.getResponse()) || "";
      }
      async execute(HH) {
        var IH;
        const EH = HH || aR;
        return null === (IH = this._widgets.get(EH)) || void 0 === IH || IH.execute(), "";
      }
    }
    class pR {
      constructor(HH, IH, EH) {
        this.params = EH, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
          this.execute();
        };
        const RH = "string" === typeof HH ? document.getElementById(HH) : HH;
        qH(RH, "argument-error", {
          appName: IH
        }), this.container = RH, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler);
      }
      getResponse() {
        return this.checkIfDeleted(), this.responseToken;
      }
      delete() {
        this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler);
      }
      execute() {
        this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout(() => {
          this.responseToken = function (HH) {
            const IH = [],
              EH = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (let RH = 0; RH < HH; RH++) IH.push(EH.charAt(Math.floor(Math.random() * EH.length)));
            return IH.join("");
          }(50);
          const {
            callback: HH,
            "expired-callback": IH
          } = this.params;
          if (HH) try {
            HH(this.responseToken);
          } catch (EH) {}
          this.timerId = window.setTimeout(() => {
            if (this.timerId = null, this.responseToken = null, IH) try {
              IH();
            } catch (EH) {}
            this.isVisible && this.execute();
          }, 6e4);
        }, 500));
      }
      checkIfDeleted() {
        if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!");
      }
    }
    const dR = LI("rcb"),
      uR = new CH(3e4, 6e4);
    class lR {
      constructor() {
        var HH;
        this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (HH = qR().grecaptcha) || void 0 === HH ? void 0 : HH.render);
      }
      load(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return qH(function (HH) {
          return HH.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(HH);
        }(IH), HH, "argument-error"), this.shouldResolveImmediately(IH) && XI(qR().grecaptcha) ? Promise.resolve(qR().grecaptcha) : new Promise((EH, hH) => {
          const TH = qR().setTimeout(() => {
            hH(PH(HH, "network-request-failed"));
          }, uR.get());
          qR()[dR] = () => {
            qR().clearTimeout(TH), delete qR()[dR];
            const RH = qR().grecaptcha;
            if (!RH || !XI(RH)) return void hH(PH(HH, "internal-error"));
            const sH = RH.render;
            RH.render = (HH, IH) => {
              const EH = sH(HH, IH);
              return this.counter++, EH;
            }, this.hostLanguage = IH, EH(RH);
          };
          qI("".concat("https://www.google.com/recaptcha/api.js?", "?").concat((0, RH.ab)({
            onload: dR,
            render: "explicit",
            hl: IH
          }))).catch(() => {
            clearTimeout(TH), hH(PH(HH, "internal-error"));
          });
        });
      }
      clearedOneInstance() {
        this.counter--;
      }
      shouldResolveImmediately(HH) {
        var IH;
        return !!(null === (IH = qR().grecaptcha) || void 0 === IH ? void 0 : IH.render) && (HH === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
      }
    }
    class KR {
      async load(HH) {
        return new nR(HH);
      }
      clearedOneInstance() {}
    }
    const wR = "recaptcha",
      zR = {
        theme: "DE",
        type: "image"
      };
    class tR {
      constructor(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, zR),
          EH = arguments.length > 2 ? arguments[2] : void 0;
        this.parameters = IH, this.type = wR, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set(), this.renderPromise = null, this.recaptcha = null, this.auth = CI(EH), this.isInvisible = "invisible" === this.parameters.size, qH("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
        const RH = "string" === typeof HH ? document.getElementById(HH) : HH;
        qH(RH, this.auth, "argument-error"), this.container = RH, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new KR() : new lR(), this.validateStartingState();
      }
      async verify() {
        this.assertNotDestroyed();
        const HH = await this.render(),
          IH = this.getAssertedRecaptcha(),
          EH = IH.getResponse(HH);
        return EH || new Promise(EH => {
          const RH = HH => {
            HH && (this.tokenChangeListeners.delete(RH), EH(HH));
          };
          this.tokenChangeListeners.add(RH), this.isInvisible && IH.execute(HH);
        });
      }
      render() {
        try {
          this.assertNotDestroyed();
        } catch (HH) {
          return Promise.reject(HH);
        }
        return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch(HH => {
          throw this.renderPromise = null, HH;
        })), this.renderPromise;
      }
      _reset() {
        this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId);
      }
      clear() {
        this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach(HH => {
          this.container.removeChild(HH);
        });
      }
      validateStartingState() {
        qH(!this.parameters.sitekey, this.auth, "argument-error"), qH(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), qH("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
      }
      makeTokenCallback(HH) {
        return IH => {
          if (this.tokenChangeListeners.forEach(HH => HH(IH)), "function" === typeof HH) HH(IH);else if ("string" === typeof HH) {
            const EH = qR()[HH];
            "function" === typeof EH && EH(IH);
          }
        };
      }
      assertNotDestroyed() {
        qH(!this.destroyed, this.auth, "internal-error");
      }
      async makeRenderPromise() {
        if (await this.init(), !this.widgetId) {
          let HH = this.container;
          if (!this.isInvisible) {
            const IH = document.createElement("div");
            HH.appendChild(IH), HH = IH;
          }
          this.widgetId = this.getAssertedRecaptcha().render(HH, this.parameters);
        }
        return this.widgetId;
      }
      async init() {
        qH(oH() && !LR(), this.auth, "internal-error"), await function () {
          let HH = null;
          return new Promise(IH => {
            "complete" !== document.readyState ? (HH = () => IH(), window.addEventListener("load", HH)) : IH();
          }).catch(IH => {
            throw HH && window.removeEventListener("load", HH), IH;
          });
        }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
        const HH = await async function (HH) {
          return (await aH(HH, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || "";
        }(this.auth);
        qH(HH, this.auth, "internal-error"), this.parameters.sitekey = HH;
      }
      getAssertedRecaptcha() {
        return qH(this.recaptcha, this.auth, "internal-error"), this.recaptcha;
      }
    }
    class jh {
      constructor(HH, IH) {
        this.verificationId = HH, this.onConfirmation = IH;
      }
      confirm(HH) {
        const IH = vI._fromVerification(this.verificationId, HH);
        return this.onConfirmation(IH);
      }
    }
    async function vR(HH, IH, EH) {
      const hH = CI(HH),
        TH = await xR(hH, IH, (0, RH.G)(EH));
      return new jh(TH, HH => PE(hH, HH));
    }
    async function bR(HH, IH, EH) {
      const hH = (0, RH.G)(HH);
      await NE(!1, hH, "phone");
      const TH = await xR(hH.auth, IH, (0, RH.G)(EH));
      return new jh(TH, HH => XE(hH, HH));
    }
    async function SR(HH, IH, EH) {
      const hH = (0, RH.G)(HH),
        TH = await xR(hH.auth, IH, (0, RH.G)(EH));
      return new jh(TH, HH => mR(hH, HH));
    }
    async function xR(HH, IH, EH) {
      var RH;
      const hH = await EH.verify();
      try {
        let TH;
        if (qH("string" === typeof hH, HH, "argument-error"), qH(EH.type === wR, HH, "argument-error"), TH = "string" === typeof IH ? {
          phoneNumber: IH
        } : IH, "session" in TH) {
          const IH = TH.session;
          if ("phoneNumber" in TH) {
            qH("enroll" === IH.type, HH, "internal-error");
            const EH = await function (HH, IH) {
              return aH(HH, "POST", "/v2/accounts/mfaEnrollment:start", fH(HH, IH));
            }(HH, {
              idToken: IH.credential,
              phoneEnrollmentInfo: {
                phoneNumber: TH.phoneNumber,
                recaptchaToken: hH
              }
            });
            return EH.phoneSessionInfo.sessionInfo;
          }
          {
            qH("signin" === IH.type, HH, "internal-error");
            const EH = (null === (RH = TH.multiFactorHint) || void 0 === RH ? void 0 : RH.uid) || TH.multiFactorUid;
            qH(EH, HH, "missing-multi-factor-info");
            const sH = await function (HH, IH) {
              return aH(HH, "POST", "/v2/accounts/mfaSignIn:start", fH(HH, IH));
            }(HH, {
              mfaPendingCredential: IH.credential,
              mfaEnrollmentId: EH,
              phoneSignInInfo: {
                recaptchaToken: hH
              }
            });
            return sH.phoneResponseInfo.sessionInfo;
          }
        }
        {
          const {
            sessionInfo: IH
          } = await async function (HH, IH) {
            return aH(HH, "POST", "/v1/accounts:sendVerificationCode", fH(HH, IH));
          }(HH, {
            phoneNumber: TH.phoneNumber,
            recaptchaToken: hH
          });
          return IH;
        }
      } finally {
        EH._reset();
      }
    }
    async function Hh(HH, IH) {
      await ME((0, RH.G)(HH), IH);
    }
    class Ih {
      constructor(HH) {
        this.providerId = Ih.PROVIDER_ID, this.auth = CI(HH);
      }
      verifyPhoneNumber(HH, IH) {
        return xR(this.auth, HH, (0, RH.G)(IH));
      }
      static credential(HH, IH) {
        return vI._fromVerification(HH, IH);
      }
      static credentialFromResult(HH) {
        const IH = HH;
        return Ih.credentialFromTaggedObject(IH);
      }
      static credentialFromError(HH) {
        return Ih.credentialFromTaggedObject(HH.customData || {});
      }
      static credentialFromTaggedObject(HH) {
        let {
          _tokenResponse: IH
        } = HH;
        if (!IH) return null;
        const {
          phoneNumber: EH,
          temporaryProof: RH
        } = IH;
        return EH && RH ? vI._fromTokenResponse(EH, RH) : null;
      }
    }
    function Eh(HH, IH) {
      return IH ? TI(IH) : (qH(HH._popupRedirectResolver, HH, "argument-error"), HH._popupRedirectResolver);
    }
    Ih.PROVIDER_ID = "phone", Ih.PHONE_SIGN_IN_METHOD = "phone";
    class Rh extends aI {
      constructor(HH) {
        super("custom", "custom"), this.params = HH;
      }
      _getIdTokenResponse(HH) {
        return zI(HH, this._buildIdpRequest());
      }
      _linkToIdToken(HH, IH) {
        return zI(HH, this._buildIdpRequest(IH));
      }
      _getReauthenticationResolver(HH) {
        return zI(HH, this._buildIdpRequest());
      }
      _buildIdpRequest(HH) {
        const IH = {
          requestUri: this.params.requestUri,
          sessionId: this.params.sessionId,
          postBody: this.params.postBody,
          tenantId: this.params.tenantId,
          pendingToken: this.params.pendingToken,
          returnSecureToken: !0,
          returnIdpCredential: !0
        };
        return HH && (IH.idToken = HH), IH;
      }
    }
    function hh(HH) {
      return DE(HH.auth, new Rh(HH), HH.bypassAuthState);
    }
    function Th(HH) {
      const {
        auth: IH,
        user: EH
      } = HH;
      return qH(EH, IH, "internal-error"), iR(EH, new Rh(HH), HH.bypassAuthState);
    }
    async function sh(HH) {
      const {
        auth: IH,
        user: EH
      } = HH;
      return qH(EH, IH, "internal-error"), ME(EH, new Rh(HH), HH.bypassAuthState);
    }
    class eh {
      constructor(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.auth = HH, this.resolver = EH, this.user = RH, this.bypassAuthState = hH, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(IH) ? IH : [IH];
      }
      execute() {
        return new Promise(async (HH, IH) => {
          this.pendingPromise = {
            resolve: HH,
            reject: IH
          };
          try {
            this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
          } catch (EH) {
            this.reject(EH);
          }
        });
      }
      async onAuthEvent(HH) {
        const {
          urlResponse: IH,
          sessionId: EH,
          postBody: RH,
          tenantId: hH,
          error: TH,
          type: sH
        } = HH;
        if (TH) return void this.reject(TH);
        const eH = {
          auth: this.auth,
          requestUri: IH,
          sessionId: EH,
          tenantId: hH || void 0,
          postBody: RH || void 0,
          user: this.user,
          bypassAuthState: this.bypassAuthState
        };
        try {
          this.resolve(await this.getIdpTask(sH)(eH));
        } catch (GH) {
          this.reject(GH);
        }
      }
      onError(HH) {
        this.reject(HH);
      }
      getIdpTask(HH) {
        switch (HH) {
          case "signInViaPopup":
          case "signInViaRedirect":
            return hh;
          case "linkViaPopup":
          case "linkViaRedirect":
            return sh;
          case "reauthViaPopup":
          case "reauthViaRedirect":
            return Th;
          default:
            DH(this.auth, "internal-error");
        }
      }
      resolve(HH) {
        gH(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(HH), this.unregisterAndCleanUp();
      }
      reject(HH) {
        gH(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(HH), this.unregisterAndCleanUp();
      }
      unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
      }
    }
    const Gh = new CH(2e3, 1e4);
    async function Ah(HH, IH, EH) {
      const RH = CI(HH);
      mI(HH, IH, HE);
      const hH = Eh(RH, EH);
      return new Qh(RH, "signInViaPopup", IH, hH).executeNotNull();
    }
    async function Vh(HH, IH, EH) {
      const hH = (0, RH.G)(HH);
      mI(hH.auth, IH, HE);
      const TH = Eh(hH.auth, EH);
      return new Qh(hH.auth, "reauthViaPopup", IH, TH, hH).executeNotNull();
    }
    async function Yh(HH, IH, EH) {
      const hH = (0, RH.G)(HH);
      mI(hH.auth, IH, HE);
      const TH = Eh(hH.auth, EH);
      return new Qh(hH.auth, "linkViaPopup", IH, TH, hH).executeNotNull();
    }
    class Qh extends eh {
      constructor(HH, IH, EH, RH, hH) {
        super(HH, IH, RH, hH), this.provider = EH, this.authWindow = null, this.pollId = null, Qh.currentPopupAction && Qh.currentPopupAction.cancel(), Qh.currentPopupAction = this;
      }
      async executeNotNull() {
        const HH = await this.execute();
        return qH(HH, this.auth, "internal-error"), HH;
      }
      async onExecution() {
        gH(1 === this.filter.length, "Popup operations only handle one event");
        const HH = mh();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], HH), this.authWindow.associatedEvent = HH, this.resolver._originValidation(this.auth).catch(HH => {
          this.reject(HH);
        }), this.resolver._isIframeWebStorageSupported(this.auth, HH => {
          HH || this.reject(PH(this.auth, "web-storage-unsupported"));
        }), this.pollUserCancellation();
      }
      get eventId() {
        var HH;
        return (null === (HH = this.authWindow) || void 0 === HH ? void 0 : HH.associatedEvent) || null;
      }
      cancel() {
        this.reject(PH(this.auth, "cancelled-popup-request"));
      }
      cleanUp() {
        this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Qh.currentPopupAction = null;
      }
      pollUserCancellation() {
        const HH = () => {
          var IH, EH;
          (null === (EH = null === (IH = this.authWindow) || void 0 === IH ? void 0 : IH.window) || void 0 === EH ? void 0 : EH.closed) ? this.pollId = window.setTimeout(() => {
            this.pollId = null, this.reject(PH(this.auth, "popup-closed-by-user"));
          }, 8e3) : this.pollId = window.setTimeout(HH, Gh.get());
        };
        HH();
      }
    }
    Qh.currentPopupAction = null;
    const Jh = "pendingRedirect",
      Oh = new Map();
    class rh extends eh {
      constructor(HH, IH) {
        super(HH, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], IH, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null;
      }
      async execute() {
        let HH = Oh.get(this.auth._key());
        if (!HH) {
          try {
            const IH = (await async function (HH, IH) {
              const EH = iT(IH),
                RH = Nh(HH);
              if (!(await RH._isAvailable())) return !1;
              const hH = "true" === (await RH._get(EH));
              return await RH._remove(EH), hH;
            }(this.resolver, this.auth)) ? await super.execute() : null;
            HH = () => Promise.resolve(IH);
          } catch (IH) {
            HH = () => Promise.reject(IH);
          }
          Oh.set(this.auth._key(), HH);
        }
        return this.bypassAuthState || Oh.set(this.auth._key(), () => Promise.resolve(null)), HH();
      }
      async onAuthEvent(HH) {
        if ("signInViaRedirect" === HH.type) return super.onAuthEvent(HH);
        if ("unknown" !== HH.type) {
          if (HH.eventId) {
            const IH = await this.auth._redirectUserForId(HH.eventId);
            if (IH) return this.user = IH, super.onAuthEvent(HH);
            this.resolve(null);
          }
        } else this.resolve(null);
      }
      async onExecution() {}
      cleanUp() {}
    }
    async function Fh(HH, IH) {
      return Nh(HH)._set(iT(IH), "true");
    }
    function Mh(HH, IH) {
      Oh.set(HH._key(), IH);
    }
    function Nh(HH) {
      return TI(HH._redirectPersistence);
    }
    function iT(HH) {
      return GI(Jh, HH.config.apiKey, HH.name);
    }
    function Dh(HH, IH, EH) {
      return async function (HH, IH, EH) {
        const RH = CI(HH);
        mI(HH, IH, HE), await RH._initializationPromise;
        const hH = Eh(RH, EH);
        return await Fh(hH, RH), hH._openRedirect(RH, IH, "signInViaRedirect");
      }(HH, IH, EH);
    }
    function Ph(HH, IH, EH) {
      return async function (HH, IH, EH) {
        const hH = (0, RH.G)(HH);
        mI(hH.auth, IH, HE), await hH.auth._initializationPromise;
        const TH = Eh(hH.auth, EH);
        await Fh(TH, hH.auth);
        const sH = await qh(hH);
        return TH._openRedirect(hH.auth, IH, "reauthViaRedirect", sH);
      }(HH, IH, EH);
    }
    function Xh(HH, IH, EH) {
      return async function (HH, IH, EH) {
        const hH = (0, RH.G)(HH);
        mI(hH.auth, IH, HE), await hH.auth._initializationPromise;
        const TH = Eh(hH.auth, EH);
        await NE(!1, hH, IH.providerId), await Fh(TH, hH.auth);
        const sH = await qh(hH);
        return TH._openRedirect(hH.auth, IH, "linkViaRedirect", sH);
      }(HH, IH, EH);
    }
    async function mT(HH, IH) {
      return await CI(HH)._initializationPromise, Zh(HH, IH, !1);
    }
    async function Zh(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const RH = CI(HH),
        hH = Eh(RH, IH),
        TH = new rh(RH, hH, EH),
        sH = await TH.execute();
      return sH && !EH && (delete sH.user._redirectEventId, await RH._persistUserIfCurrent(sH.user), await RH._setRedirectUser(null, IH)), sH;
    }
    async function qh(HH) {
      const IH = mh("".concat(HH.uid, ":::"));
      return HH._redirectEventId = IH, await HH.auth._setRedirectUser(HH), await HH.auth._persistUserIfCurrent(HH), IH;
    }
    class Lh {
      constructor(HH) {
        this.auth = HH, this.cachedEventUids = new Set(), this.consumers = new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
      }
      registerConsumer(HH) {
        this.consumers.add(HH), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, HH) && (this.sendToConsumer(this.queuedRedirectEvent, HH), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
      }
      unregisterConsumer(HH) {
        this.consumers.delete(HH);
      }
      onEvent(HH) {
        if (this.hasEventBeenHandled(HH)) return !1;
        let IH = !1;
        return this.consumers.forEach(EH => {
          this.isEventForConsumer(HH, EH) && (IH = !0, this.sendToConsumer(HH, EH), this.saveEventToCache(HH));
        }), this.hasHandledPotentialRedirect || !function (HH) {
          switch (HH.type) {
            case "signInViaRedirect":
            case "linkViaRedirect":
            case "reauthViaRedirect":
              return !0;
            case "unknown":
              return yh(HH);
            default:
              return !1;
          }
        }(HH) || (this.hasHandledPotentialRedirect = !0, IH || (this.queuedRedirectEvent = HH, IH = !0)), IH;
      }
      sendToConsumer(HH, IH) {
        var EH;
        if (HH.error && !yh(HH)) {
          const RH = (null === (EH = HH.error.code) || void 0 === EH ? void 0 : EH.split("auth/")[1]) || "internal-error";
          IH.onError(PH(this.auth, RH));
        } else IH.onAuthEvent(HH);
      }
      isEventForConsumer(HH, IH) {
        const EH = null === IH.eventId || !!HH.eventId && HH.eventId === IH.eventId;
        return IH.filter.includes(HH.type) && EH;
      }
      hasEventBeenHandled(HH) {
        return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(gh(HH));
      }
      saveEventToCache(HH) {
        this.cachedEventUids.add(gh(HH)), this.lastProcessedEventTime = Date.now();
      }
    }
    function gh(HH) {
      return [HH.type, HH.eventId, HH.sessionId, HH.tenantId].filter(HH => HH).join("-");
    }
    function yh(HH) {
      let {
        type: IH,
        error: EH
      } = HH;
      return "unknown" === IH && (null === EH || void 0 === EH ? void 0 : EH.code) === "auth/".concat("no-auth-event");
    }
    const oh = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
      kT = /^https?/;
    async function Ch(HH) {
      if (HH.config.emulator) return;
      const {
        authorizedDomains: IH
      } = await async function (HH) {
        return aH(HH, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
      }(HH);
      for (const RH of IH) try {
        if (ch(RH)) return;
      } catch (EH) {}
      DH(HH, "unauthorized-domain");
    }
    function ch(HH) {
      const IH = yH(),
        {
          protocol: EH,
          hostname: RH
        } = new URL(IH);
      if (HH.startsWith("chrome-extension://")) {
        const hH = new URL(HH);
        return "" === hH.hostname && "" === RH ? "chrome-extension:" === EH && HH.replace("chrome-extension://", "") === IH.replace("chrome-extension://", "") : "chrome-extension:" === EH && hH.hostname === RH;
      }
      if (!kT.test(EH)) return !1;
      if (oh.test(HH)) return RH === HH;
      const hH = HH.replace(/\./g, "\\.");
      return new RegExp("^(.+\\." + hH + "|" + hH + ")$", "i").test(RH);
    }
    const Uh = new CH(3e4, 6e4);
    function Wh() {
      const HH = qR().___jsl;
      if (null === HH || void 0 === HH ? void 0 : HH.H) for (const IH of Object.keys(HH.H)) if (HH.H[IH].r = HH.H[IH].r || [], HH.H[IH].L = HH.H[IH].L || [], HH.H[IH].r = [...HH.H[IH].L], HH.CP) for (let EH = 0; EH < HH.CP.length; EH++) HH.CP[EH] = null;
    }
    let Bh = null;
    function fh(HH) {
      return Bh = Bh || function (HH) {
        return new Promise((IH, EH) => {
          var RH, hH, TH;
          function sH() {
            Wh(), gapi.load("gapi.iframes", {
              callback: () => {
                IH(gapi.iframes.getContext());
              },
              ontimeout: () => {
                Wh(), EH(PH(HH, "network-request-failed"));
              },
              timeout: Uh.get()
            });
          }
          if (null === (hH = null === (RH = qR().gapi) || void 0 === RH ? void 0 : RH.iframes) || void 0 === hH ? void 0 : hH.Iframe) IH(gapi.iframes.getContext());else {
            if (!(null === (TH = qR().gapi) || void 0 === TH ? void 0 : TH.load)) {
              const IH = LI("iframefcb");
              return qR()[IH] = () => {
                gapi.load ? sH() : EH(PH(HH, "network-request-failed"));
              }, qI("https://apis.google.com/js/api.js?onload=".concat(IH)).catch(HH => EH(HH));
            }
            sH();
          }
        }).catch(HH => {
          throw Bh = null, HH;
        });
      }(HH), Bh;
    }
    const ah = new CH(5e3, 15e3),
      nh = {
        style: {
          position: "absolute",
          top: "-100px",
          width: "1px",
          height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
      },
      ph = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
    function dh(HH) {
      const IH = HH.config;
      qH(IH.authDomain, HH, "auth-domain-config-required");
      const EH = IH.emulator ? cH(IH, "emulator/auth/iframe") : "https://".concat(HH.config.authDomain, "/").concat("__/auth/iframe"),
        TH = {
          apiKey: IH.apiKey,
          appName: HH.name,
          v: hH.g
        },
        sH = ph.get(HH.config.apiHost);
      sH && (TH.eid = sH);
      const eH = HH._getFrameworks();
      return eH.length && (TH.fw = eH.join(",")), "".concat(EH, "?").concat((0, RH.ab)(TH).slice(1));
    }
    const uh = {
      location: "yes",
      resizable: "yes",
      statusbar: "yes",
      toolbar: "no"
    };
    class lh {
      constructor(HH) {
        this.window = HH, this.associatedEvent = null;
      }
      close() {
        if (this.window) try {
          this.window.close();
        } catch (HH) {}
      }
    }
    function Kh(HH, IH, EH) {
      let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
        TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
      const sH = Math.max((window.screen.availHeight - TH) / 2, 0).toString(),
        eH = Math.max((window.screen.availWidth - hH) / 2, 0).toString();
      let GH = "";
      const AH = Object.assign(Object.assign({}, uh), {
          width: hH.toString(),
          height: TH.toString(),
          top: sH,
          left: eH
        }),
        VH = (0, RH.I)().toLowerCase();
      EH && (GH = JI(VH) ? "_blank" : EH), YI(VH) && (IH = IH || "http://localhost", AH.scrollbars = "yes");
      const YH = Object.entries(AH).reduce((HH, IH) => {
        let [EH, RH] = IH;
        return "".concat(HH).concat(EH, "=").concat(RH, ",");
      }, "");
      if (function () {
        var HH;
        return NI(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.I)()) && !!(null === (HH = window.navigator) || void 0 === HH ? void 0 : HH.standalone);
      }(VH) && "_self" !== GH) return function (HH, IH) {
        const EH = document.createElement("a");
        EH.href = HH, EH.target = IH;
        const RH = document.createEvent("MouseEvent");
        RH.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), EH.dispatchEvent(RH);
      }(IH || "", GH), new lh(null);
      const QH = window.open(IH || "", GH, YH);
      qH(QH, HH, "popup-blocked");
      try {
        QH.focus();
      } catch (JH) {}
      return new lh(QH);
    }
    const wh = "__/auth/handler",
      zh = "emulator/auth/handler",
      th = encodeURIComponent("fac");
    async function jT(HH, IH, EH, TH, sH, eH) {
      qH(HH.config.authDomain, HH, "auth-domain-config-required"), qH(HH.config.apiKey, HH, "invalid-api-key");
      const GH = {
        apiKey: HH.config.apiKey,
        appName: HH.name,
        authType: EH,
        redirectUrl: TH,
        v: hH.g,
        eventId: sH
      };
      if (IH instanceof HE) {
        IH.setDefaultLanguage(HH.languageCode), GH.providerId = IH.providerId || "", (0, RH.P)(IH.getCustomParameters()) || (GH.customParameters = JSON.stringify(IH.getCustomParameters()));
        for (const [HH, IH] of Object.entries(eH || {})) GH[HH] = IH;
      }
      if (IH instanceof IE) {
        const HH = IH.getScopes().filter(HH => "" !== HH);
        HH.length > 0 && (GH.scopes = HH.join(","));
      }
      HH.tenantId && (GH.tid = HH.tenantId);
      const AH = GH;
      for (const RH of Object.keys(AH)) void 0 === AH[RH] && delete AH[RH];
      const VH = await HH._getAppCheckToken(),
        YH = VH ? "#".concat(th, "=").concat(encodeURIComponent(VH)) : "";
      return "".concat(function (HH) {
        let {
          config: IH
        } = HH;
        if (!IH.emulator) return "https://".concat(IH.authDomain, "/").concat(wh);
        return cH(IH, zh);
      }(HH), "?").concat((0, RH.ab)(AH).slice(1)).concat(YH);
    }
    const vh = "webStorageSupport";
    const bh = class {
      constructor() {
        this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = PR, this._completeRedirectFn = Zh, this._overrideRedirectResult = Mh;
      }
      async _openPopup(HH, IH, EH, RH) {
        var hH;
        gH(null === (hH = this.eventManagers[HH._key()]) || void 0 === hH ? void 0 : hH.manager, "_initialize() not called before _openPopup()");
        return Kh(HH, await jT(HH, IH, EH, yH(), RH), mh());
      }
      async _openRedirect(HH, IH, EH, RH) {
        await this._originValidation(HH);
        return function (HH) {
          qR().location.href = HH;
        }(await jT(HH, IH, EH, yH(), RH)), new Promise(() => {});
      }
      _initialize(HH) {
        const IH = HH._key();
        if (this.eventManagers[IH]) {
          const {
            manager: HH,
            promise: EH
          } = this.eventManagers[IH];
          return HH ? Promise.resolve(HH) : (gH(EH, "If manager is not set, promise should be"), EH);
        }
        const EH = this.initAndGetManager(HH);
        return this.eventManagers[IH] = {
          promise: EH
        }, EH.catch(() => {
          delete this.eventManagers[IH];
        }), EH;
      }
      async initAndGetManager(HH) {
        const IH = await async function (HH) {
            const IH = await fh(HH),
              EH = qR().gapi;
            return qH(EH, HH, "internal-error"), IH.open({
              where: document.body,
              url: dh(HH),
              messageHandlersFilter: EH.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
              attributes: nh,
              dontclear: !0
            }, IH => new Promise(async (EH, RH) => {
              await IH.restyle({
                setHideOnLeave: !1
              });
              const hH = PH(HH, "network-request-failed"),
                TH = qR().setTimeout(() => {
                  RH(hH);
                }, ah.get());
              function sH() {
                qR().clearTimeout(TH), EH(IH);
              }
              IH.ping(sH).then(sH, () => {
                RH(hH);
              });
            }));
          }(HH),
          EH = new Lh(HH);
        return IH.register("authEvent", IH => {
          qH(null === IH || void 0 === IH ? void 0 : IH.authEvent, HH, "invalid-auth-event");
          return {
            status: EH.onEvent(IH.authEvent) ? "ACK" : "ERROR"
          };
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[HH._key()] = {
          manager: EH
        }, this.iframes[HH._key()] = IH, EH;
      }
      _isIframeWebStorageSupported(HH, IH) {
        this.iframes[HH._key()].send(vh, {
          type: vh
        }, EH => {
          var RH;
          const hH = null === (RH = null === EH || void 0 === EH ? void 0 : EH[0]) || void 0 === RH ? void 0 : RH[vh];
          void 0 !== hH && IH(!!hH), DH(HH, "internal-error");
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
      }
      _originValidation(HH) {
        const IH = HH._key();
        return this.originValidationPromises[IH] || (this.originValidationPromises[IH] = Ch(HH)), this.originValidationPromises[IH];
      }
      get _shouldInitProactively() {
        return iE() || QI() || NI();
      }
    };
    class Sh {
      constructor(HH) {
        this.factorId = HH;
      }
      _process(HH, IH, EH) {
        switch (IH.type) {
          case "enroll":
            return this._finalizeEnroll(HH, IH.credential, EH);
          case "signin":
            return this._finalizeSignIn(HH, IH.credential);
          default:
            return LH("unexpected MultiFactorSessionType");
        }
      }
    }
    class xh extends Sh {
      constructor(HH) {
        super("phone"), this.credential = HH;
      }
      static _fromCredential(HH) {
        return new xh(HH);
      }
      _finalizeEnroll(HH, IH, EH) {
        return function (HH, IH) {
          return aH(HH, "POST", "/v2/accounts/mfaEnrollment:finalize", fH(HH, IH));
        }(HH, {
          idToken: IH,
          displayName: EH,
          phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
      }
      _finalizeSignIn(HH, IH) {
        return function (HH, IH) {
          return aH(HH, "POST", "/v2/accounts/mfaSignIn:finalize", fH(HH, IH));
        }(HH, {
          mfaPendingCredential: IH,
          phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
      }
    }
    class HT {
      constructor() {}
      static assertion(HH) {
        return xh._fromCredential(HH);
      }
    }
    HT.FACTOR_ID = "phone";
    class IT {
      static assertionForEnrollment(HH, IH) {
        return ET._fromSecret(HH, IH);
      }
      static assertionForSignIn(HH, IH) {
        return ET._fromEnrollmentId(HH, IH);
      }
      static async generateSecret(HH) {
        const IH = HH;
        qH("undefined" !== typeof IH.auth, "internal-error");
        const EH = await (RH = IH.auth, hH = {
          idToken: IH.credential,
          totpEnrollmentInfo: {}
        }, aH(RH, "POST", "/v2/accounts/mfaEnrollment:start", fH(RH, hH)));
        var RH, hH;
        return RT._fromStartTotpMfaEnrollmentResponse(EH, IH.auth);
      }
    }
    IT.FACTOR_ID = "totp";
    class ET extends Sh {
      constructor(HH, IH, EH) {
        super("totp"), this.otp = HH, this.enrollmentId = IH, this.secret = EH;
      }
      static _fromSecret(HH, IH) {
        return new ET(IH, void 0, HH);
      }
      static _fromEnrollmentId(HH, IH) {
        return new ET(IH, HH);
      }
      async _finalizeEnroll(HH, IH, EH) {
        return qH("undefined" !== typeof this.secret, HH, "argument-error"), function (HH, IH) {
          return aH(HH, "POST", "/v2/accounts/mfaEnrollment:finalize", fH(HH, IH));
        }(HH, {
          idToken: IH,
          displayName: EH,
          totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
        });
      }
      async _finalizeSignIn(HH, IH) {
        qH(void 0 !== this.enrollmentId && void 0 !== this.otp, HH, "argument-error");
        const EH = {
          verificationCode: this.otp
        };
        return function (HH, IH) {
          return aH(HH, "POST", "/v2/accounts/mfaSignIn:finalize", fH(HH, IH));
        }(HH, {
          mfaPendingCredential: IH,
          mfaEnrollmentId: this.enrollmentId,
          totpVerificationInfo: EH
        });
      }
    }
    class RT {
      constructor(HH, IH, EH, RH, hH, TH, sH) {
        this.sessionInfo = TH, this.auth = sH, this.secretKey = HH, this.hashingAlgorithm = IH, this.codeLength = EH, this.codeIntervalSeconds = RH, this.enrollmentCompletionDeadline = hH;
      }
      static _fromStartTotpMfaEnrollmentResponse(HH, IH) {
        return new RT(HH.totpSessionInfo.sharedSecretKey, HH.totpSessionInfo.hashingAlgorithm, HH.totpSessionInfo.verificationCodeLength, HH.totpSessionInfo.periodSec, new Date(HH.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), HH.totpSessionInfo.sessionInfo, IH);
      }
      _makeTotpVerificationInfo(HH) {
        return {
          sessionInfo: this.sessionInfo,
          verificationCode: HH
        };
      }
      generateQrCodeUrl(HH, IH) {
        var EH;
        let RH = !1;
        return (hT(HH) || hT(IH)) && (RH = !0), RH && (hT(HH) && (HH = (null === (EH = this.auth.currentUser) || void 0 === EH ? void 0 : EH.email) || "unknownuser"), hT(IH) && (IH = this.auth.name)), "otpauth://totp/".concat(IH, ":").concat(HH, "?secret=").concat(this.secretKey, "&issuer=").concat(IH, "&algorithm=").concat(this.hashingAlgorithm, "&digits=").concat(this.codeLength);
      }
    }
    function hT(HH) {
      return "undefined" === typeof HH || 0 === (null === HH || void 0 === HH ? void 0 : HH.length);
    }
    var TT = "@firebase/auth",
      sT = "0.23.2";
    class eT {
      constructor(HH) {
        this.auth = HH, this.internalListeners = new Map();
      }
      getUid() {
        var HH;
        return this.assertAuthConfigured(), (null === (HH = this.auth.currentUser) || void 0 === HH ? void 0 : HH.uid) || null;
      }
      async getToken(HH) {
        if (this.assertAuthConfigured(), await this.auth._initializationPromise, !this.auth.currentUser) return null;
        return {
          accessToken: await this.auth.currentUser.getIdToken(HH)
        };
      }
      addAuthTokenListener(HH) {
        if (this.assertAuthConfigured(), this.internalListeners.has(HH)) return;
        const IH = this.auth.onIdTokenChanged(IH => {
          HH((null === IH || void 0 === IH ? void 0 : IH.stsTokenManager.accessToken) || null);
        });
        this.internalListeners.set(HH, IH), this.updateProactiveRefresh();
      }
      removeAuthTokenListener(HH) {
        this.assertAuthConfigured();
        const IH = this.internalListeners.get(HH);
        IH && (this.internalListeners.delete(HH), IH(), this.updateProactiveRefresh());
      }
      assertAuthConfigured() {
        qH(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
      }
      updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
      }
    }
    const GT = (0, RH.E)("authIdTokenMaxAge") || 300;
    let AT = null;
    const VT = HH => async IH => {
      const EH = IH && (await IH.getIdTokenResult()),
        RH = EH && (new Date().getTime() - Date.parse(EH.issuedAtTime)) / 1e3;
      if (RH && RH > GT) return;
      const hH = null === EH || void 0 === EH ? void 0 : EH.token;
      AT !== hH && (AT = hH, await fetch(HH, {
        method: hH ? "POST" : "DELETE",
        headers: hH ? {
          Authorization: "Bearer ".concat(hH)
        } : {}
      }));
    };
    function YT() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hH.U)();
      const IH = (0, hH.F)(HH, "auth");
      if (IH.isInitialized()) return IH.getImmediate();
      const EH = UI(HH, {
          popupRedirectResolver: bh,
          persistence: [fR, ih, PR]
        }),
        TH = (0, RH.E)("authTokenSyncURL");
      if (TH) {
        const HH = VT(TH);
        hR(EH, HH, () => HH(EH.currentUser)), RR(EH, IH => HH(IH));
      }
      const sH = (0, RH.B)("auth");
      return sH && WI(EH, "http://".concat(sH)), EH;
    }
    var QT;
    QT = "Browser", (0, hH.J)(new eH.i("auth", (HH, IH) => {
      let {
        options: EH
      } = IH;
      const RH = HH.getProvider("app").getImmediate(),
        hH = HH.getProvider("heartbeat"),
        TH = HH.getProvider("app-check-internal"),
        {
          apiKey: sH,
          authDomain: eH
        } = RH.options;
      qH(sH && !sH.includes(":"), "invalid-api-key", {
        appName: RH.name
      });
      const GH = {
          apiKey: sH,
          authDomain: eH,
          clientPlatform: QT,
          apiHost: "identitytoolkit.googleapis.com",
          tokenApiHost: "securetoken.googleapis.com",
          apiScheme: "https",
          sdkClientVersion: DI(QT)
        },
        AH = new kE(RH, hH, TH, GH);
      return function (HH, IH) {
        const EH = (null === IH || void 0 === IH ? void 0 : IH.persistence) || [],
          RH = (Array.isArray(EH) ? EH : [EH]).map(TI);
        (null === IH || void 0 === IH ? void 0 : IH.errorMap) && HH._updateErrorMap(IH.errorMap), HH._initializeWithPersistence(RH, null === IH || void 0 === IH ? void 0 : IH.popupRedirectResolver);
      }(AH, EH), AH;
    }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((HH, IH, EH) => {
      HH.getProvider("auth-internal").initialize();
    })), (0, hH.J)(new eH.i("auth-internal", HH => (HH => new eT(HH))(CI(HH.getProvider("auth").getImmediate())), "PRIVATE").setInstantiationMode("EXPLICIT")), (0, hH._)(TT, sT, function (HH) {
      switch (HH) {
        case "Node":
          return "node";
        case "ReactNative":
          return "rn";
        case "Worker":
          return "webworker";
        case "Cordova":
          return "cordova";
        default:
          return;
      }
    }(QT)), (0, hH._)(TT, sT, "esm2017");
  }
};
//# sourceMappingURL=ug4nu.64.678ef41b.chunk.js.map
//# debugId=0208c435-2dd7-518c-b63d-01642b24aa83