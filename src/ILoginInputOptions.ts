/**
 * This project is a continuation of Inrupt's awesome solid-auth-fetcher project,
 * see https://www.npmjs.com/package/@inrupt/solid-auth-fetcher.
 * Copyright 2020 The Solid Project.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import URL from "url-parse";

type ILoginInputOptions =
  | (IIssuerLoginInputOptions & IRedirectLoginInputOptions)
  | (IIssuerLoginInputOptions & IPopupLoginInputOptions)
  | (IWebIdLoginInputOptions & IRedirectLoginInputOptions)
  | (IWebIdLoginInputOptions & IPopupLoginInputOptions);
export default ILoginInputOptions;

export interface ICoreLoginInputOptions {
  state?: string;
  clientId?: string;
  doNotAutoRedirect?: boolean;
  clientName?: string;
}

export interface IWebIdLoginInputOptions extends ICoreLoginInputOptions {
  webId: string;
}

export interface IIssuerLoginInputOptions extends ICoreLoginInputOptions {
  oidcIssuer: string;
}

export interface IRedirectLoginInputOptions extends ICoreLoginInputOptions {
  redirect: string;
}

export interface IPopupLoginInputOptions extends ICoreLoginInputOptions {
  popUp: boolean;
  popUpRedirectPath: string;
}

export const loginInputOptionsSchema = {
  type: "object",
  properties: {
    oidcIssuer: { type: "string", format: "uri", shouldConvertToUrl: true },
    webId: { type: "string", format: "uri", shouldConvertToUrl: true },
    redirect: { type: "string", format: "uri", shouldConvertToUrl: true },
    popUp: { type: "boolean" },
    popUpRedirectPath: { type: "string" },
    state: { type: "string" },
    clientId: { type: "string" },
    doNotAutoRedirect: { type: "boolean" },
    clientName: { type: "string" }
  },
  oneOf: [{ required: ["oidcIssuer"] }, { required: ["webId"] }]
};
