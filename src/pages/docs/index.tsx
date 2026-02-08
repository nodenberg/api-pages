import React from 'react';
import {Redirect} from '@docusaurus/router';

export default function DocsIndexRedirect(): JSX.Element {
  return <Redirect to="/docs/intro" />;
}
