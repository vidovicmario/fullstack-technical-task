import React from 'react';
import { Route , Switch } from 'react-router-dom';

import {ROUTES} from './lib/routes'

import SignInContainer from './components/pages/SignIn/SignInContainer';
import SignUpContainer from './components/pages/SignUp/SignUpContainer';
import UploadPdfContainer from './components/pages/UploadPdf/UploadPdfContainer';
import { Home } from './components/pages/Home/Home';


const Router = () => {
    return (
        <>
            <Switch>
                <Route path={ROUTES.SIGN_IN}>
                    <SignInContainer />
                </Route>
                <Route path={ROUTES.SIGN_UP}>
                    <SignUpContainer />
                </Route>
                <Route path={ROUTES.UPLOAD_PDF}>
                    <UploadPdfContainer />
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Router;