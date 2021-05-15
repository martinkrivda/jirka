import * as yup from 'yup';

import { emailsStringToEmailArray } from './';

export const translatedValidations = (t) => ({
  email: email(t),
  requiredString: requiredString(t),
  number: number(t),
  requiredNumber: requiredNumber(t),
  requiredEmail: requiredEmail(t),
  requiredCsosRegNum: requiredCsosRegNum(t),
  passwordsDontMatch: passwordsDontMatch(t),
  object: (obj) => yup.object().shape(obj),
  requiredDate: requiredDate(t),
  url: url(t),
  time: time(),
  requiredTime: requiredTime(t),
  uniqueMinMaxEmails: uniqueMinMaxEmails(t),
  boolean: boolean(),
});

const string = () => yup.string().nullable();

const boolean = () => yup.boolean();

const number = (t) => yup.number().typeError(t('Validations.Number'));

const date = (t) => yup.date().typeError(t('Validations.Date'));

const url = (t) => string().url().nullable();

const requiredString = (t) => string().required(t('Validations.Required'));

const requiredNumber = (t) => number(t).required(t('Validations.Required'));

const email = (t) => string().email(t('Validations.Email'));

const requiredEmail = (t) => requiredString(t).email(t('Validations.Email'));

const requiredDate = (t) => date(t).required(t('Validations.Date'));

const requiredCsosRegNum = (t) =>
  string()
    .matches(/^[A-Z]{3}\\d{4}$/, { message: t('Validations.RegNum') })
    .required(t('Validations.RegNum'));

const time = () => string().matches(/^\\d{1,2}:\\d{1,2}:\\d{1,2}$/);

const requiredTime = (t) => time().required(t('Validations.Required'));

const passwordsDontMatch = (t) => (passwordFieldName) =>
  requiredString(t).oneOf(
    [yup.ref(passwordFieldName)],
    t('Validations.PasswordsDontMatch'),
  );

const uniqueMinMaxEmails = (t) => ({ min, max }) =>
  requiredString(t).test('uniqueMinMaxEmails', '', function (emails = '') {
    const { path, createError } = this;

    const rawEmails = emailsStringToEmailArray(emails);

    const emailsSet = new Set(rawEmails);

    if (
      rawEmails
        .map((email_) => email(t).isValidSync(email_))
        .filter((booleanValue) => !booleanValue).length !== 0
    ) {
      return createError({
        path,
        message: t('Validations.EmailsContainNotEmail'),
      });
    }

    if (rawEmails.length !== emailsSet.size) {
      return createError({
        path,
        message: t('Validations.EmailsUnique'),
      });
    }

    if (rawEmails.length < min || rawEmails.length > max) {
      return createError({
        path,
        message: t('Validations.EmailsMinMax', { min, max }),
      });
    }

    return true;
  });
