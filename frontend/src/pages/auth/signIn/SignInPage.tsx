import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Formik } from 'formik';
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons';

import { Link, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import {
  CircularProgress,
  Container,
  Grid,
  Button,
  InputAdornment,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { Field, CheckBoxField } from '../../../organisms';
import { useAuth, translatedValidations } from '../../../utils';
import PATHNAMES from '../../../pathnames';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },

  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

interface SignInValues {
  email: string;
  password: string;
  remember: boolean;
}

export const SignInPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { signin } = useAuth();
  const [
    login,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(LOGIN_MUTATION);
  const { t } = useTranslation();

  console.log(mutationError);

  const initialValues: SignInValues = {
    email: '',
    password: '',
    remember: false,
  };

  const { object, requiredString, requiredEmail } = translatedValidations(t);

  const validationSchema = object({
    email: requiredEmail,
    password: requiredString,
  });

  return (
    <main>
      <section className="flex flex-middle my-8 mt-8 mb-4">
        <Container>
          <p className="text-center">
            <Link to={PATHNAMES.dashboard()} className="text-gray">
              <FontAwesomeIcon icon={faAngleLeft} className="mr-4" /> Back to
              homepage
            </Link>
          </p>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} className="flex flex-middle flex-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 w-100 fmxw-500">
                <div className="text-center mb-4 mt-0">
                  <h3 className="mb-0">Přihlaš se do klubového IS</h3>
                </div>
                {mutationError && (
                  <Alert severity="error">Error. Please try again.</Alert>
                )}
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    const response = await login({
                      variables: values,
                    });
                    const token = response.data.token;
                    const user = response.data.user;
                    const privileges = response.data.privileges;
                    signin({ token, user, privileges });
                    setSubmitting(false);
                    history.push('/');
                  }}
                >
                  <Form>
                    <Field
                      className="mb-24 w-100"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      type="email"
                      label={t('User.Email')}
                      name="email"
                      autoComplete="email"
                      autoFocus
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Field
                      className="mb-24 w-100"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label={t('User.Password')}
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CheckBoxField
                      className="mb-8"
                      value="remember"
                      name="remember"
                      id="remember"
                      color="primary"
                      label={t('Page.Auth.SignIn.RememberMe')}
                    />
                    <div className="flex flex-middle mb-8">
                      <div className={classes.wrapper}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={mutationLoading}
                        >
                          {t('Page.Auth.SignIn.SignIn')}
                        </Button>
                        {mutationLoading && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                      <span className="ml-16 mr-8">
                        {t('Page.Auth.SignIn.Or')}
                      </span>
                      <Button
                        className="capitalize"
                        onClick={() => history.push(PATHNAMES.signUp())}
                      >
                        {t('Page.Auth.SignUp.SignUp')}
                      </Button>
                    </div>
                    <Button
                      className="text-primary"
                      onClick={() => history.push(PATHNAMES.passwordReset())}
                    >
                      {t('Page.Auth.SignIn.PasswordReset?')}
                    </Button>
                  </Form>
                </Formik>
                <div className="flex flex-center flex-middle mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Link className="fw-bold">{` Create account `}</Link>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
};
