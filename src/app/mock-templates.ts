import { TemplateCard } from './models/template-card';

export const TEMPLATECARDS: TemplateCard[] = [
    {
        id: "1",
        rev: "1",
        type: "template",
        name: "bank",
        allProps: new Array<string>(
            "name",
            "URL",
            "account number",
            "userid",
            "password",
            "email",
            "security phone",
            "security code",
            "security questions",
            "routing number"
        )
      },
      {
        id: "2",
        rev: "1",
        type: "template",
        name: "credit card",
        allProps: new Array<string>(
            "name",
            "issuer",
            "URL",
            "userid",
            "password",
            "email",
            "security phone",
            "account number",
            "expiration",
            "security code",
            "pin",
            "security questions",
            "security image"
        )
      }
    ]